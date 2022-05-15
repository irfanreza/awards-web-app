// Utils
const { responseSuccess, responseError } = require('../../utils/responseHandler');

module.exports = {
  async login(req, res) {
    try {
      responseSuccess(res, 'Login success', {}, {});
    } catch (error) {
      const statusCode = error.statusCode && 500;
      responseError(res, error, statusCode, 'Login error, please try again later');
    }
  },
  async logout(req, res) {
    try {
      responseSuccess(res, 'Logout success', {}, {})
    } catch (error) {
      const statusCode = error.statusCode && 500;
      responseError(res, error, statusCode, 'Logout error, please try again later');
    }
  },
}