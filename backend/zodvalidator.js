const z = require("zod");

const userValidator = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = {
  userValidator: userValidator,
};
