
class Export {
    constructor() {
        this.label_data = {id:0, s:{}};
        this.label_func = {};
        this.incLabelNum = 0;
    }
    
     getLabelData() {
        this.label_data.s = this.label_func;
        this.label_func = {};
        this.incLabelNum = 0;
    
        return JSON.stringify(this.label_data);
    }
    
     setLabelId(setId) {
        this.label_data.id = setId;
    }
    
     checkLabelStatus() {
        var _a = {checkLabelStatus:[]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     clearBuffer() {
        var _a = {clearBuffer:[]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     printBuffer() { switch(arguments.length) {
        case 0:
            var _a = {printBuffer:[]};
            this.label_func["func"+this.incLabelNum] = _a;
            this.incLabelNum++;
            break;
        case 1:
            var _a = {printBuffer:[arguments[0]]};
            this.label_func["func"+this.incLabelNum] = _a;
            this.incLabelNum++;
            break;
        }
    }
    
     directDrawText(text) {
        var _a = {directDrawText:[text]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     directDrawHex(hexstring) {
        var _a = {directDrawHex:[hexstring]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setCharacterset(ics,charset) {
        var _a = {setCharacterset:[ics, charset]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawDeviceFont(text, x, y, fontType, widthEnlarge, heightEnlarge, rotation, invert, bold, alignment) {
        var _a = {drawDeviceFont:[text, x, y, fontType, widthEnlarge, heightEnlarge, rotation, invert, bold, alignment]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawVectorFont(text, x, y, fontType, fontWidth, fontHeight, rightSpacing, bold, invert, italic, rotation, alignment, rtol) {
        var _a = {drawVectorFont:[text, x, y, fontType, fontWidth, fontHeight, rightSpacing, bold, invert, italic, rotation, alignment, rtol]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawTrueTypeFont (text, x, y, fontname, fontsize, rotation, italic, bold, underline, compression) {
        var _a = {drawTrueTypeFont:[text, x, y, fontname, fontsize, rotation, italic, bold, underline, compression]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     draw1DBarcode(data, x, y, symbol, narrowbar, widebar, height, rotation, hri) {
        var _a = {draw1DBarcode:[data, x, y, symbol, narrowbar, widebar, height, rotation, hri]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawMaxiCode(data, x, y, mode) {
        var _a = {drawMaxiCode:[data, x, y, mode]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawPDF417(data, x, y, maxRowCount, maxColumnCount, eccLevel, dataCompressionMethod, hri, barcodeOriginPoint, moduleWidth, barHeight, rotation) {
        var _a = {drawPDF417:[data, x, y, maxRowCount, maxColumnCount, eccLevel, dataCompressionMethod, hri, barcodeOriginPoint, moduleWidth, barHeight, rotation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawQRCode(data, x, y, model, eccLevel, size, rotation) {
        var _a = {drawQRCode:[data, x, y, model, eccLevel, size, rotation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawDataMatrix(data, x, y, size, invert, rotation = 0) {
        var _a = {drawDataMatrix:[data, x, y, size, invert, rotation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawAztec(data, x, y, size, extendedChannel, eccSymbol, menuSymbol, numberOfSymbols, optionalID, rotation) {
        var _a = {drawAztec:[data, x, y, size, extendedChannel, eccSymbol, menuSymbol, numberOfSymbols, optionalID, rotation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawCode49(data, x, y, narrowbar, widebar, height, hri, starting, rotation) {
        var _a = {drawCode49:[data, x, y, narrowbar, widebar, height, hri, starting, rotation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawCODABLOCK(data, x, y, narrowbar, widebar, height, security, dataColumns, mode, rowsEncode) {
        var _a = {drawCODABLOCK:[data, x, y, narrowbar, widebar, height, security, dataColumns, mode, rowsEncode]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawMicroPDF(data, x, y, moduleWidth, height, mode, rotation) {
        var _a = {drawMicroPDF:[data, x, y, moduleWidth, height, mode, rotation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawIMB(data, x, y, rotation, hri) {
        var _a = {drawIMB:[data, x, y, rotation, hri]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawMSIBarcode(data, x, y, narrowbar, widebar, height, checkdigit, checkdigitHri, rotation, hri) {
        var _a = {drawMSIBarcode:[data, x, y, narrowbar, widebar, height, checkdigit, checkdigitHri, rotation, hri]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawPlesseyBarcode(data, x, y, narrowbar, widebar, height, checkdigitHri, rotation, hri) {
        var _a = {drawPlesseyBarcode:[data, x, y, narrowbar, widebar, height, checkdigitHri, rotation, hri]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawTLC39Barcode(data, x, y, narrowbar, widebar, height, pdf417Height, pdf417narrowbar, rotation) {
        var _a = {drawTLC39Barcode:[data, x, y, narrowbar, widebar, height, pdf417Height, pdf417narrowbar, rotation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawRSSBarcode(data, x, y, rssType, magnification, separatorHeight, barcodeHeight, segmentWidth, rotation) {
        var _a = {drawRSSBarcode:[data, x, y, rssType, magnification, separatorHeight, barcodeHeight, segmentWidth, rotation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawBitmap(data, x, y, width, dither) {
        var _a = {drawBitmap:[data, x, y, width, dither]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawBitmapFile(filepath, x, y, width, dither) {
        var _a = {drawBitmapFile:[filepath, x, y, width, dither]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     printPDF(filepath, pageNumber, width, dither) {
        var _a = {printPDF:[filepath, pageNumber, width, dither]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawBlock(startHorizontal, startVertical, endHorizontal, endVertical, option, thickness) {
        var _a = {drawBlock:[startHorizontal, startVertical, endHorizontal, endVertical, option, thickness]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     drawCircle(startHorizontal, startVertical, circleSize, muliplier) {
        var _a = {drawCircle:[startHorizontal, startVertical, circleSize, muliplier]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setPrintingType(type) {
        var _a = {setPrintingType:[type]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setMargin(horizontal, vertical) {
        var _a = {setMargin:[horizontal, vertical]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setLength(labelLength, gapLength, media, offset) {
        var _a = {setLength:[labelLength, gapLength, media, offset]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setWidth(width) {
        var _a = {setWidth:[width]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setSpeed(speed) {
        var _a = {setSpeed:[speed]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setDensity(density) {
        var _a = {setDensity:[density]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setOrientation(orientation) {
        var _a = {setOrientation:[orientation]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setOffset(offset) {
        var _a = {setOffset:[offset]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setTearoffPosition(position) {
        var _a = {setTearoffPosition:[position]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setAutoCutter(enable, period) {
        var _a = {setAutoCutter:[enable, period]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setupRFID(rfidType, numberOfRetries, numberOfLabel, radioPower) {
        var _a = {setupRFID:[rfidType, numberOfRetries, numberOfLabel, radioPower]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     calibrateRFID() {
        var _a = {calibrateRFID:[]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setRFIDPosition(transPosition) {
        var _a = {setRFIDPosition:[transPosition]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     writeRFID(dataType, startingBlockNumber, dataLength, data) {
        var _a = {writeRFID:[dataType, startingBlockNumber, dataLength, data]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setRFIDPassword(oldAccessPwd, oldKillPwd, newAccessPwd, newKillPwd) {
        var _a = {setRFIDPassword:[oldAccessPwd, oldKillPwd, newAccessPwd, newKillPwd]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     lockRFID() {
        var _a = {lockRFID:[]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     setEPCDataStructure(totalSize, fieldSizes) {
        var _a = {setEPCDataStructure:[totalSize, fieldSizes]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
    
     printINI(filename, str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, str20) {
        var _a = {printINI:[filename, str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, str20]};
        this.label_func["func"+this.incLabelNum] = _a;
        this.incLabelNum++;
    }
}

module.exports = new Export();
