const isExist = (value) => value !== undefined && value !== null;

const isString = (value) => typeof value === 'string' && value.length > 0;

const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value) && value !== Infinity;

module.exports = {
    isExist, isString, isNumber
}
