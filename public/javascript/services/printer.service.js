let id = 0;

const print4Customer = (printerName, num, current) => {
    setPosId(++id);
    chechPrinterStatus();

    printText("Your order number is\n\n", 0, 0, false, false, false, 0, 1);		
    printText(`${num}\n\n`, 5, 4, true, false, false, 0, 1);	
    printText("Current number: \n", 0, 0, true, false, false, 0, 1);	
    printText(`${num}\n\n`, 1, 1, true, false, false, 0, 1);	
    printText("\n\n\n\n\n", 0, 0, false, false, false, 0, 0);	

    cutPaper(0);

    requestPrint(printerName, getPosData(), res => {
        console.log(res);
    });

    return true;
};

const print4Kitchen = (printerName, num) => {
    setPosId(++id);
    chechPrinterStatus();

    printText("Order number\n\n", 0, 0, false, false, false, 0, 1);		
    printText(`${num}\n\n`, 5, 4, true, false, false, 0, 1);	
    printText("\n\n\n\n\n", 0, 0, false, false, false, 0, 0);	

    cutPaper(0);

    requestPrint(printerName, getPosData(), res => {
        console.log(res);
    });

    return true;
};