'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async (request, reply) => {
      return { root: true }
    }
  })
}
