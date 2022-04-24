function calcularMedia(nota1, nota2, nota3, nome) {
    alert(`${nome}, sua média é ${(nota1 + nota2 + nota3)/3}`);
    console.log(`As notas recebidas foram ${nota1} - ${nota2} - ${nota3}`);
}

calcularMedia(60,70,80,"João");