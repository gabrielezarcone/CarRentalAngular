module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");

  const usersNumber = 100;
  const autoNumber = 50;
  const prenotazioniNumber = 50;

  return {
    users: _.concat([{
      id: 0,
      name: '',
      surname: '',
      birthDate: '',
      deleted: false,
      username: 'admin',
      password: 'admin'
    }], _.times(usersNumber, num => {
      return {
        id: num+1,
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        birthDate: faker.date.past(),
        deleted: faker.random.boolean(),
        username: faker.internet.userName(),
        password: faker.internet.password()
      }
    })),
    auto: _.times(autoNumber, num => {
      return {
        id: num,
        costruttore: faker.vehicle.manufacturer(),
        modello: faker.vehicle.model(),
        immatricolazione: faker.date.past(),
        targa: faker.vehicle.vrm(),
        tipologia: faker.vehicle.type()
      }
    }),
    ruolo:[
      {
        id: 0,
        ruolo: 'ROLE_ADMIN'
      },
      {
        id: 1,
        ruolo: 'ROLE_CUSTOMER'
      }
    ],
    user_ruoli: _.concat([{
      user_id: 0,
      ruolo_id: 0
    }], _.times(100, num => {
      return {
        user_id: num+1,
        ruolo_id: 1
      }
    })),
    prenotazioni: _.times(prenotazioniNumber, num => {
      return {
        id: num,
        inizio: faker.date.future(),
        fine: faker.date.future(),
        stato: faker.random.arrayElement(['RIFIUTATO','PENDING','APPROVATO']),
        user: _.random(0,usersNumber),
        auto: _.random(0,autoNumber)
      }
    })
  }
}
