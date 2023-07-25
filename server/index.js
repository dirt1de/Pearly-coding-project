import express from 'express'
import cors from 'cors'
import * as MESSAGE from './message.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => { res.send('server active') })

app.post('/send-message', MESSAGE.sendMessage)

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})