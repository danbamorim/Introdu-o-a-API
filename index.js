// o teste : http://localhost:3000/createproduct
const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }), //é responsável por analisar dados provenientes de formulários HTML, e por isso é comumente utilizado em aplicativos web para processar dados de formulários.
)

app.use(express.json()) // Configurando o Express para analisar automaticamente o corpo das solicitações HTTP como JSON e tornar os dados JSON disponíveis no objeto req.body para que você possa manipulá-los facilmente em rotas e controladores.

app.post('/createproduct', (req, res) => {
  const name = req.body.name
  const price = req.body.price

  if (!name) {
    res.status(422).json({ message: `O campo nome precisa ser enviado!` }) // 422 é a mensagem de erro.
    return
  }

  console.log(name)
  console.log(price)

  res
    .status(201) // 201 é a mensagem positiva 
    .json({ message: `O produto: ${name} foi criado com sucesso!` })
})

app.get('/', (req, res) => {
  res.json({ message: 'Primeira rota criada com sucesso!' })
})

app.listen(3000)