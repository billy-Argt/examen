import React, { useState } from 'react';
import math from 'mathjs';
import { Line } from 'react-chartjs-2';

const Grafica = () => {
  // ...

  const handleSubmit = (e) => {
    e.preventDefault();
    const expresionFunc = math.compile(expresion);
    const labels = [];
    const data = [];

    for (let x = parseFloat(inicio); x <= parseFloat(fin); x += 0.1) {
      labels.push(x.toFixed(1));
      const resultado = expresionFunc.evaluate({ x });
      data.push(resultado);
    }

    const chartData = {
      labels,
      datasets: [
        {
          label: 'Expresión',
          data,
          borderColor: 'blue',
          fill: false,
        },
      ],
    };

  };

  return (
    <div>
      {/* ... */}
    </div>
  );
};

export default Grafica;