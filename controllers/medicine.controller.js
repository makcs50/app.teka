const Medicine = require('../models/Medicine.model');


const medicineController = {

createMedicine: async (req, res) => {

    const medicine = await Medicine.create(req.body);
    json(medicine);

},


getMedicines: async (req, res) => {

    const medicines = await Medicine.find();
    res.json(medicines);

},

updateMedicine: async (req, res) => {

    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(medicine);
},


deleteMedicine: async (req, res) => {

    await Medicine.findByIdAndDelete(req.params.id);
    res.json("Удаление лекарства по его ID");

}
}


module.exports = medicineController;