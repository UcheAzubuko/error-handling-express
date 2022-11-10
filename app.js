const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const tryCatch = require("./utils/tryCatch");
const Joi = require("joi");

const app = express();
const port = process.env.PORT || 4000;

const getUser = () => undefined;

// app.get("/get-user", async (req, res) => {
//   try {
//     const user = getUser();
//     if (!user) {
//       throw new Error("User not found");
//     }
//   } catch (error) {
//     console.log(error); // logging the error here
//     res.status(400).send(error.message); // returning the status and error message to client
//   }
// });

app.get(
  "/get-user",
  tryCatch(async (req, res) => {
    const user = getUser();
    if (!user) {
      throw new Error("User not found");
    }
    res.status(400).send(error.message);
  })
);

const schema = Joi.object({
  userId: Joi.number().required(),
});

app.post(
  "/login",
  tryCatch(async (req, res) => {
    const { error, value } = schema.validate({});
    if (error) throw error;
  })
);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
