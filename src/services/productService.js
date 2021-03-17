let res = require("../response");
let connection = require("../plugins/mysqlConnection");
const util = require("../util");

async function getAll(request, reply) {
    const {limit, offset} = request.query;

    let sql = `SELECT * FROM product`;
    if (util.isParamsUndifined(request.query, "limit", "offset")) {
        sql += ` LIMIT ${limit} OFFSET ${offset}`;
    }
    let data = await new Promise((resolve) =>
        connection.query(sql, function (error, rows) {
            if (error) {
                console.log(error);
                return res.badRequest("", `${error}`, reply);
            }
            return rows.length > 0 ? resolve(rows) : resolve(null);
        })
    );
    if (!data) {
        return res.badData(data, "Data Product can't be load", reply);
    }
    return res.ok(data, "Data Product successfully to load", reply);
}


async function getById(request, reply) {
    let id = request.params.id;
    let sql = `SELECT * FROM product WHERE id = ?`;

    let data = await new Promise((resolve) =>
        connection.query(sql, [id], function (error, rows) {
            if (error) {
                console.log(error);
                return res.badRequest("", `${error}`, reply);
            }

            return rows.length > 0
                ? resolve(rows[0])
                : resolve(null);
        })
    );

    if (!data) {
        return res.notFound(data, "Data Banner can't be found", reply);
    }

    return res.ok(data, "Data Banner successfully to load", reply);
}

async function create(request, reply) {

}

async function update(request, reply) {

}


async function destroy(request, reply) {
    let id = request.params.id;
    let sql = `DELETE FROM banner WHERE id = ?`;

    let data = await new Promise((resolve) =>
        connection.query(sql, [id], function (error, rows) {
            if (error) {
                console.log(error);
                return res.badRequest("", `${error}`, reply);
            }

            return rows.affectedRows > 0 ? resolve(true) : resolve(false);
        })
    );

    if (!data) {
        return res.badData(data, "Data Banner can't delete from table", reply);
    }

    return res.ok(data, "Data Banner deleted from table successfully", reply);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    destroy,
};