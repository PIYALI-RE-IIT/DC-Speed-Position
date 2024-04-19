/* This  script file is edited by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/



jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
                var o = instance.getOffset(el, true),
                    o2 = instance.getOffset(el),
                    s = jsPlumb.getSize(el),
                    pxy = [e.pageX || e.clientX, e.pageY || e.clientY],
                    c = [pxy[0] - (o.left + (s[0] / 2)), pxy[1] - (o.top + (s[1] / 2))],
                    oo = [c[0] / s[0], c[1] / s[1]],
                    DIST = 350,
                    l = o2.left + (oo[0] * DIST),
                    t = o2.top + (oo[1] * DIST);

                var id = el.getAttribute("id");
                instance.animate(el, {left: l, top: t}, { duration: 350, easing: 'easeOutBack' });
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
	// for all live red connection//
        endpoint = {
            anchors: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "#C50806" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 100,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint);
					},
					///black wire
	endpoint_ground = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "black" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare_ground = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint_ground);
					},
					
			endpoint_blue = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "#55DEF6" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare_blue = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint_blue);
					},

					

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 162;
            var x = (0.2 * w) + Math.floor(Math.random() * (0.5 * w));
            var y = (0.2 * h) + Math.floor(Math.random() * (0.6 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "./images/littledot.png" } ],
        Connector: [ "Bezier", { curviness:-20 } ],
        Container: "canvas"
    });
	
	


    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("bd1"),            
            e2 = prepare("bd2"),
			e3 = prepare("bd3"),
            e4 = prepare_blue("bd4"),
			e5 = prepare_blue("bd5"),
			e6 = prepare("bd6"),
			e7 = prepare("bd7"),            
            e8 = prepare("bd8"),
			e9 = prepare("bd9"),
            e10 = prepare("bd10"),
			e11= prepare("bd11"),
			e12 = prepare("bd12"),
            e13 = prepare("bd13"),
			e14 = prepare("bd14"),
			e15= prepare("bd15"),
			e16 = prepare("bd16"),
            e17 = prepare("bd17"),            
            e18 = prepare("bd18"),
			e19 = prepare("bd19"),
            e20 = prepare("bd20"),
			e21= prepare("bd21"),
			e22 = prepare("bd22"),
            e23 = prepare("bd23"),
			e24 = prepare("bd24"),
			e25= prepare("bd25"),
			e26 = prepare("bd26"),
			e27 = prepare("bd27"),
			e28 = prepare_ground("bd28"),
			e29 = prepare("bd29"),
            e30 = prepare("bd30"),
			e31= prepare("bd31"),
			e32 = prepare("bd32"),
            e33 = prepare("bd33"),
			e34 = prepare("bd34"),
			e35= prepare("bd35"),
			e36 = prepare("bd36"),
			e37 = prepare("bd37"),
			e38= prepare_ground("bd38"),
			e39 = prepare("bd39"),
            e40 = prepare("bd40"),
			e41 = prepare("bd41"),
			e42= prepare("bd42"),
			e43 = prepare_ground("bd43");
			
			
             instance.connect({ source: e28, target: e38 });
			 //instance.connect({ source: e1, target: e13 });
			// instance.connect({ source: e2, target: e14 });
			 
			 //delete clicked connection
      instance.bind("click", function (conn, originalEvent) {
		  
           if ( confirm("Delete connection ?")) {////for clicking on a connection
               instance.deleteConnection(conn);			  
			         }
       }); 
		
  
    });
	
	
      document.getElementById("check").addEventListener("click", function () {
		  ///tacho gen const (part1)
        var correct_connections_1_30 = [
            {
                "source": "bd1",
                "target": "bd30"
            },

            {
                "source": "bd30",
                "target": "bd1"
            }
        ];

        var correct_connections_3_29 = [
            {
                "source": "bd3",
                "target": "bd29"
            },

            {
                "source": "bd29",
                "target": "bd3"
            }
        ];        

        var correct_connections_2_17 = [
            {
                "source": "bd2",
                "target": "bd17"
            },
    
            {
                "source": "bd17",
                "target": "bd2"
            }
        ];
		
		 var correct_connections_28_38 = [
            {
                "source": "bd28",
                "target": "bd38"
            },
    
            {
                "source": "bd38",
                "target": "bd28"
            }
        ];
		/////////common for part1 and part 2///////////
		var correct_connections_22_23 = [
            {
                "source": "bd22",
                "target": "bd23"
            },
    
            {
                "source": "bd23",
                "target": "bd22"
            }
        ];
		var correct_connections_24_26 = [
            {
                "source": "bd24",
                "target": "bd26"
            },
    
            {
                "source": "bd26",
                "target": "bd24"
            }
        ];
        var correct_connections_25_27 = [
            {
                "source": "bd25",
                "target": "bd27"
            },
    
            {
                "source": "bd27",
                "target": "bd25"
            }
        ];
		/////////////////////////////
		///speed control(part2)
		var correct_connections_4_11 = [
            {
                "source": "bd4",
                "target": "bd11"
            },
    
            {
                "source": "bd11",
                "target": "bd4"
            }
        ];
		var correct_connections_5_8 = [
            {
                "source": "bd5",
                "target": "bd8"
            },
    
            {
                "source": "bd8",
                "target": "bd5"
            }
        ];
		var correct_connections_6_12 = [
            {
                "source": "bd6",
                "target": "bd12"
            },
    
            {
                "source": "bd12",
                "target": "bd6"
            }
        ];
		var correct_connections_9_39 = [
            {
                "source": "bd9",
                "target": "bd39"
            },
    
            {
                "source": "bd39",
                "target": "bd9"
            }
        ];
		var correct_connections_15_17 = [
            {
                "source": "bd15",
                "target": "bd17"
            },
    
            {
                "source": "bd17",
                "target": "bd15"
            }
        ];
		var correct_connections_10_29 = [
            {
                "source": "bd10",
                "target": "bd29"
            },
    
            {
                "source": "bd29",
                "target": "bd10"
            }
        ];
		var correct_connections_30_11 = [
            {
                "source": "bd30",
                "target": "bd11"
            },
    
            {
                "source": "bd11",
                "target": "bd30"
            }
        ];
		var correct_connections_12_31 = [
            {
                "source": "bd12",
                "target": "bd31"
            },
    
            {
                "source": "bd31",
                "target": "bd12"
            }
        ];
		var correct_connections_41_43 = [
            {
                "source": "bd41",
                "target": "bd43"
            },
    
            {
                "source": "bd43",
                "target": "bd41"
            }
        ];
		var correct_connections_43_30 = [
            {
                "source": "bd43",
                "target": "bd30"
            },
    
            {
                "source": "bd30",
                "target": "bd43"
            }
        ];
				
		       //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "bd1",
                "target": "bd30"
            },
    
            {
                "source": "bd30",
                "target": "bd1"
            },
            
            {
                "source": "bd3",
                "target": "bd29"
            },

            {
                "source": "bd29",
                "target": "bd3"
            },

            {
                "source": "bd2",
                "target": "bd17"
            },
    
            {
                "source": "bd17",
                "target": "bd2"
            },
			
			{
                "source": "bd28",
                "target": "bd38"
            },
    
            {
                "source": "bd38",
                "target": "bd28"
            },
			{
                "source": "bd22",
                "target": "bd23"
            },
    
            {
                "source": "bd23",
                "target": "bd22"
            },
			{
                "source": "bd24",
                "target": "bd26"
            },
    
            {
                "source": "bd26",
                "target": "bd24"
            },
			{
                "source": "bd25",
                "target": "bd27"
            },
    
            {
                "source": "bd27",
                "target": "bd25"
            },
			
			{
                "source": "bd4",
                "target": "bd11"
            },
    
            {
                "source": "bd11",
                "target": "bd4"
            },
			{
                "source": "bd5",
                "target": "bd8"
            },
    
            {
                "source": "bd8",
                "target": "bd5"
            },
			{
                "source": "bd6",
                "target": "bd12"
            },
    
            {
                "source": "bd12",
                "target": "bd6"
            },
			{
                "source": "bd9",
                "target": "bd39"
            },
    
            {
                "source": "bd39",
                "target": "bd9"
            },
			{
                "source": "bd15",
                "target": "bd17"
            },
    
            {
                "source": "bd17",
                "target": "bd15"
            },
			{
                "source": "bd10",
                "target": "bd29"
            },
    
            {
                "source": "bd29",
                "target": "bd10"
            },
			{
                "source": "bd30",
                "target": "bd11"
            },
    
            {
                "source": "bd11",
                "target": "bd30"
            },
			{
                "source": "bd12",
                "target": "bd31"
            },
    
            {
                "source": "bd31",
                "target": "bd12"
            },
			{
                "source": "bd41",
                "target": "bd43"
            },
    
            {
                "source": "bd43",
                "target": "bd41"
            },
			{
                "source": "bd43",
                "target": "bd30"
            },
    
            {
                "source": "bd30",
                "target": "bd43"
            },
			
			
			
					 
        ];

        var actual_connections = instance.getAllConnections();

				var is_connected_1_30 = false;
				var is_connected_3_29 = false;
				var is_connected_2_17 = false;
				var is_connected_28_38 = false;
				var is_connected_22_23 = false;
				var is_connected_24_26 = false;
				var is_connected_25_27 = false;
				
				var is_connected_4_11 = false;
				var is_connected_5_8 = false;
				var is_connected_6_12 = false;
				var is_connected_9_39 = false;
				var is_connected_15_17 = false;
				var is_connected_10_29 = false;
				var is_connected_30_11 = false;
				var is_connected_12_31 = false;
				var is_connected_41_43 = false;
				var is_connected_43_30 = false;
				
				
				
				
        var unallowed_connection_present = false;
        var count =0; // counts number of connection


        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_30){
                is_connected_1_30 = correct_connections_1_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false

        });

        //checking for 3_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_3_29){
                is_connected_3_29 = correct_connections_3_29.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_17){
                is_connected_2_17 = correct_connections_2_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_28_38){
                is_connected_28_38 = correct_connections_28_38.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_22_23){
                is_connected_22_23 = correct_connections_22_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_24_26){
                is_connected_24_26 = correct_connections_24_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });	
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_25_27){
                is_connected_25_27 = correct_connections_25_27.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_11){
                is_connected_4_11 = correct_connections_4_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_8){
                is_connected_5_8 = correct_connections_5_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_12){
                is_connected_6_12 = correct_connections_6_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_39){
                is_connected_9_39 = correct_connections_9_39.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_15_17){
                is_connected_15_17 = correct_connections_15_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_29){
                is_connected_10_29 = correct_connections_10_29.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_30_11){
                is_connected_30_11 = correct_connections_30_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_12_31){
                is_connected_12_31 = correct_connections_12_31.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_41_43){
                is_connected_41_43 = correct_connections_41_43.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_43_30){
                is_connected_43_30 = correct_connections_43_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		
		
			///tachogen const	
		
        if (is_connected_28_38 && is_connected_1_30 && is_connected_3_29 && is_connected_2_17 && is_connected_22_23 && is_connected_24_26  && is_connected_25_27 && !is_connected_4_11 && !is_connected_5_8 && !is_connected_6_12 && !is_connected_9_39 && !is_connected_15_17 && !is_connected_10_29 && !is_connected_30_11 && !is_connected_12_31 && !is_connected_41_43 && !is_connected_43_30 && !unallowed_connection_present ) {
			            
			document.getElementById('partchk').value = 1;
			alert('Right Connection\n Part-1 Find Tacho generator constant');
			document.getElementById('myTable1').style.visibility = "visible";
			document.getElementById('myTable2').style.visibility = "hidden";
			}
			
		else if (is_connected_4_11 && is_connected_5_8 && is_connected_6_12 && is_connected_15_17 && is_connected_10_29 && is_connected_30_11 && is_connected_12_31 && is_connected_41_43 && is_connected_43_30 && is_connected_28_38 && !is_connected_1_30 && !is_connected_3_29 && !is_connected_2_17 && is_connected_22_23 && is_connected_24_26  && is_connected_25_27 && !is_connected_9_39  &&  !unallowed_connection_present ) {
			            
			document.getElementById('partchk').value = 2;
			alert('Right Connection\n Part-2 Open loop speed control');
			document.getElementById('myTable2').style.visibility = "visible";
			document.getElementById('myTable1').style.visibility = "hidden";
			}
		else if (is_connected_4_11 && is_connected_5_8 && is_connected_6_12 && is_connected_9_39 && is_connected_15_17 && is_connected_10_29 && is_connected_30_11 && is_connected_12_31 && is_connected_41_43 && is_connected_43_30 && is_connected_28_38 && !is_connected_1_30 && !is_connected_3_29 && !is_connected_2_17 && is_connected_22_23 && is_connected_24_26  && is_connected_25_27  && !unallowed_connection_present ) {
			            
			document.getElementById('partchk').value = 3;
			alert('Right Connection\n Part-3 Closed loop speed control');
			document.getElementById('myTable2').style.visibility = "visible";
			document.getElementById('myTable1').style.visibility = "hidden";
			}	
			
			
		   
		else{
			
		alert('Wrong Connection\n Go through the procedure properly');
				
		}
		   
    });
});


	
	
	
	
	
	
	
	
	
	
	
	
	
	







