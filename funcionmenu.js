function exibirMenu() {
    alert("Escolha uma opção:\n1. Meu Saldo\n2. Depósito\n3. Saque\n4. Transferência\n5. Sair");

    var escolha = parseInt(prompt("Digite o número da opção desejada:"));

    if (escolha === 1) {
        alert("Você selecionou: Meu Saldo");
    } else if (escolha === 2) {
        alert("Você selecionou: Depósito");
    } else if (escolha === 3) {
        alert("Você selecionou: Saque");
    } else if (escolha === 4) {
        alert("Você selecionou: Transferência");
    } else if (escolha === 5) {
        alert("Você selecionou: Sair\nPrograma encerrado.");
    } else {
        alert("Opção inválida.");
    }

    var continuar = prompt("Deseja realizar outra ação? (Sim/Não)").toLowerCase();
    if (continuar === 'sim') {
        exibirMenu();
    } else if (continuar !== 'nao') {
        alert("Resposta inválida. Programa encerrado.");
    }
}

exibirMenu();
