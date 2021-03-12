var faker = require("faker");
var _ = require("lodash");

// ------------------------------
// ------------------------------
generaUtenze(100);
// ------------------------------
// ------------------------------

// Genero n utenze chiamando il servizio di autenticazione di json-server-auth
function generaUtenze(numeroUtenti){
  // registra almeno 1 utenza admin
  registraUser({
    id: 0,
    name: '',
    surname: '',
    birthDate: '',
    deleted: false,
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin'
  });
  // registra n utenze create con faker
  _.times(numeroUtenti, num => registraUser({
      id: num+1,
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      birthDate: faker.date.past(),
      deleted: faker.random.boolean(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  ));
}

// Effettua chiamata HTTP POST verso http://localhost:8000/register per registrare l'utente passato come argomento
function registraUser(user){
  const https = require('http')

  const data = JSON.stringify(user)

  const options = {
    hostname: 'localhost',
    port: 8000,
    path: '/register',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('error', error => {
    console.error(error)
  })

  req.write(data)
  req.end()
}
