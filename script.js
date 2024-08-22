function analyzeLoan() {
    const income = parseFloat(document.getElementById("income").value);
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const creditHistory = document.getElementById("creditHistory").value;
    const jobStability = parseInt(document.getElementById("jobStability").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value);

    let result = '';

    // Critério 1: Relação entre renda e valor do empréstimo
    if (loanAmount > income * 0.3) {
        result = "Empréstimo rejeitado: O valor do empréstimo excede 30% da renda mensal.";
    } else if (creditHistory === "ruim") {
        // Critério 2: Histórico de crédito
        result = "Empréstimo rejeitado: Histórico de crédito ruim.";
    } else if (jobStability < 1) {
        // Critério 3: Estabilidade no emprego
        result = "Empréstimo rejeitado: Estabilidade no emprego insuficiente.";
    } else {
        // Aprovação do empréstimo
        result = "Empréstimo aprovado!";
    }

    document.getElementById("result").innerText = result;
}
