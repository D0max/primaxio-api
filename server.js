const express = require('express');


const app = express();
app.get('/', (req, res) => {
  res.send('ok')
})
app.use(express.json());

const port = process.env.BASE_URL_BACK || 8000;



app.listen(port, () => {
  console.log(`Server started on ${port} port `)
})
