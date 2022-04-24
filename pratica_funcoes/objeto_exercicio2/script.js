let notebook = {
    processador: "i7",
    memoria: "16GB",
    preco: 5000,
    hd: "1TB",
    ssd: "256GB"
}

for(let propriedade in notebook) {
    console.log(`${propriedade} : ${notebook[propriedade]}`);
}