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
      outputDiv.innerHTML = JSON.stringify(excelData);
    };
  
    reader.readAsBinaryString(file);
  }
  