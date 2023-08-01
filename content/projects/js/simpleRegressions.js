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
  
      // Graficar los datos utilizando Chart.js
      const xData = excelData.map(row => row[0]); // Suponiendo que la columna X está en la posición 0
      const yData = excelData.map(row => row[1]); // Suponiendo que la columna Y está en la posición 1

      async function getDataFromAPI(solicitud) {
        const dataBody = {
          "X": xData,
          "Y": yData,
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataBody),
        };

        try {

          const response = await fetch(`https://flaskmlaz.azurewebsites.net/lineal`, requestOptions);
          const data = await response.json();
      
          if (data.prediction) {
            return data.prediction;
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      }

      const ctx = document.createElement('canvas');
      outputDiv.appendChild(ctx);

      async function createCanva(X, Y, prediction){
        new Chart(ctx, {
          type: 'scatter', // Puedes cambiar el tipo de gráfico aquí (line, bar, pie, etc.)
          data: {
            labels: X,
            datasets: [{
              label: 'Datos Y',
              data: Y,
              borderColor: 'rgba(0, 10, 192, 1)',
              backgroundColor: 'rgba(0, 10, 192, 0.3)',
              borderWidth: 1
            },
            {
              label: 'Preddictions',
              data: prediction,
              type: 'line', // Tipo de gráfico para el segundo conjunto de datos (scatter)
              borderColor: 'rgba(255, 125, 0, 1)',
              backgroundColor: 'rgba(255, 125, 0, 0.2)',
              borderWidth: 1
            }
          ]
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
      }
      
      async function predinctionFunction(){
        const prediction = await getDataFromAPI("lineal");
        createCanva(xData, yData, prediction);
      }
      
      predinctionFunction();
      
    };
  
    reader.readAsBinaryString(file);
  }
  