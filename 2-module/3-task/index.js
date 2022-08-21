let calculator = {
 read (a,b) {
this.numb1 = a
this.numb2 = b
},
sum () {
    return this.numb1+this.numb2
},
mul () {
    return this.numb1*this.numb2
}
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
