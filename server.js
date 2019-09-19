const express = require('express');

const app = express();

app.use(express.json());

const port = process.env.BASE_URL_BACK;

app.listen(port, () => {
  console.log(`Server started on ${port} port `)
})
