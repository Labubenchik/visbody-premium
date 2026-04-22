const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('C:\\Users\\Иван\\Downloads\\Visbody каталог1.pdf');

const pdfFunction = typeof pdf === 'function' ? pdf : pdf.default || pdf;

pdfFunction(dataBuffer).then(function(data) {
    fs.writeFileSync('extracted_pdf.txt', data.text);
    console.log("PDF extraction complete");
}).catch(err => {
    console.error("Error reading PDF:", err);
});
