const route = require('express').Router();
const controllerLists = require('../controllers/list.controller');
const {  validId, validObjectBody } = require('../middlewares/list.middleware');

route.get('/all-lists', controllerLists.findAllListsController);
route.get('/list/:id', validId, controllerLists.findByIdListController);
route.post('/create', validObjectBody, controllerLists.createListController);
route.put('/update/:id', validId, validObjectBody, controllerLists.updateListController);
route.delete('/delete/:id', validId, controllerLists.deleteListController);

module.exports = route;
