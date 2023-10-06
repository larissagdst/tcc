const yup = require('yup');

const createProjectValidator = yup.bject().shape({
    name: yup.string().required(),
    description: yup.string().optional(),
    date: yup.date().required(),
    isFinished: yup.boolean().required()

})

module.exports = {
    createProjectValidator
}