const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID não pode ser encontrado!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const list = req.body;
  if (!list || !list.text) {
    return res
      .status(400)
      .send({ message: 'Preecha o campo para editar a tarefa!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
