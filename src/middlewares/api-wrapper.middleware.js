const apiWrapper = (method) => async (res, req, next) => {
    try {
        await method(res, req);
    } catch (error) {
        console.log('error', error);
        console.log('error.message', error.message);
        next(error);
    }
}

module.exports = { apiWrapper };
