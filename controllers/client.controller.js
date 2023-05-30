const Client = require('../models/Client.model');
const Basket = require('../models/Client.model');

const clientController = {

rechargeWallet: async (req, res) => {

    const client = await Client.findById(req.params.clientId);
    client.wallet += req.body.amount;
    res.json("Пополнение кошелька клиента");
  },

// Покупка товаров из корзины клиента
purchaseFromBasket: async (req, res) => {

    const client = await Client.findById(req.params.clientId);
    const basket = await Basket.findOne({ clientId: req.params.clientId });
    const totalAmount = calculateTotalAmount(basket.medicines);
    if (client.wallet < totalAmount) {
      return res.json({ error: 'Недостаточно средств' });
    }
    client.wallet -= totalAmount;
    basket.medicines = [];
    await Promise.all([client.save(), basket.save()]);
    res.json("Покупка товаров из корзины клиента");
  
},

 calculateTotalAmount: function (medicines) {
 const totalAmount = medicines.reduce((sum, medicine) => sum + medicine.price, 0);
  return totalAmount;
}

}

module.exports = clientController;
