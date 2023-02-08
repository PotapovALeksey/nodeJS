const apiWrapper = (method) => async (res, req, next) => {
    try {
        await method(res, req);
    } catch (error) {
        next(error);
    }
}

module.exports = { apiWrapper };
