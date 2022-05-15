const { User } = require('../models');

module.exports = {
  async userFindOne(email) {
    return await User.findOne({ where: { email } });
  }
}