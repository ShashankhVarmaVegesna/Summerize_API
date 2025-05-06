# 🧠 Azure Summarizer API

An intelligent API that uses **Azure AI Language Service** to generate meaningful summaries from long blocks of text. Built with **Node.js**, secured with **dotenv**, validated with **express-validator**, and kept alive using **PM2**.

---

## 🌟 Key Features

- ✨ Text Summarization using Azure's `ExtractiveSummarization`
- 📘 Swagger UI Docs at `/docs`
- 🛡️ Input validation and sanitization
- 🧾 Structured JSON responses with error handling
- 🔒 Secured API Key with `.env`
- 🔁 Process management using PM2
- 📷 Includes screenshots, error codes, and testing examples

---

## 📂 Tech Stack

- **Node.js** + **Express**
- **Azure AI Language API**
- **express-validator**
- **PM2**
- **Swagger (OpenAPI 3.0)**

---

## 🧰 How to Run

### 🔧 Prerequisites

- Node.js
- Azure AI Language Resource (Key + Endpoint)

### 📥 Installation

```bash
git clone https://github.com/ShashankhVarmaVegesna/Summerize_API.git
cd Summerize_API
npm install
```

### 📄 Setup `.env` file

```env
AZURE_API_KEY=https:7YZR63NXhPaoZrLMD10V9DyY0JBPdBoItcTnfxYecLESBfOE8teMJQQJ99BEACYeBjFXJ3w3AAAaACOGsdEj
AZURE_ENDPOINT=https://azure-ai-summarizer.cognitiveservices.azure.com/
```

### ▶️ Start Server

```bash
node app.js
# OR (recommended)
pm2 start app.js
pm2 save
```

---

## 🧪 API Reference

### `POST /api/summarize`

**Request Body:**

```json
{
  "text": "Climate change is one of the most pressing challenges facing our planet today. It refers to the long-term alteration of temperature and typical weather patterns in a place, largely caused by human activities such as the burning of fossil fuels, deforestation, and industrial processes. These activities increase the concentration of greenhouse gases in the atmosphere, trapping heat and leading to global warming. The consequences of climate change are far-reaching, including rising sea levels, more frequent and severe weather events, disruptions to agriculture, and threats to biodiversity. Addressing climate change requires global cooperation and immediate action to reduce emissions, transition to renewable energy sources, and promote sustainable development."
}
```

**Response:**

```json
{
  "summary": "Climate change is one of the most pressing challenges facing our planet today. The consequences of climate change are far-reaching, including rising sea levels, more frequent and severe weather events, disruptions to agriculture, and threats to biodiversity. Addressing climate change requires global cooperation and immediate action to reduce emissions, transition to renewable energy sources, and promote sustainable development."
}
```

### ❌ Error Responses

| Code | Meaning                          |
|------|----------------------------------|
| 400  | Missing or invalid `text` input |
| 500  | Azure API or internal failure   |

---

## 📘 Swagger Docs

Visit [http://localhost:3010/docs](http://localhost:3010/docs)  
Try out the API interactively with Swagger UI.

---

## 🧼 Data Sanitization

- Only string input allowed for `text`
- Minimum length of 10 characters
- Trimmed and validated using `express-validator`

---

## 💡 Design Justification

- **Azure AI** is used due to its scalable, pre-trained summarization model.
- **Express-validator** ensures inputs are safe and properly structured.
- **PM2** keeps the service running 24/7 and supports restarts on crash.
- **Swagger** adds clarity and allows others to test the API visually.
- **.env** keeps secrets out of version control for security.

---

## 🚀 Deployment Ready

- ✅ Compatible with Render / Railway / Azure VM
- Includes `ecosystem.config.js` for PM2 deployment
- Logs viewable via: `pm2 logs`

---

## 📸 Screenshots

![Swagger UI](docs/swagger-ui.png)
![Postman Example](docs/postman-test.png)

---

## 🧨 Don't Forget

⚠️ Delete your Azure resource after grading to avoid surprise charges.

---

## 👤 Author

**Shashankh Varma Vegesna**  
[GitHub Profile](https://github.com/ShashankhVarmaVegesna)

