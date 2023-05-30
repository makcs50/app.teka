const { Router } = require('express');
const clientController = require('../controllers/client.controller');

const router = Router();

router.post('/client/:clientId/recharge', clientController.rechargeWallet);
router.post('/client/:clientId/purchase', clientController.purchaseFromBasket);


module.exports = router;