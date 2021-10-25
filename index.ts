import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import {createPDF} from './src/pdf';
import * as ejs from 'ejs';
import * as pdf from 'html-pdf';
const path = require('path'); 

//npm run serve start command

//Data used to populate fields 
//Ugly can be cut down with some conditional rendering, but this made it quicker to get a template out because of the unique styling throughout the rows.
const totalCommitment =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
const openingCapitalAccount =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
const capitalContributions =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
const netOperatingIncome =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
const unrealizedInvestmentGain =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
const realizedInvestmentGain =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
const distributions =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
const closingCapitalAccount =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
const remainingUnfundedCommitment =[
    {
        num:'3,750,000',
    },
    {
        num:'3,750,000',
    },
    {
        num:'251,944,444',
    },
    {
        num:'251,944,444',
    },
]
dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//PDF Make testing
app.get('/pdf', async (req, res, next) => { try{
    const binaryResult = await createPDF();
    res.contentType('application/pdf').send(binaryResult);
} catch(err){
    console.log(err);
    res.send('There was an error displaying the PDF document.')
}
});
//HTML2PDF right now it creates a pdf in the root folder.
app.get("/generateReport", (req, res) => {
    ejs.renderFile(path.join( './views/', "report-template.ejs"), 
    {
        totalCommitment:totalCommitment, 
        openingCapitalAccount: openingCapitalAccount, 
        capitalContributions:capitalContributions,
        netOperatingIncome:netOperatingIncome,
        unrealizedInvestmentGain:unrealizedInvestmentGain, 
        realizedInvestmentGain:realizedInvestmentGain,
        distributions:distributions,
        closingCapitalAccount:closingCapitalAccount,
        remainingUnfundedCommitment:remainingUnfundedCommitment
    }, (err, data) => {
    if (err) {
          res.send(err);
    } else {
        //PDF page options 
        let options = {
            "height": "11.25in",
            "width": "12in",
            "header": {
                "height": "20mm"
            },
            "footer": {
                "height": "20mm",
            },
        };
        //Actual file pdf creation
        pdf.create(data, options).toFile("report.pdf", function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send("File created successfully");
            }
        });
    }
});
})

app.listen(PORT, () => console.log(`Running on ${PORT}`));


