import React, { useState } from 'react';

function IMCCalculator() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    if (altura && peso) {
      const imc = (peso / (altura * altura)).toFixed(2);
      setIMC(imc);
      classificarIMC(imc);
    }
  };

  const classificarIMC = (imc) => {
    let desc = '';
    if (imc < 18.5) desc = 'Abaixo do peso';
    else if (imc < 25) desc = 'Peso normal';
    else if (imc < 30) desc = 'Sobrepeso';
    else desc = 'Obesidade';
    setClassificacao(desc);
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <label>
          Altura (m):
          <input
            type="number"
            value={altura}
            onChange={e => setAltura(e.target.value)}
          />
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={e => setPeso(e.target.value)}
          />
        </label>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculator;