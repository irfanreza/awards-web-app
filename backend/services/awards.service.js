const { Op } = require('sequelize');
const { Award } = require('../models');

module.exports = {
  async findAllAward(query) {
    const options = {
      where: {},
      limit: query.limit,
      offset: 0 + (query.page - 1) * query.limit,
    };
    
    if (query.types && query.types.length > 0) {
      options.where['type'] = { [Op.in]: query.types };
    }

    if (query.point_range) {
      const MAX_INT32_VALUE = 2147483647;
      const min = query.point_range.min || 0;
      const max = query.point_range.max || MAX_INT32_VALUE;
      options.where['exchange_point'] = { [Op.between]: [min, max] };
    }

    return [await Award.count(options), await Award.findAll(options)]
  }
}