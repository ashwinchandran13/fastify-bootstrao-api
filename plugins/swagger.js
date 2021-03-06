const fp = require('fastify-plugin');

module.exports = fp((fastify, opts, next) => {

    fastify.register(require('fastify-swagger'), {
        routePrefix: '/swagger',
        swagger: {
          info: {
            title: 'Notes Api',
            description: 'CRUD Notes',
            version: '0.1.0'
          },
          externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
          },
          host: 'localhost:3000',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json'],
        },
        uiConfig: {
          docExpansion: 'full',
          deepLinking: false
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        exposeRoute: true
      })

    next();
})