const общий_счет = 3500;
const чаевые = 500;
const количество_людей = 4;
const сумма_без_чаевых = общий_счет - чаевые;
const сумма_на_человека = сумма_без_чаевых / количество_людей;
console.log("С каждого по", сумма_на_человека, "руб.");
console.log("При общем счете", общий_счет, "руб.");
console.log("И чаевых", чаевые, "руб.");