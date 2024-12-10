import http from "node:http"

function listener(request, response){

}

const PORT = 3333
http.createServer(listener).listen(() => {
    console.log(`Rodando na porta ${PORT}`)
})