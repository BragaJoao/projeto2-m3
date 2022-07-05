const listsService = require('../services/list.services');
const mongoose = require('mongoose');


const findAllListsController = async (req, res) => {
  const lists = await listsService.findAllListsService();
  res.send(lists);
};

const findByIdListController = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID não pode ser encontrado!' });
  }
  const chosenList = await listsService.findByIdListService(id);
  if (!chosenList) {
    return res.status(404).send({ message: 'Tarefa não encontrada!' });
  }
  res.send(chosenList);
};

const createListController = async (req, res) => {
  const list = req.body;
  /*
  if (!list || !list.text) {
    return res
      .status(400)
      .send({ message: 'Preecha o campo para criar a tarefa!' });
  }
  */
  const newList = await listsService.createListService(list);
  res.status(201).send(newList);
};

const updateListController = async (req, res) => {
  const id = req.params.id;
  const listEdit = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID não pode ser encontrado!' });
  }
  if (!listEdit || !listEdit.text) {
    return res
      .status(400)
      .send({ message: 'Preecha o campo para editar a tarefa!' });
  }
  const updatedList = await listsService.updateListService(id, listEdit);
  res.send(updatedList);
};

const deleteListController = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID não pode ser encontrado!' });
  }
  await listsService.deleteListService(id);
  res.send({ message: 'Item deletado com sucesso!' });
};

module.exports = {
  findAllListsController,
  findByIdListController,
  createListController,
  updateListController,
  deleteListController,
};
