const socket = io()

socket.on('connect', () => {
    console.log('Socket conectado')
})

socket.on('disconnect', () => {
    console.log('Socket desconectado')
})

const main = document.querySelector('main')

const nombreId = document.querySelector('#nombre')
const mensajeId = document.querySelector('#mensaje')
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const nombre = nombreId.value
    const mensaje = mensajeId.value

    socket.emit('mensaje', { nombre, mensaje }, (payload) => {
        mensajeId.value = ''
        appendMensaje(payload)
    })    
})

socket.on('mensaje', (payload) => {
    //console.log(payload)
    appendMensaje(payload)
})

const appendMensaje = (payload) => {
    main.innerHTML = main.innerHTML + `<div><strong>${payload.nombre}: </strong> ${payload.mensaje}</di>`
    main.scrollTop = main.scrollHeight - main.clientHeight
}