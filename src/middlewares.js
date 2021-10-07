function notFound(req, res, next) {
  res.status(404)
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`)
  next(error)
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    success: false,
    submission: false,
    error: err.message,
    // eslint-disable-next-line no-undef
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  })
}

module.exports = {
  notFound,
  errorHandler,
}
