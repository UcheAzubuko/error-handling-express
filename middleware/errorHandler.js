const errorHandler = (error, req, res, next) => {
  console.log(error); // logging the error here

  if (error.name === "ValidationError") {
    return res.status(400).send({
      type: "ValidationError",
      details: error.details,
    });
  }

  res.status(400).send(error.message); // returning the status and error message to client
};

module.exports = errorHandler;
