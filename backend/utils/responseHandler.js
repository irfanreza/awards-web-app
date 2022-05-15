module.exports = {
  async responseSuccess(res, message, data, meta = {}) {
    return res.status(200).send({
      success: true,
      message: message,
      data,
      meta
    })
  },
  async responseError(res, error, statusCode = 500, message) {
    return res.status(statusCode).send({
      success: false,
      message: error ? error.message : message,
    })
  }
}