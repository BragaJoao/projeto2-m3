const List = require('../model/List');
const Lists = require('../model/List')



const findAllListsService = async () => {
  const lists = await Lists.find();
  return lists;
};

const findByIdListService = async (id) => {
  const list = await Lists.findById(id)
  return list
};

const createListService = async (newList) => {
  const listCreated = await List.create(newList)
  return listCreated;
};

const updateListService = async (id, listEdited) => {
  const listUpdate = await Lists.findByIdAndUpdate(id, listEdited )
  return listUpdate;
};

const deleteListService = async (id) => {
  return await Lists.findByIdAndDelete(id)
};

module.exports = {
  findAllListsService,
  findByIdListService,
  createListService,
  updateListService,
  deleteListService,
};
