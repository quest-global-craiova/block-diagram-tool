import validator from 'validator';

export const isNotEmpty = (value) => {
    return value.toString().trim().length>0
}  

export const isEmail = (value) => {
    return validator.isEmail(value)
}  