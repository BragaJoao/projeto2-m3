const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.body.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID não pode ser encontrado!' });
  }
  next()
};

const validObjectBody = () => {};

module.exports = {
    validId,
    validObjectBody,
}
