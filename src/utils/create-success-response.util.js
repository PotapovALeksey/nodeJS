const createSuccessResponse = (result) => ({
    code: 200,
    status: 'Success',
    data: { result }
});

module.exports = { createSuccessResponse }
