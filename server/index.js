const express = require('express')
const app = express()
const port = 3001
const mc = require('./controller/message_controll')


app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));
 
const messagesBaseUrl = '/api/messages'

app.post(messagesBaseUrl, mc.createMessage)

app.get(messagesBaseUrl, mc.readMessage)

app.put(`${messagesBaseUrl}/:id`, mc.updateMessage)

app.delete(`${messagesBaseUrl}/:id`, mc.deleteMessage)

app.listen(port, () => console.log(`listeing on ${port}`));
