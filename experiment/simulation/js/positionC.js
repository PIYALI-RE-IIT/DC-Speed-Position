 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/ 



/////////////////////////////////////////////ALL FUNCTIONS FOR ROTATING KNOBS///////////////////////////////////
var angle1= 0,angle2= 0,rotation=0;

///knob1 increase ,used for finding tacho generator constant
function rotate1(){
	
	angle1++;
	var deg = angle1*20;
	
	var knob1= document.getElementById('knob1');
	//var wheel = document.getElementById('rotor');
	
	knob1.style.transform="rotate("+deg+"deg)";	
	document.getElementById('Au_up').stepUp(1);///always
	
	
	
	
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
	var deg = angle1*20;
	
	var knob1= document.getElementById('knob1');
	//var wheel = document.getElementById('rotor');
	
	knob1.style.transform="rotate("+deg+"deg)";	
	document.getElementById('Au_up').stepDown(1);///always	
	
		
	
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
	//var wheel = document.getElementById('rotor');
	
	knob2.style.transform="rotate("+deg+"deg)";
	document.getElementById('Au_down').stepUp(1);	
	
	
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
	//var wheel = document.getElementById('rotor');
	
	knob2.style.transform="rotate("+deg+"deg)";
	document.getElementById('Au_down').stepDown(1);	
	
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
	document.getElementById('arc_change').disabled = false;

	setTimeout(function(){
		document.getElementById('ammeter').src = "./images/amp_pointer2.jpg";	
		},20000)

	}

else if(document.getElementById('togsw').src.match("./images/on.png")){	
	document.getElementById('togsw').src = "./images/off.png";
	document.getElementById('powerled').src = "./images/groff.png";
	
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	document.getElementById('arc_change').disabled = true;
	
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


/*function Wheel_SpeedUp(){
	
	var wheel = document.getElementById('rotor');	
	
	///for tacho const function motor speed increase
	if (document.getElementById('partchk').value == 1 && document.getElementById('Au_up').value >= 5){
		 document.getElementById('rotor').classList.add("rotateRotor");
		 wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";
		 rotation+=0.03;
		}
	////////////////////////////////////////////////////////////////////////////////
		
///for openloop speed function motor speed increase
	if (document.getElementById('partchk').value == 2 && document.getElementById('refV').value >= 4.2){
		 document.getElementById('rotor').classList.add("rotateRotor");
		 wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";
		 rotation+=0.03;
		}
	////////////////////////////////////////////////////////////////////////////////
		
	//for closedloop speed function motor speed increase
	if (document.getElementById('partchk').value == 3 && document.getElementById('refV').value >= 4.2){
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
	if(document.getElementById('partchk').value == 2 && document.getElementById('refV').value>4.2 && document.getElementById('refV').value<=10.15){		
	rotation-=0.03;
	wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";		 	
	}
	if (document.getElementById('partchk').value == 2 && document.getElementById('refV').value < 4.2){
		 document.getElementById('rotor').classList.remove("rotateRotor");
	} 
	/////////////////////////////////////////////////////////////////////////	
	
	///for closedloop speed function motor speed decrease
	if(document.getElementById('partchk').value == 3 && document.getElementById('refV').value>4.2){		
	rotation-=0.03;
	wheel.style["-webkit-animation-duration"] = math.subtract(1,rotation)+"s";		 	
	}
	if (document.getElementById('partchk').value == 3 && document.getElementById('refV').value < 4.2){
		 document.getElementById('rotor').classList.remove("rotateRotor");
	} 
	/////////////////////////////////////////////////////////////////////////	
	
}*/

///moves protector
var arc = 0,deg1,deg2,misalignment;
function clkwise(){///increase
arc++;	
var pot1 = document.getElementById('ipot');	
var pot2 = document.getElementById('opot');

 deg1 = (10*arc);	
 
	
pot1.style.transform="rotate("+deg1+"deg)";

if(document.getElementById('Au_up').value >= 8){		
	Position_Control();	
	}
	
		
}


function anticlkwise(){///decrease
arc--;	

var pot1 = document.getElementById('ipot');	
var pot2 = document.getElementById('opot');


 deg1 = (10*arc);	

	
pot1.style.transform="rotate("+deg1+"deg)";
if(document.getElementById('Au_up').value >= 8){		
	Position_Control();	
	}
		
}

var Theta_in,Theta_out;

function Position_Control(){///Basically closed loop position control refer to pg no:293,kuo

	
var pot2 = document.getElementById('opot');
	
var k = 10.3913;///pre-amp gain
var kT = 0.0274;///motor torque const = kb = motor back emf const	
var kS = 0.1;///sensor gain const between theta and volt 30v = 300degree
var J = math.multiply(3.2284,math.pow(10,-6));/// moment of inertia of motor in kg.m^2
var b = math.multiply(3.5077,math.pow(10,-6));///motor viscous friction constant in N.m.second
var R = 4;///electric resistance in ohm
var L = math.multiply(2.75,math.pow(10,-6));///electric inductance in henry

Theta_in=deg1;

//////Now 2nd order equn acc to plant equn///////////////////////////////


var wn = math.sqrt(math.divide(math.multiply(k,kT,kS),math.multiply(R,J)));
console.log('wn='+wn);


var zeta = math.multiply(math.divide(1,math.multiply(2,wn)),math.divide(math.add(math.multiply(R,b),math.pow(kT,2)),math.multiply(R,J))) ;
console.log('zeta='+zeta);

for(var t = 0;t<=5;t++){

if(zeta>1){	
//var delta_output = parseFloat(Gain*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));

var sn2 = math.multiply(wn,t);
var sn1 =math.subtract(zeta,math.sqrt(math.subtract(math.pow(zeta,2),1)));
var epow = (math.multiply(sn1,sn2));
var epart = math.pow(math.e,-epow);

var sd = math.multiply(2,math.sqrt(math.subtract(math.pow(zeta,2),1)),sn1);

 var Theta_out = math.multiply(Theta_in,math.subtract(1,math.divide(epart,sd)));

console.log('Theta_out='+Theta_out);	
}
if(zeta<1){
	
Theta_out = parseFloat(Theta_in*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
console.log('Theta_out='+Theta_out);///actual output through math model			
}

}

///Theta out always coming same as theta in through math model, through lab test we have obtained avg misallignment ,appling so
///deg2 = Theta_out;///actual output through math model
//console.log('Theta_out='+Theta_out);

deg2 = math.multiply(Theta_out,0.87);///avg misalignment through slope = 0.87


pot2.style.transform="rotate("+deg2+"deg)";

//var misalignmentAct = math.subtract(Theta_in,deg2);	
	
 //misalignment = Math.abs(misalignmentAct);
	
	
}


function refresh(){
	
	/*if(document.getElementById('partchk').value==4){
	var Dtable= document.getElementById('myTable3');
	}*/
	
	var Dtable= document.getElementById('myTable4');
	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>1;i--){

	Dtable.deleteRow(i);
	}
	arr =[];
	tabrowindex=1;
	//dataPoints5=[];
	
	document.getElementById('plotbucket').style.display  = "none";	
	
	
	
}
 
////////////////////////////////////////////////////////////////////////////////Table Creation//////////////////////////////////////////////////////////////////////////////////////
 
 var tabrowindex =1;
var arr = [];

var table;

var chart;


//------------------------------------------------- Table Creation -----------------------------------------------//
function createTable5() {//position control


    arr[0] = tabrowindex;
    arr[1] = deg1;
    arr[2] = deg2;
    arr[3] = math.subtract(arr[1],arr[2]);
		
	
	table = document.getElementById("myTable4");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 4; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  


  
 

  
/////////////////////////////////////////////////////////////////////Plot creation////////////////////////////////////////////////////////////////////////// 



	/*var y = new Array();
    var dataPoints5=[];
	
	
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
	 
	 
	 
 }*/
 
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 