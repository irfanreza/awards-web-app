module.exports = {
  getMetaPagination(page, limit, count) {
    page = +page, limit = +limit;
    return {
      current_page: page,
      last_page: Math.ceil(count/limit),
      per_page: limit,
      total: count
    }
  }
}