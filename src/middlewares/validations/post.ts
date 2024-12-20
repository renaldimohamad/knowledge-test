import Joi from "joi"
export const createPostSchema = Joi.object({
   content: Joi.string().min(2).max(200).required(),
}).unknown(true)
