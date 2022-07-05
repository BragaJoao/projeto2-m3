const route = require('express').Router();
const controllerLists = require('../controllers/list.controller');
const { validId } = require('../middlewares/list.middleware');

route.get('/all-lists', controllerLists.findAllListsController);
route.get('/list/:id',controllerLists.findByIdListController);
route.post('/create', controllerLists.createListController);
route.put('/update/:id', controllerLists.updateListController);
route.delete('/delete/:id', controllerLists.deleteListController);

module.exports = route;
