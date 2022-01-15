import { body, validationResult } from "express-validator";

export const signUpValidation = () => {
  return [
    body("name").trim().notEmpty().withMessage("enter your name"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("must be a valid email")
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength(6)
      .withMessage("password length is short, minimum of 6 characters"),
  ];
};
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  return res.status(422).json({//error 402: unprocessed entity
    errors: extractedErrors,
  })
};
