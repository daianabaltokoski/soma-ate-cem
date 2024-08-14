function somaCem() {
    let soma = 0
    for (let i = 0; i <= 100; i++) {
        soma += i;
    }

    const p = document.getElementById("result")
    p.innerText = `Resultado: ${soma}`
}