const route = require('express').Router();
const controllerLists = require('../controllers/list.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const { validId, validObjectBody } = require('../middlewares/list.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument))

route.get('/', controllerLists.findAllListsController);
route.get('/:id', validId, controllerLists.findByIdListController);
route.post('/', validObjectBody, controllerLists.createListController);
route.put(
  '/:id',
  validId,
  validObjectBody,
  controllerLists.updateListController,
);
route.delete('/:id', validId, controllerLists.deleteListController);

module.exports = route;
