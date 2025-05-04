
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const summarizeRoutes = require('./routes/summarize');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api', summarizeRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(errorHandler);
