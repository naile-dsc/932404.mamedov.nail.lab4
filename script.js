let userName = prompt("Введите ваше имя предпринимателя:");
let welcomeEl = document.getElementById("welcome-message");
if (userName && welcomeEl) {
    welcomeEl.textContent = "Добро пожаловать, " + userName + "!";
}

let revenues = [12000, 2500, 15000, 2800, 9000, 11000, 4000];
console.log("Исходные данные (дневная выручка):", revenues);

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let totalRevenue = getSum(revenues);
let maxRevenue = getMax(revenues);
let averageRevenue = totalRevenue / revenues.length;

let lowDaysCount = 0;
for (let i = 0; i < revenues.length; i++) {
    if (revenues[i] <= 3000) {
        lowDaysCount++;
    }
}
let lowDaysShare = (lowDaysCount / revenues.length) * 100;

document.getElementById("total-revenue").textContent = totalRevenue + " ₽";
document.getElementById("max-revenue").textContent = maxRevenue + " ₽";
document.getElementById("avg-revenue").textContent = averageRevenue.toFixed(2) + " ₽";
document.getElementById("low-days").textContent = lowDaysCount;
document.getElementById("low-days-share").textContent = lowDaysShare.toFixed(2);

if (averageRevenue < 5000) {
    console.warn("Внимание: Средняя выручка ниже целевого порога (5000 ₽). Требуется анализ.");
} else {
    console.log("Финансовые показатели в норме.");
}