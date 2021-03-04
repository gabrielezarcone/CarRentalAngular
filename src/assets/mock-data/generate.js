module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");

  return {
    users: _.concat([{
      id: 0,
      name: '',
      surname: '',
      birthDate: '',
      deleted: false,
      username: 'admin',
      password: 'admin'
    }], _.times(100, num => {
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
    auto: _.times(50, num => {
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
    }))
  }
}
