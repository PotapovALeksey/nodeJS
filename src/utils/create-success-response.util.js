const createSuccessResponse = (result, total) => ({
    code: 200,
    status: 'Success',
    data: { result, total }
});

module.exports = { createSuccessResponse }
