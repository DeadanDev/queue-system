global.XMLHttpRequest = require('xhr2');

class Export {
	constructor() {
		this.serverURL = "http://127.0.0.1:18080/WebPrintSDK/";
	}
	
	 toHexBinary(s){
		var l=s.length,r=new Array(l),i;
		for(i=0;i<l;i++){
			r[i]=("0"+s.charCodeAt(i).toString(16)).slice(-2)
		}
		return r.join("")
	}
	
	 makeResultInquiryData(requestId, responseId, timeout){
		return "{\"RequestID\":"+requestId+",\"ResponseID\":\""+responseId+"\",\"Timeout\":"+timeout+"}";
	}
	
	 requestMSRData(strPrinterName, timeout, _callback) {
		var requestURL = this.serverURL + strPrinterName +"/requestMSRData";
		
		var xmlHttpCheck = false;
		if (global.XMLHttpRequest) {
			xmlHttpCheck = new XMLHttpRequest();
		}	
	
		var inquiryData = "{\"Timeout\":"+timeout+"}";
		
		xmlHttpCheck.open('POST', requestURL, true);
		xmlHttpCheck.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlHttpCheck.send(inquiryData);
		xmlHttpCheck.onreadystatechange = () => {
			if (xmlHttpCheck.readyState == 4 && xmlHttpCheck.status == 200) {
				var res = JSON.parse(xmlHttpCheck.responseText);
	
				var track1 = res.Track1;
				var track2 = res.Track2;
				var track3 = res.Track3;
	
				_callback(res.Result, track1, track2, track3);
			}
			else if (xmlHttpCheck.readyState == 4 && xmlHttpCheck.status == 404) {
				_callback("No printers");
			}	
			else if(xmlHttpCheck.readyState == 4) {
				_callback("cannot connect to server");
			}
		}
	}
	
	 checkResult(method, strPrinterName, requestId, responseId, _callback) {
		var requestURL = this.serverURL + strPrinterName +"/checkStatus";
		
		var xmlHttpCheck = false;
		if (global.XMLHttpRequest) {
			xmlHttpCheck = new XMLHttpRequest();
		}
		
		var inquiryData = this.makeResultInquiryData(requestId, responseId, 30);
		
		xmlHttpCheck.open(method, requestURL, true);
		xmlHttpCheck.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlHttpCheck.send(inquiryData);
		xmlHttpCheck.onreadystatechange = () => {
			if (xmlHttpCheck.readyState == 4 && xmlHttpCheck.status == 200) {
				var res = JSON.parse(xmlHttpCheck.responseText);
				var ret = res.Result;
	
				if(ret.search("ready") >= 0 || ret.search("progress") >= 0)	{
					this.checkResult(method, strPrinterName, requestId, responseId, _callback);
				}
				else {
					_callback(res.ResponseID + ":"+ ret);
				}
			}
			else if (xmlHttpCheck.readyState == 4 && xmlHttpCheck.status == 404) {
				_callback("No printers");
			}	
			else if(xmlHttpCheck.readyState == 4) {
				_callback("cannot connect to server");
			}
		}
	}
	
	 requestPrint(strPrinterName, strSubmit, _callback) {
		var requestURL = this.serverURL + strPrinterName;
		var xmlHttpReq = false;
			
		if (global.XMLHttpRequest) {
			xmlHttpReq = new XMLHttpRequest();
		}
	
		xmlHttpReq.open('POST', requestURL, true);
		xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlHttpReq.send(strSubmit);
		
		xmlHttpReq.onreadystatechange = () => {
	
			if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
				var res = JSON.parse(xmlHttpReq.responseText);
				var ret = res.Result;
				if(ret.search("ready") >= 0 || ret.search("progress") >= 0)	{
					this.checkResult('POST', strPrinterName, res.RequestID, res.ResponseID, _callback);
				}
				else if(ret.search("duplicated") >= 0) {
					_callback(res.Result);
				}
			}
			else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 404) {
				_callback("No printers");
			}
			else if(xmlHttpReq.readyState == 4) {
				_callback("cannot connect to server");
			}
		}
	}
	
	 getBrowser() {
		var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			return { name: 'IE', version: (tem[1] || '') };
		}
		if (M[1] === 'Chrome') {
			tem = ua.match(/\bOPR|Edge\/(\d+)/)
			if (tem != null) { return { name: 'Opera', version: tem[1] }; }
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
		if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
		return {
			name: M[0],
			version: M[1]
		};
	}
	
	 isEmpty(data) {
		if (typeof data == "undefined" 
			|| data == null 
			|| data == "")  
				return true;
	
		else 	return false;
	}
}

module.exports = new Export();
