async function handleFile() {
  const fileInput = document.getElementById('fileInput');
  const outputDiv = document.getElementById('output');

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const data = event.target.result;
    const workbook = XLSX.read(data, { type: 'binary' });

    // Supongamos que quieres guardar los datos de la primera hoja en una variable
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Ahora tienes los datos del archivo Excel en la variable 'excelData'
    console.log(excelData);
    //outputDiv.innerHTML = JSON.stringify(excelData);

    // Graficar los datos utilizando Chart.js
    const xData = excelData.map(row => row[0]); // Suponiendo que la columna X está en la posición 0
    const yData = excelData.map(row => row[1]); // Suponiendo que la columna Y está en la posición 1

    const ctx = document.createElement('canvas');
    outputDiv.appendChild(ctx);

    new Chart(ctx, {
      type: 'line', // Puedes cambiar el tipo de gráfico aquí (line, bar, pie, etc.)
      data: {
        labels: xData,
        datasets: [{
          label: 'Datos Y',
          data: yData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            position: 'bottom'
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  reader.readAsBinaryString(file);
}
