const productService = require("../../../services/productService");

async function productRoutes(app, options) {
    // get all
    app.route({
        method: "GET",
        url: "/",
        handler: productService.getAll,
    });

    // get One
    app.route({
        method: "GET",
        url: "/:id",
        handler: productService.getById,
    });

    app.route({
        method: "POST",
        url: "/",
        handler: productService.create,
    });

    app.route({
        method: "PUT",
        url: "/",
        handler: productService.update,
    });

    app.route({
        method: "DELETE",
        url: "/:id",
        handler: productService.destroy,
    });
}

module.exports = productRoutes;