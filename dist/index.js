"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var pdf_1 = require("./src/pdf");
var ejs = __importStar(require("ejs"));
var pdf = __importStar(require("html-pdf"));
var path = require('path');
//npm run serve start command
//Data used to populate fields 
//Ugly can be cut down with some conditional rendering, but this made it quicker to get a template out because of the unique styling throughout the rows.
var totalCommitment = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
var openingCapitalAccount = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
var capitalContributions = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
var netOperatingIncome = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
var unrealizedInvestmentGain = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
var realizedInvestmentGain = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
var distributions = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
var closingCapitalAccount = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
var remainingUnfundedCommitment = [
    {
        num: '3,750,000',
    },
    {
        num: '3,750,000',
    },
    {
        num: '251,944,444',
    },
    {
        num: '251,944,444',
    },
];
dotenv_1.default.config();
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//PDF Make testing
app.get('/pdf', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var binaryResult, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, pdf_1.createPDF)()];
            case 1:
                binaryResult = _a.sent();
                res.contentType('application/pdf').send(binaryResult);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                res.send('There was an error displaying the PDF document.');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//HTML2PDF right now it creates a pdf in the root folder.
app.get("/generateReport", function (req, res) {
    ejs.renderFile(path.join('./views/', "report-template.ejs"), {
        totalCommitment: totalCommitment,
        openingCapitalAccount: openingCapitalAccount,
        capitalContributions: capitalContributions,
        netOperatingIncome: netOperatingIncome,
        unrealizedInvestmentGain: unrealizedInvestmentGain,
        realizedInvestmentGain: realizedInvestmentGain,
        distributions: distributions,
        closingCapitalAccount: closingCapitalAccount,
        remainingUnfundedCommitment: remainingUnfundedCommitment
    }, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            //PDF page options 
            var options = {
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
                }
                else {
                    res.send("File created successfully");
                }
            });
        }
    });
});
app.listen(PORT, function () { return console.log("Running on " + PORT); });
