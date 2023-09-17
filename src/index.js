const { app } = require('./server')

app.listen(3333, () => {
  console.log('Api rodando na porta 3333')
})