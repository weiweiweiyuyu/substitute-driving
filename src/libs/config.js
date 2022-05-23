const config = {
  isOnline: process.env.NODE_ENV === 'production',
  apiUrl: 'https://autumnfish.cn/',
  httpCode: {
    success: 0
  }
}
config.apiUrl = config.isOnline ? 'https://autumnfish.cn/' : config.apiUrl
