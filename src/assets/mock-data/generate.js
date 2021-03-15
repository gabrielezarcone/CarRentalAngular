module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");

  const usersNumber = 100;
  const autoNumber = 50;
  const prenotazioniNumber = 200;

  return {
    users: [],
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
    user_ruoli: _.times(100, num => {
      return {
        id: num,
        userId: num,
        ruoloId: 1
      }
    }),
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
