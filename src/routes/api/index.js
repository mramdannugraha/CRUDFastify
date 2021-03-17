
const apiRoutes = async (app, options) => {
    app.register(require('./product'), {
        prefix: 'product'
    });
    app.get('/', async (request, reply) => {
        return {
            hello: 'mramdannugraha'
        };
    });
};

module.exports = apiRoutes;