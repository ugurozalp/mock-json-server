module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    faker.locale = "tr";
    return {
        customer: _.times(10, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
                email: faker.internet.email(),
                address: faker.address.city(),
                company: faker.company.companyName()
            }
        })
    }
}
