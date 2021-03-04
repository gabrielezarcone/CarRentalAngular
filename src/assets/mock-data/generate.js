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
    }))
  }
}
