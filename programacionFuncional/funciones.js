

ejecutarOperacion=(operar)=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resultado = operar(valor1,valor2);
    console.log(resultado);
}

sumar = (sum1, sum2) =>{
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}

restar = (r1, r2) =>{
    let resultado;
    resultado = r1 - r2;
    return resultado;
}

ejecutar=(fn)=>{
    console.log("Estoy ejecutando funciones..");
    fn();
}

imprimir=()=>{
    console.log("Estoy imprimiendo");
}

saludar=()=>{
    alert("APRENDIENDO PROGRAMACION FUNCIONAL");
}

testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{
        alert("Soy una funcion sin nombre");
    });
}