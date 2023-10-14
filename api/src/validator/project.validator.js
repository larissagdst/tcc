const yup = require('yup');

const  createProjectValidator = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().optional(),
    coverImage: yup.string().optional(),

})

module.exports = {
    createProjectValidator
}