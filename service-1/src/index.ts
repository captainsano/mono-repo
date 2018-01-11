import * as express from 'express'

const app = express()

app.get('/service-1/', (req, res) => {
  res.json({ name: 'service-1' })
})

app.listen(8000, () => console.log('listening on port 8000'))
