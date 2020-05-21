"use strict";

let money = prompt("Ваш основной доход за месяц?", ""),
	timeData = prompt("Введите дату", "YYYY-MM-DD"),
	expenses = prompt("Введите обязательну статью расходов в этом месяце", ""),
	optionalExpenses, //  = prompt("Необязательные расходы", ""),
	income, // = prompt("Дополнительный доход",""),
	savings = false;

expenses: {
	timeData : expenses
}


let appData = new Array(money, timeData, expenses, optionalExpenses,
income, savings);

alert("Ваш бюджет на 1 день: " + money / 30);

console.log(money, timeData, expenses);

