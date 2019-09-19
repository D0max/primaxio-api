const express = require('express');


const app = express();
app.get('/', (req, res) => {
  res.send('ok')
})
app.use(express.json());




app.listen(process.env.BASE_URL_BACK, () => {
  console.log(`Server started on ${port} port `)
})
