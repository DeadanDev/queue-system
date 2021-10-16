class Export {
    constructor() {
        this.pos_data = {id:0, functions:{}};
        this.pos_func = {};
        this.incPosNum = 0;
    }
    
    
    getPosData() {
        this.pos_data.functions = this.pos_func;
        this.pos_func = {};
        this.incPosNum = 0;
    
        return JSON.stringify(this.pos_data);
    }
    
    setPosId(setId) {
        this.pos_data.id = setId;
    }
    
    checkPrinterStatus() {
        var _a = {checkPrinterStatus:[]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    directPrintText(text) {
        var _a = {directPrintText:[text]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    directPrintHex(hexString) {
        var _a = {directPrintHex:[hexString]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    cutPaper(bFeedCut = 0) {
        var _a = {cutPaper:[bFeedCut]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    setInternationalCharset(ics) {
        var _a = {setInternationalCharset:[ics]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    setCharacterset(charset) {
        var _a = {setCharacterset:[charset]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    printText(text, horizontal, vertical, bold, invert, underline, fonttype, alignment) {
        var _a = {printText:[text, horizontal, vertical, bold, invert, underline, fonttype, alignment]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    print1DBarcode(data, symbol, barWidth, height, hriPosition, alignment) {
        var _a = {print1DBarcode:[data, symbol, barWidth, height, hriPosition, alignment]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    printPDF417(data, symbol, alignment, columnNumber, rowNumber, moduleWidth, moduleHeight, eccLevel) {
        var _a = {printPDF417:[data, symbol, alignment, columnNumber, rowNumber, moduleWidth, moduleHeight, eccLevel]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    printQRCode(data, model, alignment, moduleSize, eccLevel) {
        var _a = {printQRCode:[data, model, alignment, moduleSize, eccLevel]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    printGS1Databar(data, symbol, alignment, moduleSize) {
        var _a = {printGS1Databar:[data, symbol, alignment, moduleSize]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    printDataMatrix(data, alignment, moduleSize) {
        var _a = {printDataMatrix:[data, alignment, moduleSize]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;   
    }
    
    printCompositeBarcode(data, symbol, alignment, moduleSize) {
        var _a = {printCompositeBarcode:[data, symbol, alignment, moduleSize]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    printBitmap(imagedata, width, alignment, dither) {
        var _a = {printBitmap:[imagedata, width, alignment, dither]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    printBitmapFile(filepath, width, alignment, dither) {
        var _a = {printBitmapFile:[filepath, width, alignment, dither]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    printPDFFile(filepath, pageNumber, width, alignment, dither) {
        var _a = {printPDFFile:[filepath, pageNumber, width, alignment, dither]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    pagemodeBegin() {
        var _a = {pagemodeBegin:[]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    pagemodePrintArea(width, height) {
        var _a = {pagemodePrintArea:[width, height]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    pagemodePrintPosition(x, y) {
        var _a = {pagemodePrintPosition:[x, y]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    pagemodePrintDirection(direction) {
        var _a = {pagemodePrintDirection:[direction]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    pagemodeEnd() {
        var _a = {pagemodeEnd:[]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
    
    openDrawer(pinNumber) {
        var _a = {openDrawer:[pinNumber]};
        this.pos_func["func"+this.incPosNum] = _a;
        this.incPosNum++;
    }
}

module.exports = new Export();