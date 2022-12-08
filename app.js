const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('안녕하세요, 클라우드타입입니다.')
})

app.listen(port, () => {
  console.log(`이 어플리케이션은 ${port}번 포트에서 실행되고 있습니다.`)
})
