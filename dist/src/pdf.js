"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPDF = void 0;
var pdfmake_1 = __importDefault(require("pdfmake/build/pdfmake"));
var vfs_fonts_1 = __importDefault(require("pdfmake/build/vfs_fonts"));
pdfmake_1.default.vfs = vfs_fonts_1.default.pdfMake.vfs;
var pdfmake_2 = __importDefault(require("pdfmake"));
//import * as pdfMake from 'pdfmake/build/pdfmake';
//import { resolve } from "path/posix";
//import { reject } from "bluebird";
var createPDF = function () {
    var fonts = {
        Helvetica: {
            normal: 'Helvetica',
            bold: 'Helvetica-Bold',
            italics: 'Helvetica-Oblique',
            bolditalics: 'Helvetica-BoldOblique'
        }
    };
    var printer = new pdfmake_2.default(fonts);
    var docDefinitiion = {
        content: [
            { table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    heights: 20,
                    widths: [100, 100, 100, 100, 100, 100, 100, 100, 100],
                    body: [
                        [{ border: [false, false, false, false], text: 'Total Commitment' }, { border: [false, false, false, false], text: '3,750,000', decorationStyle: 'double', decoration: 'underline' }, { border: [false, false, false, false], text: '3,750,000', decorationStyle: 'double', decoration: 'underline' }, { border: [false, false, false, false], text: '251,944,444', decorationStyle: 'double', decoration: 'underline' }, { border: [false, false, false, false], text: '251,944,444', decorationStyle: 'double', decoration: 'underline' }],
                        ['Opening Capital Account', '757,517', '-', '50,543,273', '-'],
                        ['Capital Contributions', '1,036,626', '1,821,625', '69,232,558', '121,445,530'],
                        ['Net Operating Income (Loss)', '(35,242)', '(134,809)', '(2,347,312)', '(8,969,572)'],
                        ['Unrealized Investment Gain (Loss)', '5,078', '78,889', '30,706,888', '35,774,003'],
                        ['Realized Investment Gain (Loss)', '-', '-', '-', '-'],
                        ['Distributions', '-', '-', '-', '-'],
                        ['Closing Capital Account', { text: '1,763,979', decoration: 'underline', decorationStyle: 'double' }, { text: '1,763,979', decoration: 'underline', decorationStyle: 'double' }, { text: '118,286,465', decoration: 'underline', decorationStyle: 'double' }, { text: '148,135,414', decoration: 'underline', decorationStyle: 'double' }],
                        [{ border: [false, false, false, false], text: 'Remaining Unfunded Commitment' }, { border: [false, false, false, false], text: '', }, { border: [false, false, false, false], text: '1,928,375', decoration: 'underline', decorationStyle: 'double' }, { border: [false, false, false, false], text: '' }, { border: [false, false, false, false], text: '129,816,354', decoration: 'underline', decorationStyle: 'double' }],
                    ]
                },
                layout: {
                    hLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 2 : 1;
                    },
                    vLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 0 : 0;
                    },
                    hLineColor: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                    },
                    vLineColor: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                    },
                },
            }
        ],
        defaultStyle: {
            font: 'Helvetica'
        }
    };
    var pdfDoc = printer.createPdfKitDocument(docDefinitiion);
    return new Promise(function (resolve, reject) {
        try {
            var chunks_1 = [];
            pdfDoc.on('data', function (chunk) { return chunks_1.push(chunk); });
            pdfDoc.on('end', function () { return resolve(Buffer.concat(chunks_1)); });
            pdfDoc.end();
        }
        catch (err) {
            reject(err);
        }
    });
};
exports.createPDF = createPDF;
