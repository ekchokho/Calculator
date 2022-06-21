function popMenu(inval){
	htmlVal = "";
	for (i = 0; i < allA.length; i++) {
		if (inval == allA[i][0][0]){
			htmlVal = htmlVal + "<li id='menuon'><a href='javascript:popMenu(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}else{
			htmlVal = htmlVal + "<li><a href='javascript:popMenu(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}
	}
	htmlVal = "<ul>" + htmlVal + "</ul>";
	gObj("topmenu").innerHTML = htmlVal;
}

function popMenuSmall(inval){
	tA[0] = new Array("Temp","tA");
	htmlVal = "";
	for (i = 0; i < allA.length; i++) {

		if (inval == allA[i][0][0]){
			htmlVal = htmlVal + "<li id='menuon'><a href='javascript:popMenuSmall(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}else{
			htmlVal = htmlVal + "<li><a href='javascript:popMenuSmall(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}
	}
	htmlVal = "<ul>" + htmlVal + "</ul>";
	gObj("topmenu").innerHTML = htmlVal;
}


var lA = new Array();
lA[0] = new Array("Length","lA");
lA[1] = new Array("Meter","iv","iv");
lA[2] = new Array("Kilometer","iv*1000","iv/1000");
lA[3] = new Array("Centimeter","iv*0.01","iv/0.01");
lA[4] = new Array("Millimeter","iv*0.001","iv/0.001");
lA[5] = new Array("Micrometer","iv*0.000001","iv/0.000001");
lA[6] = new Array("Nanometer","iv*0.000000001","iv/0.000000001");
lA[7] = new Array("Mile","iv*1609.35","iv/1609.35");
lA[8] = new Array("Yard","iv*0.9144","iv/0.9144");
lA[9] = new Array("Foot","iv*0.3048","iv/0.3048");
lA[10] = new Array("Inch","iv*0.0254","iv/0.0254");
lA[11] = new Array("Light Year","iv*9.46066e+15","iv/9.46066e+15");

var tA = new Array();
tA[0] = new Array("Temperature","tA");
tA[1] = new Array("Celsius","iv","iv");
tA[2] = new Array("Kelvin", "iv - 273.15", "iv + 273.15");
tA[3] = new Array("Fahrenheit", "5/9*(iv-32)", "9/5*iv + 32");

var aA = new Array();
aA[0] = new Array("Area","aA");
aA[1] = new Array("Square Meter","iv","iv");
aA[2] = new Array("Square Kilometer", "iv*1000000", "iv/1000000");
aA[3] = new Array("Square Centimeter", "iv*0.0001", "iv/0.0001");
aA[4] = new Array("Square Millimeter", "iv*0.000001", "iv/0.000001");
aA[5] = new Array("Square Micrometer", "iv*0.000000000001", "iv/0.000000000001");
aA[6] = new Array("Hectare", "iv*10000", "iv/10000");
aA[7] = new Array("Square Mile", "iv*2589990", "iv/2589990");
aA[8] = new Array("Square Yard", "iv*0.83612736", "iv/0.83612736");
aA[9] = new Array("Square Foot", "iv*0.09290304", "iv/0.09290304");
aA[10] = new Array("Square Inch", "iv*0.000645160", "iv/0.000645160");
aA[11] = new Array("Acre", "iv*4046.8564224", "iv/4046.8564224");

var vA = new Array();
vA[0] = new Array("Volume","vA");
vA[1] = new Array("Cubic Meter","iv","iv");
vA[2] = new Array("Cubic Kilometer", "iv*1000000000", "iv/1000000000");
vA[3] = new Array("Cubic Centimeter", "iv*0.000001", "iv/0.000001");
vA[4] = new Array("Cubic Millimeter", "iv*1.0e-9", "iv/1.0e-9");
vA[5] = new Array("Liter", "iv*0.001", "iv/0.001");
vA[6] = new Array("Milliliter", "iv*0.000001", "iv/0.000001");
vA[7] = new Array("US Gallon", "iv*0.00378541", "iv/0.00378541");
vA[8] = new Array("US Quart", "iv*0.0009463525", "iv/0.0009463525");
vA[9] = new Array("US Pint", "iv*0.00047317625", "iv/0.00047317625");
vA[10] = new Array("US Cup", "iv*0.000236588125", "iv/0.000236588125");
vA[11] = new Array("US Fluid Ounce", "iv*0.000029573515625", "iv/0.000029573515625");
vA[12] = new Array("US Table Spoon", "iv*0.0000147867578125", "iv/0.0000147867578125");
vA[13] = new Array("US Tea Spoon", "iv*4.9289192708333333333333333333333e-6", "iv/4.9289192708333333333333333333333e-6");
vA[14] = new Array("Imperial Gallon", "iv*0.00454609", "iv/0.00454609");
vA[15] = new Array("Imperial Quart", "iv*0.0011365225", "iv/0.0011365225");
vA[16] = new Array("Imperial Pint", "iv*0.00056826125", "iv/0.00056826125");
vA[17] = new Array("Imperial Fluid Ounce", "iv*0.0000284130625", "iv/0.0000284130625");
vA[18] = new Array("Imperial Table Spoon", "iv*0.0000177581640625", "iv/0.0000177581640625");
vA[19] = new Array("Imperial Tea Spoon", "iv*5.9193880208333333333333333333333e-6", "iv/5.9193880208333333333333333333333e-6");
vA[20] = new Array("Cubic Mile", "iv*4.16818e+9", "iv/4.16818e+9");
vA[21] = new Array("Cubic Yard", "iv*0.764554857984", "iv/0.764554857984");
vA[22] = new Array("Cubic Foot", "iv*0.028316846592", "iv/0.028316846592");
vA[23] = new Array("Cubic Inch", "iv*0.000016387064", "iv/0.000016387064");

var wA = new Array();
wA[0] = new Array("Weight","wA");
wA[1] = new Array("Kilogram","iv","iv");
wA[2] = new Array("Gram", "iv*0.001", "iv/0.001");
wA[3] = new Array("Milligram", "iv*0.000001", "iv/0.000001");
wA[4] = new Array("Metric Ton", "iv*1000", "iv/1000");
wA[5] = new Array("Long Ton", "iv*1016.04608", "iv/1016.04608");
wA[6] = new Array("Short Ton", "iv*907.184", "iv/907.184");
wA[7] = new Array("Pound", "iv*0.453592", "iv/0.453592");
wA[8] = new Array("Ounce", "iv*0.0283495", "iv/0.0283495");
wA[9] = new Array("Carrat", "iv*0.0002", "iv/0.0002");
wA[10] = new Array("Atomic Mass Unit", "iv*1.6605401999104288e-27", "iv/1.6605401999104288e-27");

var mA = new Array();
mA[0] = new Array("Time","mA");
mA[1] = new Array("Second","iv","iv");
mA[2] = new Array("Millisecond", "iv*0.001", "iv/0.001");
mA[3] = new Array("Microsecond", "iv*0.000001", "iv/0.000001");
mA[4] = new Array("Nanosecond", "iv*0.000000001", "iv/0.000000001");
mA[5] = new Array("Picosecond", "iv*0.000000000001", "iv/0.000000000001");
mA[6] = new Array("Minute", "iv*60", "iv/60");
mA[7] = new Array("Hour", "iv*3600", "iv/3600");
mA[8] = new Array("Day", "iv*86400", "iv/86400");
mA[9] = new Array("Week", "iv*604800", "iv/604800");
mA[10] = new Array("Month", "iv*2629800", "iv/2629800");
mA[11] = new Array("Year", "iv*31557600", "iv/31557600");

//allA = new Array(lA,tA,aA,vA,wA,mA);
allA = new Array(lA,tA,aA,vA,wA);

function cleanNumberInput(inVal){
	var tempVal	= inVal+"";
	while ((tempVal.indexOf(" ")>-1)||(tempVal.indexOf("	")>-1)||(tempVal.indexOf(",")>-1)){
		tempVal = tempVal.replace(" ", "").replace("	", "").replace(",", "");
	}
	return tempVal;
}
function gnumberFormat(valToBeFormated){
	var gniTotalDigits = 12;
	var gniPareSize = 12;
	var valStr = "" + valToBeFormated;
	if (valStr.indexOf("N")>=0 || (valToBeFormated == 2*valToBeFormated && valToBeFormated == 1+valToBeFormated)) return "Error ";
	var i = valStr.indexOf("e")
	if (i>=0){
		var expStr = valStr.substring(i+1,valStr.length);
		if (i>11) i=11;  // max 11 digits
		valStr = valStr.substring(0,i);
		if (valStr.indexOf(".")<0){
			valStr += ".";
		}else{
			// remove trailing zeros
			j = valStr.length-1;
			while (j>=0 && valStr.charAt(j)=="0") --j;
			valStr = valStr.substring(0,j+1);
		}
		valStr += "E" + expStr;
	}else{
		var valNeg = false;
		if (valToBeFormated < 0){
			valToBeFormated = -valToBeFormated;
			valNeg = true;
		}
		var valInt = Math.floor(valToBeFormated);
		var valFrac = valToBeFormated - valInt;
		var prec = gniTotalDigits - (""+valInt).length - 1;	// how many digits available after period

		var mult = " 1000000000000000000".substring(1,prec+2);
		if ((mult=="")||(mult==" ")){
			mult = 1;
		}else{
			mult = parseInt(mult);
		}
		var frac = Math.floor(valFrac * mult + 0.5);
		valInt = Math.floor(Math.floor(valToBeFormated * mult + .5) / mult);
		if (valNeg)
			valStr = "-" + valInt;
		else
			valStr = "" + valInt;
		var fracStr = "00000000000000"+frac;
		fracStr = fracStr.substring(fracStr.length-prec, fracStr.length);
		i = fracStr.length-1;

		// remove trailing zeros unless fixed during entry.
		while (i>=0 && fracStr.charAt(i)=="0") --i;
		fracStr = fracStr.substring(0,i+1);
		if (i>=0) valStr += "." + fracStr;
	}
	return valStr;
}

function isNum(sText){
	var ValidChars = "0123456789.-";
	var Char;
	if (sText.length < 1) return false;
	for (i = 0; i < sText.length; i++) {
		Char = sText.charAt(i);
		if (ValidChars.indexOf(Char) == -1) return false;
	}
	return true;
}

function showSel(aName){
	document.calForm.calFrom.length = 0;
	document.calForm.calTo.length = 0;
	for(i=1; i<aName.length; i++){
		document.calForm.calFrom.options[(i-1)] = new Option(aName[i][0],i);
		document.calForm.calTo.options[(i-1)] = new Option(aName[i][0],i);
	}
	document.calForm.calFrom.options[0].selected = true;
	document.calForm.calTo.options[1].selected = true;
	document.calForm.toVal.value = "";
	currentAName = aName;
	calcul();
}

function calVal(id, iv){
	eval("rv = (" + currentAName[id][2] + ");");
	return gnumberFormat(rv);
}
function calcul(){
	selectFrom = document.calForm.calFrom;
	selectTo = document.calForm.calTo;
	fromVal = cleanNumberInput(document.calForm.fromVal.value);
	selectFromID = 0;
	selectToID = 0;
	selectFromVal = "";
	selectToVal = "";
	stdval = 0;
	for (var i = 0; i < selectFrom.options.length; i++) {
		if(selectFrom.options[i].selected) {
			selectFromID = selectFrom.options[i].value;
			selectFromVal = selectFrom.options[i].text;
		}
	}
	for (var i = 0; i < selectTo.options.length; i++) {
		if(selectTo.options[i].selected) {
			selectToID = selectTo.options[i].value;
			selectToVal = selectTo.options[i].text;
		}
	}
	if ((selectFromID>0) && (isNumber(fromVal))){
		iv = parseFloat(fromVal);
		stdval = 0;
		eval("stdval = " + currentAName[selectFromID][1]+ ";");

		document.calForm.calTo.length = 0;
		for(i=1; i<currentAName.length; i++){
			tempVal = calVal(i, stdval);
			selectTo.options[(i-1)] = new Option(currentAName[i][0] + " (" + tempVal + ")",i);
			if (selectToID == i) {
				selectTo.options[(i-1)].selected = true;
				document.calForm.toVal.value = tempVal;
				gObj("fcresult").innerHTML = "<font color='red'><b>Result:</b></font> " + fromVal + " " + selectFromVal + " = " + tempVal + " " + currentAName[i][0];
			}
		}
	}
	if ((!(isNumber(fromVal)))||(selectFromID<1)){
		for(i=1; i<currentAName.length; i++){
			tempVal = calVal(i, stdval);
			selectTo.options[(i-1)] = new Option(currentAName[i][0],i);
			if (selectToID == i) {
				selectTo.options[(i-1)].selected = true;
				document.calForm.toVal.value = "";
				gObj("fcresult").innerHTML = "";
			}
		}
		if ((fromVal+"").length>0){
			gObj("fcresult").innerHTML = "<font color='red'>Please provide a valid number!</font>";
		}
	}
}
