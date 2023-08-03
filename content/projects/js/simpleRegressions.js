let chart;

async function handleFile() {
    console.log("CORRIENDO")
    const fileInput = document.getElementById('fileInput');
    //const outputDiv = document.getElementById('output');
  
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

      const puntos = [];
      
      for (let i = 0; i < xData.length; i++) {
        puntos.push({ x: xData[i], y: yData[i] });
      }
   
      const ctx = document.getElementById('chartCanvas').getContext('2d');
      //const ctx = document.createElement('canvas');
      //outputDiv.appendChild(ctx);

      // Primero seleccionamos el elemento <select> del DOM por su id
      const selectElement = document.getElementById('miSelect');
      // Obtenemos el valor de la opción seleccionada
      const selectedOptionValue = selectElement.value;

      // FUNCIONES

      //Consumo mi API para generar las predicciones
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
          const response = await fetch(`https://flaskmlaz.azurewebsites.net/${solicitud}`, requestOptions);
          const data = await response.json();

          console.log(data.prediction)
      
          if (data.prediction && data.xTrain) {
            return [data.prediction, data.xTrain];
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      }
      
      //Creacion del Canvas para graficar
      async function createCanva(X, puntos, prediction, X_train){
        const data1 = {
          labels1: X,
          datasets: [
            {
              label: 'Conjunto 1',
              data: puntos,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
          ],
        };
    
        // Datos del segundo conjunto
        const data2 = {
          labels2: X_train,
          datasets: [
            {
              label: 'Conjunto 2',
              data: prediction,
              type: 'line',
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
          ],
        };

        // Configuración de la gráfica
        const options = {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
            },
            y: {
              type: 'linear',
              position: 'left',
            },
          },
        };
        

        if(!chart){
           chart = new Chart(ctx, {
            type: 'scatter',
            data: {
              datasets: [data1.datasets[0], data2.datasets[0]],
            },
            options: options,
          });
        }else {
          // Si la instancia de Chart.js ya existe, actualizamos los datos
          chart.data.labels1 = X;
          chart.data.labels2 = X_train;
          chart.data.datasets = [data1.datasets[0], data2.datasets[0]];
          chart.update();
        }
      }
      
      //Union del consumo del API y la implementacion de la grafica
      async function predinctionFunction(){
        var data;

        // Usamos un if para realizar una acción basada en el valor seleccionado
        if (selectedOptionValue === '1') {
          data = await getDataFromAPI("lineal");
        } else if (selectedOptionValue === '2') {
          data = await getDataFromAPI("polynomial");
        } else {
          console.log('Opción no reconocida');
        }
        
        createCanva(xData, puntos, data[0], data[1]);
      }
      
      //Llamada a la Funcion
      predinctionFunction();
      
    };
  
    reader.readAsBinaryString(file);
  }
  