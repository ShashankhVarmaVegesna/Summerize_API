
const axios = require('axios');

exports.summarizeText = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  try {
    const endpoint = `${process.env.AZURE_ENDPOINT}/language/analyze-text/jobs?api-version=2023-04-01`;
    const headers = {
      'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY,
      'Content-Type': 'application/json'
    };

    const response = await axios.post(endpoint, {
      displayName: "SummarizationJob",
      analysisInput: {
        documents: [{ id: "1", language: "en", text }]
      },
      tasks: [{
        kind: "ExtractiveSummarization",
        parameters: { sentenceCount: 3 }
      }]
    }, { headers });

    const operationLocation = response.headers['operation-location'];

    const pollResult = await new Promise((resolve, reject) => {
      const interval = setInterval(async () => {
        const result = await axios.get(operationLocation, { headers });
        if (result.data.status === 'succeeded') {
          clearInterval(interval);
          resolve(result.data);
        } else if (result.data.status === 'failed') {
          clearInterval(interval);
          reject(new Error('Azure summarization job failed.'));
        }
      }, 3000);
    });

    const sentences = pollResult.tasks.items[0].results.documents[0].sentences.map(s => s.text);
    res.json({ summary: sentences.join(' ') });

  } catch (err) {
    const errorInfo = err.response?.data || err.message || err;
    console.error("Azure Summarization Error:", errorInfo);
    res.status(500).json({ error: errorInfo });
  }
  
};
