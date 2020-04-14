const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required().min(10).max(11),
    numberAdress: Joi.string().required(),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
    cep: Joi.string().required().length(8)
  })
}), UserController.create);



module.exports = routes;