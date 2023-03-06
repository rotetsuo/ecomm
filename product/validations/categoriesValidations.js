import Joi from "joi";

class validate  {
    static validateBody = (payload) => {
      const schema = Joi.object().keys({
        nome: Joi.string().min(3).required(),
        status: Joi.string()
      });
      const result = schema.validate(payload);
      return result;
    }

    static validateId = (payload) => {
        const schema = Joi.string()
        const result = schema.validate(payload);
        return result
    }
}

export default validate