let options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};
const displayTime = () => {
	const x = new Date();
	const ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
	hours = x.getHours( ) % 12;
	hours = hours ? hours : 12;
	const tdate = x.toLocaleString('en-GB', options); 
	const tTime = (hours.toString().length === 1 ? `0${hours}` : hours) + ":" +  (x.getMinutes().toString().length === 1 ? `0${x.getMinutes()}` : x.getMinutes()) + ":" +  (x.getSeconds().toString().length === 1 ? `0${x.getSeconds()}` : x.getSeconds())  + ampm;
	document.getElementById('t-date').innerHTML = tdate;
	document.getElementById('t-time').innerHTML = tTime;
}

setInterval(() => {
	displayTime();
}, 1000);

/* function display_c6()
{
	var refresh=1000; // Refresh rate in milli seconds
	mytime=setTimeout('displayTime()',refresh);
}

display_c6(); */