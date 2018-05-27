var userBudget = +prompt("Ваш бюджет?");
alert("Ваш бюджет на 1 день составляет " + userBudget / 30);
var userStoreName = prompt("Название вашего магазина?");

var questGood1 = prompt("Какой тип товаров будем продавать?");
var questGood2 = prompt("Какой тип товаров будем продавать?");
var questGood3 = prompt("Какой тип товаров будем продавать?");

var shopGoods = [questGood1, questGood2, questGood3];
var employers = [];

mainList = {
	userBudget: userBudget,
	userStoreName: userStoreName,
	shopGoods: shopGoods,
	employers: employers,
	open: true
};
console.log(mainList);
