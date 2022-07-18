import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('Este email es requerido!'),
    password: yup
        .string()
        .min(5, 'Too short!!!')
        .max(1000, 'too long')
        .required('Password is required')
})