module.exports.ok = async function ok(data, message, reply) {
  return reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      data,
      status: {
        code: 200,
        status: "OK",
        message: message,
      }
    });
}

module.exports.created = async function created(data, message, reply) {
  return reply
    .code(201)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      data,
      status: {
        code: 201,
        status: "Success Create Data",
        message: message,
      }
    });
}

module.exports.notFound = async function notFound(data, message, reply) {
  return reply
    .code(404)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      data,
      status: {
        code: 404,
        status: "Data Not Found",
        message: message,
      }
    });
}

module.exports.badRequest = async function badRequest(data, message, reply) {
  return reply
    .code(400)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      data,
      status: {
        code: 400,
        status: "Bad Request",
        message: message,
      }
    });
}

module.exports.badData = async function badData(data, message, reply) {
  return reply
    .code(422)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      data,
      status: {
        code: 422,
        status: "Unprocessable Data",
        message: message,
      }
    });
}

module.exports.serviceUnavailable = async function serviceUnavailable(data, message, reply) {
  return reply
    .code(503)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      data,
      status: {
        code: 503,
        status: "Service Unavailable",
        message: message,
      }
    });
}