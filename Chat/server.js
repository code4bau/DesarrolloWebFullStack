const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.use(express.static('public'))

const io = require('socket.io')(server)

io.on('connection', socket => { 
    //console.log('Socket conectado', socket.id)

    socket.on('disconnect', () => {
        //console.log('Socket desconectado', socket.id)
    })

    socket.on('mensaje', (payload, callback) => {
        //io.emit('mensaje', payload)
        //socket.emit('mensaje', payload)
        socket.broadcast.emit('mensaje', payload)

        callback(payload)
    })
})

server.listen(3000, () => console.log(`http://localhost:3000`))
