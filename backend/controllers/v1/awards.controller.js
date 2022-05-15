// Utils
const { responseSuccess, responseError } = require('../../utils/responseHandler');

module.exports = {
  async getAllAwards(req, res) {
    try {
      responseSuccess(res, 'Get all awards success', {}, {});
    } catch (error) {
      const statusCode = error.statusCode && 500;
      responseError(res, error, statusCode, 'Get all awards, please try again later');
    }
  }
}