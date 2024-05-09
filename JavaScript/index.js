function compararDatas() {
    const data1 = new Date(document.getElementById('data1comp').value);
    const data2 = new Date(document.getElementById('data2comp').value);

    if (isNaN(data1) || isNaN(data2)) {
        document.getElementById('resultado').textContent = 'Por favor, insira ambas as datas.';
    } else {
        if (data1 > data2) {
            document.getElementById('resultado').textContent = 'Data 1 é posterior a Data 2.';
        } else if (data1 < data2) {
            document.getElementById('resultado').textContent = 'Data 1 é anterior a Data 2.';
        } else {
            document.getElementById('resultado').textContent = 'As datas são iguais.';
        }
    }
}

function calcularIntervalo() {
    const data1 = new Date(document.getElementById('data1comp').value);
    const data2 = new Date(document.getElementById('data2comp').value);

    if (isNaN(data1) || isNaN(data2)) {
        document.getElementById('resultado').textContent = 'Por favor, insira ambas as datas.';
    } else {
        const diff = Math.abs(data2 - data1);
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        document.getElementById('resultado').textContent = `Intervalo entre as datas: ${diffDays} dias.`;
    }
}

function dataatual() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');

    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
    document.getElementById('resultado').textContent = `Data atual formatada: ${dataFormatada}`;
}
