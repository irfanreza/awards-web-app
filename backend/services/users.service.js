const { User } = require('../models');

module.exports = {
  async findOneUser(email) {
    return await User.findOne({ where: { email } });
  }
}