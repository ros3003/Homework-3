let money, time;

function start() {
    money = +prompt("Ваш бюджет на місяць");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на місяць");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if (
            typeof a === "string" &&
            typeof a != null &&
            typeof b != null &&
            a != "" &&
            b != "" &&
            a.length < 50
        ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i = i - 1;
        }
    }
}
chooseExpenses();

//Бюджет на один день
function detectDayBudget() {

    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневний бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

//разсчет уровня достатка
function detectLevel() {

    if (appData.moneyPerDay < 100) {
        console.log("Минимальний уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Високий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();


function checkSavinds() {
    if (appData.savings == true) {
        let save = +prompt("Какова сума накоплений?");
        percent = +prompt("Под какой процент?");

        appData.monthIncome = (save / 100 / 12) * percent;
        alert("Доходв в месяц с вашего депозита:" + appData.monthIncome);
    }
}
checkSavinds();



//функція для не обовязкових витрат 
function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();