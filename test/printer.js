const common = require('./libs/bixolon_printer/bxlcommon.js');
const label = require('./libs/bixolon_printer/bxllabel.js');
const pos = require('./libs/bixolon_printer/bxlpos.js');

let issueId = 0;

const printLabelNumber = (printerName, num) => {
    label.setLabelId(++issueId);
    label.checkLabelStatus();
    label.clearBuffer();

    label.drawVectorFont(num.toString(), 0, 0, 'U', 15, 15, 0, 1, 0, 0, 0, 2, false);

    label.printBuffer();

    const str = label.getLabelData();

    console.log(JSON.parse(str));

    common.requestPrint(printerName, str, res => {
        console.log(res);
    });
};

const printPosNumber = (num, w, h, bold, fonttype) => {
    pos.setPosId(++issueId);
    pos.checkPrinterStatus();

    pos.printText(num, w, h, bold, false, false, fonttype, 1);
    pos.cutPaper(0);

    const str = pos.getPosData();

    common.requestPrint('Printer1', str, res => {
        console.log(res);
    });
};

printPosNumber(1001, 5, 4, true, 0);