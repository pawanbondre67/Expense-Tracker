import { dashboard, expenses, transactions, trend } from "./Icons";

export const menuItems = [
    {
        id : 1,
        title: 'Dashboard',
        icon:  dashboard,
        link: '/dashboard'
    },
    {
        id : 2,
        title: 'View Transactions',
        icon: transactions,
        link: '/users'
    },
    {
        id : 3,
        title: 'Incomes',
        icon: trend,
        link: '/products'
    },
    {
        id : 4,
        title: 'Expenses',
        icon: expenses,
        link: '/orders'
    },

]