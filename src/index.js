const app = require("./app")

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5001
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`)
  /* eslint-enable no-console */
})
