import pdfMakeX from "pdfmake/build/pdfmake";  
import pdfFontsX from "pdfmake/build/vfs_fonts";  
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs; 
import PdfPrinter from 'pdfmake';  
//import * as pdfMake from 'pdfmake/build/pdfmake';
//import { resolve } from "path/posix";
//import { reject } from "bluebird";


export const createPDF  = () => {
    const fonts = {
        Helvetica: {
            normal: 'Helvetica',
            bold: 'Helvetica-Bold',
            italics: 'Helvetica-Oblique',
            bolditalics: 'Helvetica-BoldOblique'
    }
}
const printer = new PdfPrinter(fonts);
const docDefinitiion = {
    content: [
        {table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
        
          heights:20,
            widths:[100,100,100,100,100,100,100,100,100],
          body: [
              
            [{ border:[false,false,false,false], text: 'Total Commitment'}, { border:[false,false,false,false], text: '3,750,000',decorationStyle: 'double', decoration: 'underline'},{ border:[false,false,false,false], text: '3,750,000',decorationStyle: 'double', decoration: 'underline'},{ border:[false,false,false,false], text: '251,944,444',decorationStyle: 'double', decoration: 'underline'},{ border:[false,false,false,false], text: '251,944,444', decorationStyle: 'double', decoration: 'underline'}],
            ['Opening Capital Account','757,517', '-','50,543,273','-'],
            ['Capital Contributions','1,036,626', '1,821,625','69,232,558','121,445,530'],
            ['Net Operating Income (Loss)','(35,242)', '(134,809)','(2,347,312)','(8,969,572)'],
            ['Unrealized Investment Gain (Loss)','5,078', '78,889','30,706,888','35,774,003'],
            ['Realized Investment Gain (Loss)','-', '-','-','-'],
            ['Distributions','-', '-','-','-'],
            ['Closing Capital Account',{ text: '1,763,979', decoration:'underline', decorationStyle: 'double'}, { text:'1,763,979', decoration:'underline', decorationStyle: 'double'},{text:'118,286,465',  decoration:'underline', decorationStyle: 'double'},{text:'148,135,414' , decoration:'underline', decorationStyle: 'double'}],
            [{ border:[false,false,false,false], text: 'Remaining Unfunded Commitment'}, { border:[false,false,false,false], text: '',},{ border:[false,false,false,false], text: '1,928,375',decoration:'underline', decorationStyle: 'double'},{ border:[false,false,false,false], text: ''},{ border:[false,false,false,false], text: '129,816,354',decoration:'underline', decorationStyle: 'double'}],
          ]
        },
        layout:   {
            hLineWidth: function (i:any, node:any) {
                return (i === 0 || i === node.table.body.length) ? 2 : 1;
            },
            vLineWidth: function (i:any, node:any) {
                return (i === 0 || i === node.table.widths.length) ? 0 : 0;
            },
            hLineColor: function (i:any, node:any) {
                return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
            },
            vLineColor: function (i:any, node:any) {
                return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
            },
        },
    }
    ],
    defaultStyle: {
        font: 'Helvetica'
    }
};
const pdfDoc = printer.createPdfKitDocument(docDefinitiion);
return new Promise((resolve, reject) =>{
    try{
        const chunks:any = [];
        pdfDoc.on('data', chunk => chunks.push(chunk));
        pdfDoc.on('end', ()=> resolve(Buffer.concat(chunks)));
        pdfDoc.end();
    } catch(err){
        reject(err);
    }
})
};