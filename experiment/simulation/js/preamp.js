 
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
	
	
	knob1.style.transform="rotate("+deg+"deg)";	
	document.getElementById('Au_up').stepUp(1);///always
	
	
	
	
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	document.getElementById('Au_up').value =0;
	
	angle1=0;
	return;
   }
    
 }
 
 ///knob1 decrease ,used for finding tacho generator constant
 function rotate2(){
	
	angle1--;
	var deg = angle1*2;
	
	var knob1= document.getElementById('knob1');
	
	
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
	var deg = angle2*10;
	
	var knob2= document.getElementById('knob2');
	
	
	knob2.style.transform="rotate("+deg+"deg)";
	document.getElementById('Au_down').stepUp(1);
	
	if(document.getElementById('partchk').value == 4){
	document.getElementById('IV').stepUp(1);
	}
	
	if(document.getElementById('partchk').value == 5){
	document.getElementById('IV').stepDown(1);
	}
	
	
   if( deg>150){
	alert('This is the highest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	document.getElementById('Au_down').value =0;
	document.getElementById('IV').value =0;
	angle2=0;
	return;
   }
    
 }
 
 ///knob2 decrease ,used for open loop speed control
 function rotate4(){
	
	angle2--;
	var deg = angle2*10;
	
	var knob2= document.getElementById('knob2');
	
	
	knob2.style.transform="rotate("+deg+"deg)";
	document.getElementById('Au_down').stepDown(1);	
	
	if(document.getElementById('partchk').value == 4){
	document.getElementById('IV').stepDown(1);
	}
	
	if(document.getElementById('partchk').value == 5){
	document.getElementById('IV').stepUp(1);
	}
	
	
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	document.getElementById('Au_down').value =0;
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
	
	setTimeout(function(){
		document.getElementById('ammeter').src = "./images/amp_pointer2.jpg";	
		},20000)
	
	}

else if(document.getElementById('togsw').src.match("./images/on.png")){	
	document.getElementById('togsw').src = "./images/off.png";
	document.getElementById('powerled').src = "./images/groff.png";
	
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	
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

 function preAmp_Char_3(){
	 
	 
	 
	var ip = document.getElementById('IV').value; 
	 
	var gain_slope = 10.3913;
	 
	var op3 = math.multiply(ip,gain_slope);
	var op4 = -0.023; 
	 
	document.getElementById('V03').value = op3; 
	document.getElementById('V04').value = op4;
		 
 }
 
 function preAmp_Char_4(){
	 
	 
	var ip = document.getElementById('IV').value; 
	 
	var gain_slope = -7.928;	 
	var op4 = math.multiply(ip,gain_slope);
	var op3 = -0.023; 
	 
	document.getElementById('V03').value = op3; 
	document.getElementById('V04').value = op4;
		 
 }
 function preAmp_Char(){
	 
	if(document.getElementById('partchk').value==4){ 
	preAmp_Char_3(); 
	} 
	 
	if(document.getElementById('partchk').value==5){ 
	preAmp_Char_4(); 
	} 
	  
 }
 

function refresh(){
	
	/*if(document.getElementById('partchk').value==4){
	var Dtable= document.getElementById('myTable3');
	}*/
	
	var Dtable= document.getElementById('myTable3');
	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>1;i--){

	Dtable.deleteRow(i);
	}
	arr =[];
	tabrowindex=1;
	dataPoints3=[];
	dataPoints4=[];
	document.getElementById('plotbucket').style.display  = "none";	
	
	
	
}
 
///////////////////////////////////////////////////////////////////////////////Table Creation//////////////////////////////////////////////////////////////////////////////////////
 
 var tabrowindex =1;
var arr = [];

var table;

var chart;


//------------------------------------------------- Table Creation -----------------------------------------------//
function createTable3() {//preamp gain


    arr[0] = tabrowindex;
    arr[1] = document.getElementById("IV").value;
    arr[2] = document.getElementById("V03").value;
    arr[3] = document.getElementById("V04").value;
	arr[4] = math.subtract(arr[3],arr[2]);
	
	table = document.getElementById("myTable3");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 5; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  



/////////////////////////////////////////////////////////////////////Plot creation ////////////////////////////////////////////////////////////////////////// 



	var y = new Array();
    var dataPoints3=[];
	var dataPoints4=[];
	
	function plot(){
	 document.getElementById('plotbucket').style.display  = "block"; 
	 document.getElementById('chartContainer').style.display  = "block";
	 document.getElementById('result').style.display  = "block";
 
    var table3 = document.getElementById('myTable3');
    for (var tabrowindex3 = 1; tabrowindex3 < table3.rows.length; tabrowindex3++) {
        var rwe3 = table3.rows[tabrowindex3].cells;

        dataPoints3.push({x: parseFloat((rwe3[1].innerHTML)), y: parseFloat(rwe3[2].innerHTML)});
		dataPoints4.push({x: parseFloat((rwe3[1].innerHTML)), y: parseFloat(rwe3[3].innerHTML)});
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Pre amplifier output voltage v0(3) vo(4)(v) Vs. Input voltage Vi(volts) Plot ",
	  fontSize: 20,
	  fontColor:"#C90923",
	  fontFamily: "times new roman",
      },
	  
	  axisX:
	  
	  {
        interlacedColor: "#AFEEF8",
        title: "Input voltage Vi(volts)"
      },
	  
	  
    axisY: [
	      {// Y axis
            title: "Vo(3) (v)",
			
			//maximum:28,
        },
		{// Y axis
            title: "Vo(4) (v)",
			
			//maximum:28,
        }
		],
	data: [
      {        
        type: "line",
		color:"#09A2F9",
		showInLegend: true,
		legendText: "Vo(3)",
        dataPoints:dataPoints3
	
       },
	   {        
        type: "line",
		color:"red",
		showInLegend: true,
		legendText: "Vo(4)",
        dataPoints:dataPoints4
	
       },
       
      ]	
	});

	chart.render();
	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
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
 
 
 
 
 
 
 
 
 
 

 
 
 