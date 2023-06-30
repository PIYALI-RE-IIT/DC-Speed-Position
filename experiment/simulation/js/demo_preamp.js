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
            connectorStyle: { strokeWidth: 8, stroke: "#C50806" },
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
            connectorStyle: { strokeWidth: 10, stroke: "black" },
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
            connectorStyle: { strokeWidth: 10, stroke: "#55DEF6" },
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
        Connector: [ "Bezier", { curviness:-50 } ],
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
            e23 = prepare("bd23");
			
			
             //instance.connect({ source: e28, target: e38 });
			 
			 
			 //delete clicked connection
      instance.bind("click", function (conn, originalEvent) {
		  
           if ( confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?")) {////for clicking on a connection
               instance.deleteConnection(conn);			  
			         }
       }); 
		
  
    });
	
	
      document.getElementById("check").addEventListener("click", function () {
		 
		///preamp characteristics
		var correct_connections_1_4 = [
            {
                "source": "bd1",
                "target": "bd4"
            },
    
            {
                "source": "bd4",
                "target": "bd1"
            }
        ];
		var correct_connections_2_6 = [
            {
                "source": "bd2",
                "target": "bd6"
            },
    
            {
                "source": "bd6",
                "target": "bd2"
            }
        ];
		var correct_connections_3_16 = [///+15v
            {
                "source": "bd3",
                "target": "bd16"
            },
    
            {
                "source": "bd16",
                "target": "bd3"
            }
        ];
		var correct_connections_3_18 = [///-15v
            {
                "source": "bd3",
                "target": "bd18"
            },
    
            {
                "source": "bd18",
                "target": "bd3"
            }
        ];
		var correct_connections_1_17 = [
            {
                "source": "bd1",
                "target": "bd17"
            },
    
            {
                "source": "bd17",
                "target": "bd1"
            }
        ];
		var correct_connections_5_22 = [
            {
                "source": "bd5",
                "target": "bd22"
            },
    
            {
                "source": "bd22",
                "target": "bd5"
            }
        ];
		var correct_connections_7_16 = [
            {
                "source": "bd7",
                "target": "bd16"
            },
    
            {
                "source": "bd16",
                "target": "bd7"
            }
        ];
		var correct_connections_8_17 = [
            {
                "source": "bd8",
                "target": "bd17"
            },
    
            {
                "source": "bd17",
                "target": "bd8"
            }
        ];
		var correct_connections_9_18 = [
            {
                "source": "bd9",
                "target": "bd18"
            },
    
            {
                "source": "bd18",
                "target": "bd9"
            }
        ];
		
				
		       //a connection outside this will invalidate the circuit
        var allowed_connections = [
            
			
			
			{
                "source": "bd1",
                "target": "bd4"
            },
    
            {
                "source": "bd4",
                "target": "bd1"
            },
			{
                "source": "bd2",
                "target": "bd6"
            },
    
            {
                "source": "bd6",
                "target": "bd2"
            },
			{
                "source": "bd3",
                "target": "bd16"
            },
    
            {
                "source": "bd16",
                "target": "bd3"
            },
			{
                "source": "bd3",
                "target": "bd18"
            },
    
            {
                "source": "bd18",
                "target": "bd3"
            },
			
			{
                "source": "bd1",
                "target": "bd17"
            },
    
            {
                "source": "bd17",
                "target": "bd1"
            },
			{
                "source": "bd5",
                "target": "bd22"
            },
    
            {
                "source": "bd22",
                "target": "bd5"
            },
			{
                "source": "bd7",
                "target": "bd16"
            },
    
            {
                "source": "bd16",
                "target": "bd7"
            },
			{
                "source": "bd8",
                "target": "bd17"
            },
    
            {
                "source": "bd17",
                "target": "bd8"
            },
			{
                "source": "bd9",
                "target": "bd18"
            },
    
            {
                "source": "bd18",
                "target": "bd9"
            },
			
					 
        ];

        var actual_connections = instance.getAllConnections();

				
							
				var is_connected_1_4 = false;
				var is_connected_2_6 = false;
				var is_connected_3_16 = false;
				var is_connected_3_18 = false;
				var is_connected_1_17 = false;
				var is_connected_5_22 = false;
				var is_connected_7_16 = false;
				var is_connected_8_17 = false;
				var is_connected_9_18 = false;
				
				
				
        var unallowed_connection_present = false;
        var count =0; // counts number of connection


		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_4){
                is_connected_1_4 = correct_connections_1_4.find(function (conn) {
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

            if(!is_connected_2_6){
                is_connected_2_6 = correct_connections_2_6.find(function (conn) {
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

            if(!is_connected_3_16){
                is_connected_3_16 = correct_connections_3_16.find(function (conn) {
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

            if(!is_connected_3_18){
                is_connected_3_18 = correct_connections_3_18.find(function (conn) {
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

            if(!is_connected_1_17){
                is_connected_1_17 = correct_connections_1_17.find(function (conn) {
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

            if(!is_connected_5_22){
                is_connected_5_22 = correct_connections_5_22.find(function (conn) {
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

            if(!is_connected_7_16){
                is_connected_7_16 = correct_connections_7_16.find(function (conn) {
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

            if(!is_connected_8_17){
                is_connected_8_17 = correct_connections_8_17.find(function (conn) {
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

            if(!is_connected_9_18){
                is_connected_9_18 = correct_connections_9_18.find(function (conn) {
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
		
        
		 if (is_connected_1_4 && is_connected_2_6 && is_connected_3_16 && is_connected_1_17 && is_connected_5_22  && is_connected_7_16 && is_connected_8_17 && is_connected_9_18 && !is_connected_3_18 && !unallowed_connection_present ) {
			            
			document.getElementById('partchk').value = 4;
			alert('Right Connection\n Part-4 Pre amplifier Characteristics');
			document.getElementById('myTable3').style.visibility = "visible";
			}
			
		else if (is_connected_1_4 && is_connected_2_6 && is_connected_3_18 && is_connected_1_17 && is_connected_5_22  && is_connected_7_16 && is_connected_8_17 && is_connected_9_18 && !is_connected_3_16 && !unallowed_connection_present ) {
			            
			document.getElementById('partchk').value = 5;
			alert('Right Connection\n Part-4 Pre amplifier Characteristics');
			document.getElementById('myTable3').style.visibility = "visible";
			}	
			
			
			
		   
		else{
			
		alert('Wrong Connection\n Go through the procedure properly');
				
		}
		   
    });
});


	
	
	
	
	
	
	
	
	
	
	
	
	
	







