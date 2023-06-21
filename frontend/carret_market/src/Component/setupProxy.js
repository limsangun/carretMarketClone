// 프록시 서버 설정을 위한 setupProxy.js 파일

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8081', // 프록시할 대상 서버의 주소
      changeOrigin: true,
    })
  );
};
