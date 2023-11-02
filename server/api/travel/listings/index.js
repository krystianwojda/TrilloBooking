import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    star: Joi.number().min(1).max(5).required(),
    price: Joi.number().min(1).required(),
    addCategory: Joi.string().required(),
    shortDescription: Joi.string().min(25).max(250).required(),
    description: Joi.string().required(),
    important: Joi.array().items(Joi.string()).required(),
    images: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const  {error, value} = await schema.validate(body)

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        });
    }

    return {value, error};
});