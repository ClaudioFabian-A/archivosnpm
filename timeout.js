const temporizador = (callBack) => {
    setTimeout(() => {
        callBack();
    }, 5000)
}
const operacion = () => console.log('realizandon oparacion');

console.log('inicio de tareas');
temporizador(operacion);
console.log('fin de tareas');
