module.exports = {
  cache: {
    engine: 'memory'
  },
  cors: true,
  state: {
    cookies: {
      strictHeader: false
    }
  },
  views: {
    engines: {
      html: 'handlebars'
    },
    path: __dirname + '/views'
  }
};