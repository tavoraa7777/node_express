const { application } = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

application.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

application.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")

})