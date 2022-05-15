// Services
const { userFindOne } = require('../../services/user.service');

// Utils
const { responseSuccess, responseError } = require('../../utils/responseHandler');

module.exports = {
  async login(req, res) {
    try {
      const { email } = req.body;

      const user = await userFindOne(email);
      if (!user) return await responseError(res, null, 404, 'Email Address is not exists');

      return await responseSuccess(res, 'Login success', user, {});
    } catch (error) {
      const statusCode = error.statusCode && 500;
      return await responseError(res, error, statusCode, 'Login error, please try again later');
    }
  },
  async logout(req, res) {
    try {
      return await responseSuccess(res, 'Logout success', {}, {})
    } catch (error) {
      const statusCode = error.statusCode && 500;
      return await responseError(res, error, statusCode, 'Logout error, please try again later');
    }
  },
}