const express = require('express')
const app = express()
const port = 3000

const serviceId = "service_jzctxt8";
const templateId = "template_0664mfm"; 

app.get('/kontakt', (req, res) => {
  res.json({
    id: serviceId,
    templateId: templateId
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
