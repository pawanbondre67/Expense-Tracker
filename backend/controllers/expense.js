const ExpenseSchema = require("../models/ExpenseModel");




exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const expense = ExpenseSchema({
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

        await expense.save();
        res.status(200).json({ message: 'Expense added successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }

    console.log(expense);

}

exports.getExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json({ expense });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}


exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    ExpenseSchema.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: 'Expense deleted successfully' });
        })

        .catch((error) => {
            res.status(500).json({ message: 'Server error' });
        })
}