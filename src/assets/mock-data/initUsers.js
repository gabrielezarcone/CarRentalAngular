var faker = require("faker");
var _ = require("lodash");
var atob = require('atob');

// ------------------------------
// ------------------------------
generaUtenze(100);
// ------------------------------
// ------------------------------

// Genero n utenze chiamando il servizio di autenticazione di json-server-auth
function generaUtenze(numeroUtenti){
  // registra almeno 1 utenza admin
  registraAdmin();
  // registra dei customer predefiniti
  registraCustomerNonCasuali();
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
function registraUser(user, admin){
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
      var obj = JSON.parse(d+'');
      var token = obj.accessToken;
      if(token){
        var playload = token.match(/\.(.*)\./);
        var decoded = JSON.parse(atob(playload[1]))
        console.log(decoded);
        if (admin){
          ruoloAdmin(decoded.sub);
        }
      }
    })
  })

  req.on('error', error => {
    console.error(error)
  })

  req.write(data)
  req.end()
}

function registraAdmin(){
  registraUser({
    id: 0,
    name: '',
    surname: '',
    birthDate: '',
    deleted: false,
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, true);
}


function ruoloAdmin(userId){
  console.log("id::: "+userId);
  const https = require('http')

  const data = JSON.stringify(
    {
      id: userId,
      userId: userId,
      ruoloId: 0
    }
  )

  const options = {
    hostname: 'localhost',
    port: 8000,
    path: '/user_ruoli/'+userId,
    method: 'PUT',
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

function registraCustomerNonCasuali(){
  registraUser({
    name: 'Mario',
    surname: 'Rossi',
    birthDate: '',
    deleted: false,
    username: 'mr',
    email: 'mr@mr.com',
    password: 'mariorossi'
  })
}
