const common = require('./libs/bixolon_printer/bxlcommon.js');
const label = require('./libs/bixolon_printer/bxllabel.js');

let issueId = 0;

const printNumber = (printerName, num) => {
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

printNumber('Printer1', 1001);