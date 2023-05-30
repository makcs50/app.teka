const { Router } = require('express');
const medicineController = require('../controllers/medicine.controller');

const router = Router();

router.post('/medicines', medicineController.createMedicine);
router.get('/medicines', medicineController.getMedicines);
router.patch('/medicines/:id', medicineController.updateMedicine);
router.delete('/medicines/:id', medicineController.deleteMedicine);


module.exports = router;