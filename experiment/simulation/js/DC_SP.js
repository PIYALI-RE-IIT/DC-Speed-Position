 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/ 



/////////////////////////////////////////////ALL FUNCTIONS FOR ROTATING KNOBS///////////////////////////////////
var angle1= 0,angle2= 0,rotation=0;

///knob1 increase ,used for finding tacho generator constant
function rotate1(){
	
	angle1++;
	var deg = angle1*2;
	
	var knob1= document.getElementById('knob1');
	//var wheel = document.getElementById('rotor');
	
	knob1.style.transform="rotate("+deg+"deg)";	
	document.getElementById('Au_up').stepUp(1);///always
	
	if(document.getElementById('partchk').value == 1 && document.getElementById('Au_up').value >= 5){
	document.getElementById('Au_upchk').stepUp(1);			
	}
	if(document.getElementById('Au_up').value < 5){
	document.getElementById('Au_upchk').value = 0;
	}
	///Triggerring Function
	if(document.getElementById('partchk').value == 1){	
		tacho_const();
	}
	
	
	
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	document.getElementById('Au_up').value =0;
	//document.getElementById('Au_upchk').value =0;
	angle1=0;
	return;
   }
    
 }
 
 ///knob1 decrease ,used for finding tacho generator constant
 function rotate2(){
	
	angle1--;
	var deg = angle1*2;
	
	var knob1= document.getElementById('knob1');
	var wheel = document.getElementById('rotor');
	
	knob1.style.transform="rotate("+deg+"deg)";	
	document.getElementById('Au_up').stepDown(1);///always

	if(document.getElementById('partchk').value == 1 && document.getElementById('Au_up').value >= 5){
	document.getElementById('Au_upchk').stepDown(1);
	}
	
	if(document.getElementById('Au_up').value < 5){
	document.getElementById('Au_upchk').value = 0;
	}
	///Triggerring Function
	if(document.getElementById('partchk').value == 1){	
		tacho_const();
	}
	
	
	
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	
	angle1=0;
	return;
   }
    
 }
 
 ///knob2 increase ,used for open loop speed control
 function rotate3(){
	
	angle2++;
	var deg = angle2*20;
	
	var knob2= document.getElementById('knob2');
	var wheel = document.getElementById('rotor');
	
	knob2.style.transform="rotate("+deg+"deg)";
	document.getElementById('Au_down').stepUp(1);	
	
	///increase in Reference voltage with knob value for open loop speed control function,from lab test data in this case ref voltage increases in a step of 1.45 
	if(document.getElementById('partchk').value == 2 || document.getElementById('partchk').value == 3){
	document.getElementById('refV').stepDown(1);
	}	
	else{
	document.getElementById('refV').value=0;
	}
	
	///Triggerring Function
	
	if(document.getElementById('partchk').value == 2){	
		OpenLoop_SpeedControl();
	}
	if(document.getElementById('partchk').value == 3){	
		ClosedLoop_SpeedControl();
	}
		
	
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	document.getElementById('Au_down').value =0;
	document.getElementById('refV').value =0;
	angle2=0;
	return;
   }
    
 }
 
 ///knob2 decrease ,used for open loop speed control
 function rotate4(){
	
	angle2--;
	var deg = angle2*20;
	
	var knob2= document.getElementById('knob2');
	var wheel = document.getElementById('rotor');
	
	knob2.style.transform="rotate("+deg+"deg)";
	document.getElementById('Au_down').stepDown(1);	
	

	///decrease in Reference voltage with knob value for open loop speed control function,from lab test data in this case ref voltage decreases in a step of 1.45 
	if(document.getElementById('partchk').value == 2 || document.getElementById('partchk').value == 3){
	document.getElementById('refV').stepUp(1);
	}	
	else{
	document.getElementById('refV').value=0;
	}
	
	
	///Triggerring Function
	
	if(document.getElementById('partchk').value == 2){	
		OpenLoop_SpeedControl();
	}
	if(document.getElementById('partchk').value == 3){	
		ClosedLoop_SpeedControl();
	}
	
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	
	angle2=0;
	return;
   }
    
 }
 
 
 
 
 
 
 ///power supply box toggle switch
 function power_on(){
	 
	 if(document.getElementById('togsw').src.match("./images/off.png")){	
	document.getElementById('togsw').src = "./images/on.png";
	document.getElementById('powerled').src = "./images/gron.png";
	
	document.getElementById('knob1').style['pointer-events'] = "auto";
	document.getElementById('knob2').style['pointer-events'] = "auto";
	document.getElementById('brake_change').disabled = false;

	setTimeout(function(){
		document.getElementById('ammeter').src = "./images/amp_pointer2.jpg";	
		},20000)

	}

else if(document.getElementById('togsw').src.match("./images/on.png")){	
	document.getElementById('togsw').src = "./images/off.png";
	document.getElementById('powerled').src = "./images/groff.png";
	
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	document.getElementById('brake_change').disabled = true;
	
	setTimeout(function(){
		document.getElementById('ammeter').src = "./images/amp_pointer.jpg";	
		},1000)
	
	}
 }
///pre amplifier box toggle switch
 function preAmp_on(){
	 
	 if(document.getElementById('togsw2').src.match("./images/off.png")){	
	document.getElementById('togsw2').src = "./images/on.png";
	
	}

else if(document.getElementById('togsw2').src.match("./images/on.png")){	
	document.getElementById('togsw2').src = "./images/off.png";
	
	}
 }

function tacho_const(){///to find tacho generator constant exp part-1
	
var knbValue = document.getElementById('Au_up').value;
var knbCount = 	document.getElementById('Au_upchk').value;
///lab test data knob value 5 = 1.08V and 10=16.01v	

///we have 10k resistance in two potentiometers of Au unit, we got through calculation and lab test data 5 knob value = 10% of 10k resistance but from 0 t05 knob value no tacho volt or motor speed
///is generated,for more the 5 knob value we get abrupt change in speed as well as tacho volt. studying the characteristics of the rotating knob in lab found a conclution follows 
if(document.getElementById('Au_up').value < 5){
var tachoVolt  = 0;
}
else if(document.getElementById('Au_up').value >= 5 && document.getElementById('Au_up').value <10.1){	
 var tachoVolt = math.add(1.08,math.multiply(knbCount , 0.28));
}

//else if(document.getElementById('Au_up').value >= 8 && document.getElementById('Au_up').value <10.1 ){
 //var tachoVolt = math.add(1.08,math.multiply(knbCount ,0.38));
//}
console.log(knbCount);
document.getElementById('tachoV').value = tachoVolt;	

var speedV = math.multiply(365.053763,tachoVolt);///from graph plot(slope) through lab test data 365.053763 rpm/volt	
document.getElementById('tachospeed').value = speedV;
	
}





var OLspeed,CLspeed;///taken for brake calculation
var Linv_oltf,Linv_cltf;///taken for speeds of oltf cltf

///function of openloop speed control ignoring L
/*function OpenLoop_SpeedControl(){///Opend loop speed control(without brake) of dc motor exp part-2 main math model

var refVAct = document.getElementById('refV').value;///reference voltage actual

var refV = Math.abs(refVAct);//need to edit


/// we will calculate the tachovoltage through oltf of dc motor i.e. k/(1+sTau), a first order equation.we will take the steady state value of it
///taking Matlab simulink data

var J = math.multiply(3.2284,math.pow(10,-6));//0.01;/// moment of inertia of motor in kg.m^2
var b = math.multiply(3.5077,math.pow(10,-6));//0.1;///motor viscous friction constant in N.m.second
var k = 0.0274;//0.9;//0.01;///motor torque constant in N.m/Amp
var R = 4;//5.2;//1;///electric resistance in ohm
var L = math.multiply(2.75,math.pow(10,-6));//0.00225;///electric inductance in henry

//////Now 1st order equn acc to plant equn///////////////////////////////
var km = math.divide(k,math.add(math.multiply(R,b), math.pow(k,2)));//motor const

var Tau = math.divide(math.multiply(R,J),math.add(math.multiply(R,b),math.pow(k,2))); // motor time const

var gain = refV;//document.getElementById('refV').value;

for(var t = 0;t<=3;t++){

var Linv_oltf = math.multiply(gain,km,math.subtract(1,math.pow(math.e,-math.divide(t,Tau))));

}
var omega = Linv_oltf;
var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi));
document.getElementById('tachospeed').value = N;
OLspeed = N;

var tachoVolt = math.multiply(N,0.00273932);


if(refV<=10.15 ){
var errvlaue = math.multiply(refV,1.0020242915);///from lab test data the error voltage in open loop slightly differs from the refV so we have drawn a slope, slope const from errv vs.refV plot =1.0020242915

}

if(refV>10.15 ){
													
var errvlaue = math.multiply(10.15,1.0020242915);///cause in opamp unit voltage cant exceed 10v,seen in lab test
} 

document.getElementById('tachoV').value = tachoVolt;
document.getElementById('errV').value = errvlaue;

}*/



///Refer to Kuo Pg no:- 287 onwards,speed - position control of a dc motor
function OpenLoop_SpeedControl(){///Open loop speed control(without brake) of dc motor exp part-2 main math model without ignoring L

var refVAct = document.getElementById('refV').value;///reference voltage actual

var refV = Math.abs(refVAct);//need to edit

/// we will calculate the tachovoltage through oltf of dc motor i.e. k/((Js+b)(Ls+R)+k^2), a second order equation.we will take the steady state value of it
///taking data from a paper where same model has been used

var J = math.multiply(3.2284,math.pow(10,-6));//0.01;/// moment of inertia of motor in kg.m^2
var b = math.multiply(3.5077,math.pow(10,-6));//0.1;///motor viscous friction constant in N.m.second
var k = 0.0274;//0.9;//0.01;///motor torque constant in N.m/Amp
var R = 4;//5.2;//1;///electric resistance in ohm
var L = math.multiply(2.75,math.pow(10,-6));//0.00225;///electric inductance in henry

//////Now 2nd order equn acc to plant equn///////////////////////////////

var Gain = math.multiply(refV,math.divide(k,math.add(math.multiply(b,R),math.pow(k,2))));
console.log('Gain='+Gain);


for(var t = 0;t<=5;t++){

var wn = math.sqrt(math.divide(math.add(math.multiply(b,R),math.pow(k,2)),math.multiply(L,J)));
console.log('wn='+wn);

///zeta is coming>1,hence overdamped system
var zeta = math.multiply(math.divide(1,math.multiply(2,wn)),math.divide(math.add(math.multiply(b,L),math.multiply(R,J)),math.multiply(L,J))) ;
console.log('zeta='+zeta);

var sn2 = math.multiply(wn,t);
var sn1 =math.subtract(zeta,math.sqrt(math.subtract(math.pow(zeta,2),1)));
var epow = (math.multiply(sn1,sn2));
var epart = math.pow(math.e,-epow);

var sd = math.multiply(2,math.sqrt(math.subtract(math.pow(zeta,2),1)),sn1);

 Linv_oltf = math.multiply(Gain,math.subtract(1,math.divide(epart,sd)));

console.log('Linv_oltf='+Linv_oltf);	

}

var omega = Linv_oltf;
var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi));
document.getElementById('tachospeed').value = N;
OLspeed = N;

var tachoVolt = math.multiply(N,0.002739322); ///since closed loop the tacho gen volt can not exceed 10 v cause in op amp unit at the max of +-10 v we get.

//var errvlaue = math.subtract(refV,tachoVolt);///when motor starts err volt comes through refv-tachov formula in closed loop 
if(refV<=10.15 ){
var errvlaue = math.multiply(refV,1.0020242915);///from lab test data the error voltage in open loop slightly differs from the refV so we have drawn a slope, slope const from errv vs.refV plot =1.0020242915

}

if(refV>10.15 ){
													
var errvlaue = math.multiply(10.15,1.0020242915);///cause in opamp unit voltage cant exceed 10v,seen in lab test
} 

document.getElementById('tachoV').value =tachoVolt;
document.getElementById('errV').value = errvlaue;

}

/*function ClosedLoop_SpeedControl(){///Closed loop speed control(without brake) of dc motor exp part-3 main math model ignoring L

var refVAct = document.getElementById('refV').value;///reference voltage actual

var refV = Math.abs(refVAct);//need to edit

/// we will calculate the tachovoltage through cltf of dc motor i.e. (k kT kg/RJ)/(s+((kT kb+ R b +kg kT k)/RJ)), a first order equation ignoring L .we will take the steady state value of it
///k = preAmp gain here = 10.3913
///taking data from a paper where same model has been used

var J = math.multiply(3.2284,math.pow(10,-6));//0.01;/// moment of inertia of motor in kg.m^2
var b = math.multiply(3.5077,math.pow(10,-6));//0.1;///motor viscous friction constant in N.m.second
var k = 0.0274;//0.9;//0.01;///motor torque constant in N.m/Amp=kb=back emf const
var R = 4;//5.2;//1;///electric resistance in ohm
var L = math.multiply(2.75,math.pow(10,-6));//0.00225;///electric inductance in henry
var k_preAmp =10.3913;///pre amplifier const
var kg = 0.0023932;///tacho generator constant

//////Now 2nd order equn acc to plant equn///////////////////////////////

var tauc = math.divide(math.multiply(R,J),math.add(math.pow(k,2),math.multiply(R,b),math.multiply(k,k_preAmp,kg)));

var Gain = math.multiply(refV,365.054101,math.divide(math.multiply(k_preAmp,k,kg),math.multiply(R,J)),tauc);
console.log('Gain='+Gain);


for(var t = 0;t<=5;t++){

var epart = math.divide(t,tauc);
console.log('epart='+epart);

var exppart = math.pow(math.e,-epart);
console.log('exppart='+exppart);

Linv_cltf = math.multiply(Gain,math.subtract(1,exppart));

console.log('Linv_cltf='+Linv_cltf);	

}
document.getElementById('tachospeed').value = Linv_cltf;
CLspeed = Linv_cltf;
//var omega = Linv_cltf;

/*var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi));
document.getElementById('tachospeed').value = N;
CLspeed = N;*/

//var tachoVolt = math.multiply(Linv_cltf,0.00273932); ///since closed loop the tacho gen volt can not exceed 10 v cause in op amp unit at the max of +-10 v we get.

//var errvlaue = math.subtract(refV,tachoVolt);///when motor starts err volt comes through refv-tachov formula in closed loop 

/*if(refV<=10.15 ){
var errvlaue = math.multiply(refV,1.0020242915);///from lab test data the error voltage in open loop slightly differs from the refV so we have drawn a slope, slope const from errv vs.refV plot =1.0020242915

}

if(refV>10.15 ){
													
var errvlaue = math.multiply(10.15,1.0020242915);///cause in opamp unit voltage cant exceed 10v,seen in lab test
} *

document.getElementById('tachoV').value =tachoVolt;
document.getElementById('errV').value = errvlaue;

}*/


function ClosedLoop_SpeedControl(){///Closed loop speed control(without brake) of dc motor exp part-3 main math model without ignoring L

var refVAct = document.getElementById('refV').value;///reference voltage actual

var refV = Math.abs(refVAct);//need to edit

/// we will calculate the tachovoltage through cltf of dc motor i.e. (k kT kg/RJ)/(s+((kT kb+ R b +kg kT k)/RJ)), a first order equation ignoring L .we will take the steady state value of it
///k = preAmp gain here = 10.3913
///taking data from a paper where same model has been used

var J = math.multiply(3.2284,math.pow(10,-6));//0.01;/// moment of inertia of motor in kg.m^2
var b = math.multiply(3.5077,math.pow(10,-6));//0.1;///motor viscous friction constant in N.m.second
var k = 0.0274;//0.9;//0.01;///motor torque constant in N.m/Amp=kb=back emf const
var R = 4;//5.2;//1;///electric resistance in ohm
var L = math.multiply(2.75,math.pow(10,-6));//0.00225;///electric inductance in henry
var k_preAmp =10.3913;///pre amplifier const
var kg = 0.002739322;///tacho generator constant

//////Now 2nd order equn acc to plant equn///////////////////////////////

var Gain = math.multiply(refV,math.divide(math.multiply(k,k_preAmp),math.add(math.multiply(R,b),math.multiply(k,k_preAmp,kg),math.pow(k,2))));
console.log('Gain='+Gain);

var wn = math.sqrt(math.divide(math.add(math.multiply(R,b),math.multiply(k,k_preAmp,kg),math.pow(k,2)),math.multiply(L,J)));
console.log('wn='+wn);


var zeta = math.multiply(math.divide(1,math.multiply(2,wn)),math.divide(math.add(math.multiply(b,L),math.multiply(R,J)),math.multiply(L,J))) ;
console.log('zeta='+zeta);

for(var t = 0;t<=5;t++){

if(zeta>1){	
//var delta_output = parseFloat(Gain*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));

var sn2 = math.multiply(wn,t);
var sn1 =math.subtract(zeta,math.sqrt(math.subtract(math.pow(zeta,2),1)));
var epow = (math.multiply(sn1,sn2));
var epart = math.pow(math.e,-epow);

var sd = math.multiply(2,math.sqrt(math.subtract(math.pow(zeta,2),1)),sn1);

 Linv_cltf = math.multiply(Gain,math.subtract(1,math.divide(epart,sd)));

console.log('Linv_cltf='+Linv_cltf);	
}
if(zeta<1){
	
Linv_cltf = parseFloat(Gain*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
			
}

}

//var omega = Linv_cltf;
//var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi));
document.getElementById('tachospeed').value = Linv_cltf;
CLspeed = Linv_cltf;

var tachoVolt = math.multiply(Linv_cltf,0.00273932); ///since closed loop the tacho gen volt can not exceed 10 v cause in op amp unit at the max of +-10 v we get.

var errvlaue = math.subtract(refV,tachoVolt);///when motor starts err volt comes through refv-tachov formula in closed loop 
 

document.getElementById('tachoV').value =tachoVolt;
document.getElementById('errV').value = errvlaue;

}

///speed value and tacho gen voltage after providing brake
function speedBrake(){
	
var bv = document.getElementById('brakeposi').value;
	///since the rotor of dc motor rotates in between two maget or in a magnetic field emf will be induced,again in the rotating disc eddy currents will also be induced 
	///it will oppose the flux hence speed will be decreased,we don't have the data how much flux is generated or amount of eddy current. hence we used lab observation results.
	
if (document.getElementById('partchk').value == 2){	
document.getElementById('tachospeed').value = math.subtract(OLspeed,math.multiply(bv,195.311));///from lab test data the decrease in speed with increase in magnetic brake position is avg. 195.311
	
var tachoVolt = math.multiply(document.getElementById('tachospeed').value,0.00273932);///kg= tacho gen const from part-1 exp result
}

if (document.getElementById('partchk').value == 3){	
document.getElementById('tachospeed').value = math.subtract(CLspeed,math.multiply(bv,157.68));///from lab test data the decrease in speed with increase in magnetic brake position is avg. 157.68
	
var tachoVolt = math.multiply(document.getElementById('tachospeed').value,0.00273932);///tacho gen const from plot of cl speed control speed vs. tachoV  exp part-3 result=0.0014085125 .
}
	
document.getElementById('tachoV').value =tachoVolt;

}

function Wheel_SpeedUp(){
	
	var wheel = document.getElementById('rotor');	
	
	///for tacho const function motor speed increase
	if (document.getElementById('partchk').value == 1 && document.getElementById('Au_up').value >= 5){
		 document.getElementById('rotor').classList.add("rotateRotor");
		 wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";
		 rotation+=0.03;
		}
	////////////////////////////////////////////////////////////////////////////////
		
///for openloop speed function motor speed increase
	if (document.getElementById('partchk').value == 2 && Math.abs(document.getElementById('refV').value) >= 4.2){
		 document.getElementById('rotor').classList.add("rotateRotor");
		 wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";
		 rotation+=0.03;
		}
	////////////////////////////////////////////////////////////////////////////////
		
	//for closedloop speed function motor speed increase
	if (document.getElementById('partchk').value == 3 && Math.abs(document.getElementById('refV').value) >= 4.2){
		 document.getElementById('rotor').classList.add("rotateRotor");
		 wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";
		 rotation+=0.03;
		}
	////////////////////////////////////////////////////////////////////////////////		
		
}

function Wheel_SpeedDown(){
	
	var wheel = document.getElementById('rotor');	
	
	///for tacho const function motor speed decrease
	if(document.getElementById('partchk').value == 1 && document.getElementById('Au_up').value>=5 && document.getElementById('Au_up').value<10.1){		
	rotation-=0.03;
	wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";		 	
	}
	if (document.getElementById('partchk').value == 1 && document.getElementById('Au_up').value < 5){
		 document.getElementById('rotor').classList.remove("rotateRotor");
	} 
	/////////////////////////////////////////////////////////////////////////	
	
///for openloop speed function motor speed decrease
	if(document.getElementById('partchk').value == 2 && Math.abs(document.getElementById('refV').value)>=4.2 ){		
	rotation-=0.03;
	wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";		 	
	}
	if (document.getElementById('partchk').value == 2 && Math.abs(document.getElementById('refV').value) < 4.2){
		 document.getElementById('rotor').classList.remove("rotateRotor");
	} 
	/////////////////////////////////////////////////////////////////////////	
	
	///for closedloop speed function motor speed decrease
	if(document.getElementById('partchk').value == 3 && Math.abs(document.getElementById('refV').value)>=4.2){		
	rotation-=0.03;
	wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";		 	
	}
	if (document.getElementById('partchk').value == 3 && Math.abs(document.getElementById('refV').value) < 4.2){
		 document.getElementById('rotor').classList.remove("rotateRotor");
	} 
	/////////////////////////////////////////////////////////////////////////	
	
}

///moves magnet
var brake = 0;
function BrakeChange(){///increase
brake++;	
var magnet = document.getElementById('magnet_brake');	
var deg = -(8*brake);	
	
magnet.style.transform="rotateX("+deg+"deg)";
document.getElementById('brakeposi').stepUp(1);		
}


function BrakeChangerev(){///decrease
brake--;	
var magnet = document.getElementById('magnet_brake');	
var deg = -(8*brake);	
	
magnet.style.transform="rotateX("+deg+"deg)";	
document.getElementById('brakeposi').stepDown(1);		
}
 
 
function refresh(){
	
	if(document.getElementById('partchk').value==1){
	var Dtable= document.getElementById('myTable1');
	}
	if(document.getElementById('partchk').value==2 || document.getElementById('partchk').value==3){
	var Dtable= document.getElementById('myTable2');
	}
	
	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	arr =[];
	tabrowindex=0;
	dataPoints1=[];
	document.getElementById('plotbucket').style.display  = "none";	
	document.getElementById('part1_result').style.display  = "none";
	
	
}
 
///////////////////////////////////////////////////////////////////////////////Table Creation//////////////////////////////////////////////////////////////////////////////////////
 
 var tabrowindex = 0;
var arr = [];

var table;

var chart;


//------------------------------------------------- Table Creation -----------------------------------------------//
function createTable1() {//tachogen const


    arr[0] = tabrowindex+1 ;
    arr[1] = document.getElementById("tachoV").value;
    arr[2] = document.getElementById("tachospeed").value;
   
	
	table = document.getElementById("myTable1");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  


function createTable2() {///openloop speed & closed loop speed


    arr[0] = tabrowindex+1 ;
    arr[1] = document.getElementById("brakeposi").value;
    arr[2] = document.getElementById("refV").value;
    arr[3] = document.getElementById("errV").value;
	arr[4] = document.getElementById("tachoV").value;
	arr[5] = document.getElementById("tachospeed").value;
	
	
	
	table = document.getElementById("myTable2");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 6; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}    


  
 
function createTable() {
	
if(document.getElementById('partchk').value == 1){
createTable1();	
}	
if(document.getElementById('partchk').value == 2 || document.getElementById('partchk').value == 3){
createTable2();	
}	
	
	
	
}
  
/////////////////////////////////////////////////////////////////////Plot creation////////////////////////////////////////////////////////////////////////// 



	var y = new Array();
    var dataPoints1=[];
	
	
	function plot1(){
	 document.getElementById('plotbucket').style.display  = "block"; 
	 document.getElementById('chartContainer').style.display  = "block";
	 document.getElementById('result').style.display  = "block";
 
    var table1 = document.getElementById('myTable1');
    for (var tabrowindex1 = 1; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;

        dataPoints1.push({x: parseFloat((rwe1[1].innerHTML)), y: parseFloat(rwe1[2].innerHTML)});
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Speed N(rpm) Vs. Tacho generator voltage Vg(volts) Plot ",
	  fontSize: 20,
	  fontColor:"#C90923",
	  fontFamily: "times new roman",
      },
	  
	  axisX:
	  
	  {
        interlacedColor: "#AFEEF8",
        title: "voltage Vg(volts)"
      },
	  
	  
	  
	  
	  
    axisY: 
	      {// Y axis
            title: "Speed N(rpm)",
			
			//maximum:28,
        },
		
		
	data: [
      {        
        type: "line",
		color:"#09A2F9",
        dataPoints:dataPoints1
	
       },
       
      ]	
	});

	chart.render();
	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	} 
	
	
	function plot2(){
	 document.getElementById('plotbucket').style.display  = "block"; 
	 document.getElementById('chartContainer').style.display  = "block";
	 document.getElementById('result').style.display  = "block";
 
    var table1= document.getElementById('myTable2');
    for (var tabrowindex1 = 1; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;

        dataPoints1.push({x: parseFloat((rwe1[1].innerHTML)), y: parseFloat(rwe1[5].innerHTML)});
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Speed N(rpm) Vs. Braking Load(in Units) Plot ",
	  fontSize: 20,
	  fontColor:"#C90923",
	  fontFamily: "times new roman",
      },
	  
	  axisX:
	  
	  {
        interlacedColor: "#AFEEF8",
        title: "Braking Load(in Units)"
      },
	  
	  
	  
	  
	  
    axisY: 
	      {// Y axis
            title: "Speed N(rpm)",
			
			//maximum:28,
        },
		
		
	data: [
      {        
        type: "spline",
		color:"#09A2F9",
        dataPoints:dataPoints1
	
       },
       
      ]	
	});

	chart.render();
	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	} 
	

 function plot(){
	 
	if(document.getElementById('partchk').value == 1){
	plot1();
	document.getElementById('part1_result').style.display = "block";
	} 
	 
	if(document.getElementById('partchk').value == 2 || document.getElementById('partchk').value == 3 ){
	plot2();
	document.getElementById('part1_result').style.display = "none";
	}  
	 
	 
	 
 }
 
 	///part1_2_3
 
 function part1_2_3(){
	 
	window.location.assign("index.html");
	 
	 
 }
 
 ///part4_5
 
 function part4_5(){
	 
	window.location.assign("index_preAmp.html"); 
	 
	 
 }
 
 ///part6_7
 
 function part6_7(){
	 
	window.location.assign("index_positionControl.html"); 
	 
	 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 