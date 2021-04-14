const numMayor = (num1, num2) => {
    let mayor = 0;
    if (num1 > num2) {
        mayor = num1;
        return mayor;
    }
    else if (num2 > num1) {
        mayor = num2;
        return mayor;
    }
    else {
        return 'Son iguales';
    }
}

console.log(numMayor(Number(prompt('Ingrese un número')), Number(prompt('Ingrese el segundo número'))));