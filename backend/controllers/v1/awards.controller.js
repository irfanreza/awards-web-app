// Services
const { findAllAward } = require('../../services/awards.service');

// Utils
const { responseSuccess, responseError } = require('../../utils/responseHandler');

module.exports = {
  async getAllAwards(req, res) {
    try {
      const { page = 1, limit = 5 } = req.query
      const { types, point_range } = req.body;

      const awards = await findAllAward({ page, limit, types, point_range });
      return await responseSuccess(res, 'Get all awards success', awards, {});
    } catch (error) {
      const statusCode = error.statusCode && 500;
      return await responseError(res, error, statusCode, 'Get all awards, please try again later');
    }
  }
}