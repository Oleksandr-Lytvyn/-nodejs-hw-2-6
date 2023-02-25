const express = require('express');
const { validateBody } = require('../../middlewares');
const { newContSchema, updateFavoriteSchema } = require('../../models/contact');
const { isValidId } = require('../../middlewares');

// const contacts = require('../../models/contacts');
// const { HttpError } = require('../../helpers');
// const { newContSchema } = require('../../schemas/');

const ctrl = require('../../controllers/contacts');

const router = express.Router();

router.get('/', ctrl.getList);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validateBody(newContSchema), ctrl.add);

router.delete('/:contactId', isValidId, ctrl.del);

router.put('/:contactId', isValidId, validateBody(newContSchema), ctrl.update);

router.patch('/:contactId/favorite', isValidId, validateBody(updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;
