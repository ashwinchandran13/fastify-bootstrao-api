module.exports = async (fastify, opts, next) => {
    fastify.route({
        method: 'GET',
        url: '/notes',
        schema: {
            tags: ['Notes'],
            description: 'Get all notes',
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', description: 'Unique identifier for a particular note' },
                            title: { type: 'string', description: 'Title of the note' },
                            body: { type: 'string', description: 'Main content of the note' }
                        }
                    }
                }
            }
        },
        handler: async (request, reply) => {
            return [];
        }
    });
    
    fastify.route({
        method: 'POST',
        url: '/notes',
        schema: {
            tags: ['Notes'],
            description: 'Create a note',
            body: {
                type: 'object',
                required: ['title', 'body'],
                properties: {
                    title: { type: 'string', description: 'Unique identifier for a particular note' },
                    body: { type: 'string', description: 'Main content of the note' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: { type: 'number', description: 'Unique identifier for a particular note' },
                        title: { type: 'string', description: 'Title of the note' },
                        body: { type: 'string', description: 'Main content of the note' }
                    }
                }
            }
        },
        handler: async (request, reply) => {
            return [];
        }
    });

    fastify.route({
        method: 'PUT',
        url: '/notes/:id',
        schema: {
            tags: ['Notes'],
            description: 'Update a note',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'number', description: 'Id of the note' }
                }
            },
            body: {
                type: 'object',
                required: ['title', 'body'],
                properties: {
                    title: { type: 'string', description: 'Unique identifier for a particular note' },
                    body: { type: 'string', description: 'Main content of the note' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: { type: 'number', description: 'Unique identifier for a particular note' },
                        title: { type: 'string', description: 'Title of the note' },
                        body: { type: 'string', description: 'Main content of the note' }
                    }
                }
            }
        },
        handler: async (request, reply) => {
            return [];
        }
    });

    fastify.route({
        method: 'DELETE',
        url: '/notes/:id',
        schema: {
            tags: ['Notes'],
            description: 'Delete a note - WARNING -PERMANENT',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'number', description: 'Id of the note' }
                }
            },
            response: {
                204: { type: 'string', default: 'No content' }
            }
        },
        handler: async (request, reply) => {
            return;
        }
    });


    next();
};