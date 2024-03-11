const IncomeSchema = require("../models/IncomeModel");




exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        //validation of the income
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ error: 'All fields are required!!' });
        }
        if (amount <= 0 || amount === '' || amount === null || amount === undefined || !amount === 'number') {
            return res.status(400).json({ error: 'Amount must be greater than 0' });
        }

        await income.save();
        res.status(200).json({ message: 'Income added successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }

    console.log(income);

}

exports.getIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json({ income });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}


exports.deleteIncome = async (req, res) => {
    const { id } = req.params;

    IncomeSchema.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: 'Income deleted successfully' });
        })

        .catch((error) => {
            res.status(500).json({ message: 'Server error' });
        })
}