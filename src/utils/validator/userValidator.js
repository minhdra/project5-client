import Joi from 'joi';

export const registerValidator = (data) => {
  const rule = Joi.object({
    ...data,
    username: Joi.string()
      .regex(/^(?:[A-Z\d][A-Z\d_-]{5,10})$/i)
      .required()
      .messages({
        'string.pattern.base':
          'Tài khoản phải có độ dài 5-10 và không có ký tự đặc biệt.',
      }),
    email: Joi.string()
      .regex(/^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i)
      .required()
      .messages({
        'string.pattern.base': 'Không đúng định dạng email.',
      }),
    password: Joi.string()
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/i)
      .required()
      .messages({
        'string.pattern.base':
          'Mật khẩu phải có độ dài 6-12, gồm cả ký tự, số và ký tự đặc biệt.',
      }),
  }).messages({
    'string.empty': 'Không thể để trống',
    'any.required': 'Không thể để trống',
  });

  return rule.validate(data, { abortEarly: false });
};
