import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(this, 1); // 1 = returns raw text

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('extracted_pdf.txt', pdfParser.getRawTextContent());
    console.log("PDF extraction complete to extracted_pdf.txt");
});

pdfParser.loadPDF('C:\\Users\\Иван\\Downloads\\Visbody каталог1.pdf');
