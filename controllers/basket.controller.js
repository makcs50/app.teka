const Basket = require('../models/Basket.model');

const basketController = {
addToBasket: async (req, res) => {
 
    const basket = await Basket.findOne({ clientId: req.params.clientId });
    basket.medicines.push(req.params.medicineId);
    res.json("Добавление лекарства в корзину клиента");

},

removeFromBasket: async (req, res) => {
 
    const basket = await Basket.findOne({ clientId: req.params.clientId });
    basket.medicines.pull(req.params.medicineId);
    res.json("Удаление лекарства из корзины клиента");

},

clearBasket: async (req, res) => {
 
    const basket = await Basket.findOne({ clientId: req.params.clientId });
    basket.medicines = [];
    res.json("Очистка корзины клиента");

}
}

module.exports = basketController;
