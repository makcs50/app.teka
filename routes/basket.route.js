const { Router } = require('express');
const basketController = require('../controllers/basket.controller');

const router = Router();

router.post('/basket/:clientId/:medicineId', basketController.addToBasket);
router.delete('/basket/:clientId/:medicineId', basketController.removeFromBasket);
router.post('/basket/:clientId/clear', basketController.clearBasket);


module.exports = router;