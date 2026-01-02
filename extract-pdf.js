const pdf = require('pdf-parse').default;
const fs = require('fs');

const pdfPath = 'c:\\Users\\tfott\\Downloads\\Richard_Effah_Yeboah_Resume.pdf';
const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer)
  .then(data => {
    console.log(data.text);
  })
  .catch(err => {
    console.error('Error:', err);
  });
