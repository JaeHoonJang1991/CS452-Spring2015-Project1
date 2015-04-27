var gl;
var points = [];
//Star
var PointX = 0;
var PointY = 0.1;
//make it one random
var once = 1;

//C letter
var CX = 0;
var CY = 0;
var Ceat = 0;
//L letter
var LX = 0;
var LY = 0;
var Leat = 0;
//A letter
var AX = 0;
var AY = 0;
var Aeat = 0;
//R letter
var RX = 0;
var RY = 0;
var Reat = 0;
//K letter
var KX = 0;
var KY = 0;
var Keat = 0;
//S letter
var SX = 0;
var SY = 0;
var Seat = 0;
//O letter
var OX = 0;
var OY = 0;
var Oeat = 0;
//N letter
var NX = 0;
var NY = 0;
var Neat = 0;

var Score = 0;
var OrderCounter = 0;

window.onload = function init()
{
var canvas = document.getElementById( "gl-canvas" );
gl = WebGLUtils.setupWebGL( canvas );
if ( !gl ) { alert( "WebGL isn't available" ); }
//
// Configure WebGL
//
gl.viewport( 0, 0, canvas.width, canvas.height );
	//gl.clearColor( 1.0, 0.82, 0.01, 1.0 );
	
	//document.onkeydown = handleKeyDown;
    //document.onkeyup = handleKeyUp;
// Load shaders and initialize attribute buffers

	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );
	
	 window.onkeydown = function( event ) {
		/*gl.clearColor( 0.04, 0.35, 0.27, 1.0 );
		var verticesBack = new Float32Array([
			1,1,
			-1,1,
			1,-1,
			
			-1,-1,
			1,-1,
			-1,1
		]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesBack, gl.STATIC_DRAW );
		num = 6;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
	*/
//==========================================================================		
		gl.clearColor( 1.0, 0.82, 0.01, 1.0 );
        var key = String.fromCharCode(event.keyCode);
        switch( key ) {
          case 'W':
			if(1 > PointY+0.1){
				PointY = PointY+0.1+0.001;
			}
			PointY=(Math.floor(PointY*10))/10;
			console.log("W");
			console.log(PointY);
			Score = Score - 10;
            break;

          case 'S':
			if(-1.1 < PointY-0.1){
				PointY = PointY-0.1+0.001;
			}
			PointY=(Math.floor(PointY*10))/10;
			console.log("S");
			console.log(PointY);
			Score = Score - 10;
            break;

          case 'D':
			if(1 > PointX+0.1){
				PointX = PointX+0.1+0.001;
			}
			//console.log(PointX);
			PointX=(Math.floor(PointX*10))/10;
			console.log("D");
			console.log(PointX);
			Score = Score - 10;
            break;
			
          case 'A':
			if(-1.1 < PointX-0.1){
				PointX = PointX-0.1+0.001;
			}
			PointX=(Math.floor(PointX*10))/10;
			console.log("A");
			console.log(PointX);
			Score = Score - 10;
            break;
			
          //case '1':
          //  PointX=0;
		//	PointY=0.1;
        //    break;
        }
	
	var num = 0;
	
	 var vertices1 = new Float32Array([
		PointX+0.05,	PointY,//0.1,0.2,
		PointX+0.1, 	PointY+0.08,//0,0.05,
		PointX+0.00, 	PointY+0.08,//0.2,0.05,
		
		PointX+0.05, 	PointY+0.1,//0.1,0,
		PointX+0, 		PointY+0.02,//0.2,0.15,
		PointX+0.1, 	PointY+0.02//0,0.15
	]);
	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices1, gl.STATIC_DRAW );
	num = 6;
		
    // Associate our shader variables with our data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition ); 
	
// Load the data into the GPU
// Associate our shader variables with our data buffer
	render(num);
	
//================================================================================
	
	if(once == 1){
		CX = ((Math.floor(Math.random()*20))-10)/10;
		CY = ((Math.floor(Math.random()*20))-10)/10;
		LX = ((Math.floor(Math.random()*20))-10)/10;
		LY = ((Math.floor(Math.random()*20))-10)/10;
		AX = ((Math.floor(Math.random()*20))-10)/10;
		AY = ((Math.floor(Math.random()*20))-10)/10;
		RX = ((Math.floor(Math.random()*20))-10)/10;
		RY = ((Math.floor(Math.random()*20))-10)/10;
		KX = ((Math.floor(Math.random()*20))-10)/10;
		KY = ((Math.floor(Math.random()*20))-10)/10;
		SX = ((Math.floor(Math.random()*20))-10)/10;
		SY = ((Math.floor(Math.random()*20))-10)/10;
		OX = ((Math.floor(Math.random()*20))-10)/10;
		OY = ((Math.floor(Math.random()*20))-10)/10;
		NX = ((Math.floor(Math.random()*20))-10)/10;
		NY = ((Math.floor(Math.random()*20))-10)/10;
	}

//=================================================================================	
	
	if(Ceat == 0){
		var verticesC = new Float32Array([
			CX+0.02,CY+0,
			CX+0.1,	CY+0.02,
			CX+0,CY+0.02,
			
			CX+0.02,CY+0,
			CX+0.1,	CY+0,
			CX+0.1,	CY+0.02,
			
			CX+0,	CY+0.02,
			CX+0.02,CY+0.02,
			CX+0.02,CY+0.08,
			
			CX+0,	CY+0.02,
			CX+0.02,CY+0.08,
			CX+0,CY+0.08,
			
			CX+0,	CY+0.08,
			CX+0.1,	CY+0.08,
			CX+0.02,CY+0.1,
			
			CX+0.02,CY+0.1,
			CX+0.1,	CY+0.08,
			CX+0.1,	CY+0.1
		]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesC, gl.STATIC_DRAW );
		num = 18;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
		if (CX == PointX){
				console.log("got CX");
			if (CY == PointY){
				Ceat = 1;
				if (OrderCounter == 0){
					Score = Score + 1000;
				}
				OrderCounter = OrderCounter + 1;
				console.log("got CY");
			}
		}
		
	}

//=================================================================================	
	
	if(Leat == 0){
		var verticesL = new Float32Array([
			LX+0,	LY+0,
			LX+0,	LY+0.1,
			LX+0.02,LY+0.02,
			
			LX+0,	LY+0,
			LX+0.1,	LY+0,
			LX+0.02,LY+0.02,
			
			LX+0.02,LY+0.02,
			LX+0.1,	LY+0,
			LX+0.1,	LY+0.02,
			
			LX+0.02,LY+0.02,
			LX+0.02,LY+0.1,
			LX+0,	LY+0.1
		]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesL, gl.STATIC_DRAW );
		num = 12;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
		if (LX == PointX){
				console.log("got LX");
			if (LY == PointY){
				Leat = 1;
				if (OrderCounter == 1){
					Score = Score + 1000;
				}
				OrderCounter = OrderCounter + 1;
				console.log("got LY");
			}
		}
		
	}
	
//=================================================================================	
	
	if(Aeat == 0){
		var verticesA = new Float32Array([
			AX+0,	AY+0,
			AX+0.02,AY+0,
			AX+0,	AY+0.06,
			
			AX+0.08,AY+0,
			AX+0.1,	AY+0,
			AX+0.1,	AY+0.06,
			
			AX+0.02,AY+0,
			AX+0.02,AY+0.06,
			AX+0,	AY+0.06,
			
			AX+0.08,AY+0,
			AX+0.1,	AY+0.06,
			AX+0.08,AY+0.06,
			
			AX+0.02,AY+0.02,
			AX+0.08,AY+0.02,
			AX+0.02,AY+0.04,
			
			AX+0.08,AY+0.02,
			AX+0.08,AY+0.04,
			AX+0.02,AY+0.04,
			
			AX+0,	AY+0.06,
			AX+0.02,AY+0.06,
			AX+0.04,AY+0.1,
			
			AX+0.02,AY+0.06,
			AX+0.04,AY+0.08,
			AX+0.04,AY+0.1,
			
			AX+0.08,AY+0.06,
			AX+0.06,AY+0.1,
			AX+0.06,AY+0.08,
			
			AX+0.08,AY+0.06,
			AX+0.1,	AY+0.06,
			AX+0.06,AY+0.1,
			
			AX+0.04,AY+0.08,
			AX+0.06,AY+0.08,
			AX+0.04,AY+0.1,
			
			AX+0.06,AY+0.08,
			AX+0.06,AY+0.1,
			AX+0.04,AY+0.1
			
		]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesA, gl.STATIC_DRAW );
		num = 36;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
		if (AX == PointX){
				console.log("got AX");
			if (AY == PointY){
				Aeat = 1;
				if (OrderCounter == 2){
					Score = Score + 1000;
				}
				OrderCounter = OrderCounter + 1;
				console.log("got AY");
			}
		}
		
	}
		
//=================================================================================	
	
	if(Reat == 0){
		var verticesR = new Float32Array([
			RX+0,	RY+0,
			RX+0.02,RY+0,
			RX+0,	RY+0.1,
			
			RX+0.02,RY+0,
			RX+0.02,RY+0.1,
			RX+0,	RY+0.1,
			
			RX+0.08,RY+0,
			RX+0.08,RY+0.04,
			RX+0.06,RY+0.04,
			
			RX+0.08,RY+0,
			RX+0.1,	RY+0,
			RX+0.08,RY+0.04,
			
			RX+0.02,RY+0.04,
			RX+0.08,RY+0.04,
			RX+0.02,RY+0.06,
			
			RX+0.08,RY+0.04,
			RX+0.1,	RY+0.06,
			RX+0.02,RY+0.06,
			
			RX+0.08,RY+0.06,
			RX+0.1,	RY+0.06,
			RX+0.08,RY+0.08,
			
			RX+0.1,	RY+0.06,
			RX+0.1,	RY+0.08,
			RX+0.08,RY+0.08,
			
			RX+0.02,RY+0.08,
			RX+0.1,	RY+0.08,
			RX+0.08,RY+0.1,
			
			RX+0.02,RY+0.08,
			RX+0.08,RY+0.1,
			RX+0.02,RY+0.1
		]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesR, gl.STATIC_DRAW );
		num = 30;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
		if (RX == PointX){
				console.log("got RX");
			if (RY == PointY){
				Reat = 1;
				if (OrderCounter == 3){
					Score = Score + 1000;
				}
				OrderCounter = OrderCounter + 1;
				console.log("got RY");
			}
		}
		
	}
	
//=================================================================================	
	
	if(Keat == 0){
		var verticesK = new Float32Array([
			KX+0,	KY+0,
			KX+0.02,KY+0.04,
			KX+0,	KY+0.05,
			
			KX+0,	KY+0,
			KX+0.02,KY+0,
			KX+0.02,KY+0.04,
			
			KX+0.08,KY+0,
			KX+0.1,	KY+0.02,
			KX+0,	KY+0.05,
			
			KX+0.1,	KY+0.02,
			KX+0.04,KY+0.05,
			KX+0,	KY+0.05,
			
			KX+0,	KY+0.05,
			KX+0.04,KY+0.05,
			KX+0.1,	KY+0.08,
			
			KX+0,	KY+0.05,
			KX+0.1,	KY+0.08,
			KX+0.08,KY+0.1,
			
			KX+0.02,KY+0.06,
			KX+0.02,KY+0.1,
			KX+0,	KY+0.1,
			
			KX+0,	KY+0.05,
			KX+0.02,KY+0.06,
			KX+0,	KY+0.1
			]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesK, gl.STATIC_DRAW );
		num = 24;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
		if (KX == PointX){
				console.log("got KX");
			if (KY == PointY){
				Keat = 1;
				if (OrderCounter == 4){
					Score = Score + 1000;
				}
				OrderCounter = OrderCounter + 1;
				console.log("got KY");
			}
		}
		
	}
	
//=================================================================================	
	
	if(Seat == 0){
		var verticesS = new Float32Array([
			SX+0.02,SY+0,
			SX+0.1,	SY+0.02,
			SX+0,	SY+0.02,
		
			SX+0.02,SY+0,
			SX+0.08,SY+0,
			SX+0.1,	SY+0.02,
			
			SX+0.1,	SY+0.02,
			SX+0.08,SY+0.04,
			SX+0.08,SY+0.02,
			
			SX+0.1,	SY+0.02,
			SX+0.1,	SY+0.04,
			SX+0.08,SY+0.04,
			
			SX+0.1,	SY+0.04,
			SX+0,	SY+0.06,
			SX+0.02,SY+0.04,
			
			SX+0.1,	SY+0.04,
			SX+0.08,SY+0.06,
			SX+0,	SY+0.06,
			
			SX+0.02,SY+0.06,
			SX+0,	SY+0.08,
			SX+0,	SY+0.06,
			
			SX+0.02,SY+0.06,
			SX+0.02,SY+0.08,
			SX+0,	SY+0.08,
			
			SX+0,	SY+0.08,
			SX+0.08,SY+0.1,
			SX+0.02,SY+0.1,
			
			SX+0,	SY+0.08,
			SX+0.1,	SY+0.08,
			SX+0.08,SY+0.1
			
		]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesS, gl.STATIC_DRAW );
		num = 30;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
		if (SX == PointX){
				console.log("got SX");
			if (SY == PointY){
				Seat = 1;
				if (OrderCounter == 5){
					Score = Score + 1000;
				}
				OrderCounter = OrderCounter + 1;
				console.log("got SY");
			}
		}
		
	}
	
//=================================================================================	
	
	if(Oeat == 0){
		var verticesO = new Float32Array([
			OX+0.1,	OY+0,
			OX+0.02,OY+0.02,
			OX+0,	OY+0,
			
			OX+0.1,	OY+0,
			OX+0.08,OY+0.02,
			OX+0.02,OY+0.02,
			
			OX+0.1,	OY+0,
			OX+0.08,OY+0.08,
			OX+0.08,OY+0.02,
			
			OX+0.1,	OY+0,
			OX+0.1,	OY+0.1,
			OX+0.08,OY+0.08,
			
			OX+0,	OY+0.1,
			OX+0,	OY+0,
			OX+0.02,OY+0.02,
			
			OX+0,	OY+0.1,
			OX+0.02,OY+0.02,
			OX+0.02,OY+0.08,
			
			OX+0,	OY+0.1,
			OX+0.02,OY+0.08,
			OX+0.08,OY+0.08,
			
			OX+0,	OY+0.1,
			OX+0.08,OY+0.08,
			OX+0.1,	OY+0.1,
		]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesO, gl.STATIC_DRAW );
		num = 24;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
		if (OX == PointX){
				console.log("got OX");
			if (OY == PointY){
				Oeat = 1;
				if (OrderCounter == 6){
					Score = Score + 1000;
				}
				OrderCounter = OrderCounter + 1;
				console.log("got OY");
			}
		}
		
	}
	
//=================================================================================	
	
	if(Neat == 0){
		var verticesN = new Float32Array([
			NX+0,NY+0,
			NX+0.02,NY+0,
			NX+0,NY+0.1,
			
			NX+0.02,NY+0,
			NX+0.02,NY+0.1,
			NX+0,	NY+0.1,
			
			NX+0.02,NY+0.1,
			NX+0.02,NY+0.08,
			NX+0.08,NY+0,
			
			NX+0.02,NY+0.1,
			NX+0.08,NY+0,
			NX+0.08,NY+0.02,
			
			NX+0.1,	NY+0,
			NX+0.08,NY+0.1,
			NX+0.08,NY+0,
			
			NX+0.1,NY+0,
			NX+0.1,	NY+0.1,
			NX+0.08,	NY+0.1
		]);
		
		
		// Load the data into the GPU
		var bufferId = gl.createBuffer();
		gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
		gl.bufferData( gl.ARRAY_BUFFER, verticesN, gl.STATIC_DRAW );
		num = 18;
			
		// Associate our shader variables with our data buffer
		var vPosition = gl.getAttribLocation( program, "vPosition" );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition ); 
		render(num)
		if (NX == PointX){
				console.log("got NX");
			if (NY == PointY){
				Neat = 1;
				if (OrderCounter == 7){
					Score = Score + 1000;
				}
				OrderCounter = OrderCounter + 1;
				console.log("got NY");
			}
		}
		
	}
		
	
	
	
	//console.log(PointX);
	//console.log("hello");
	// console.log(CX*100 + " = " +(Math.floor(PointX*100)));
	// console.log(CY*100 + " = " +(Math.floor(PointY*100)));
	// console.log("Ceat = " + Ceat);
	// console.log("CX = " + CX + " CY = " + CY);
	// console.log("LX = " + LX + " LY = " + LY);
	// console.log("AX = " + AX + " AY = " + AY);
	// console.log("RX = " + RX + " CY = " + RY);
	// console.log("KX = " + KX + " KY = " + KY);
	// console.log("SX = " + SX + " SY = " + SY);
	// console.log("OX = " + OX + " OY = " + OY);
	// console.log("NX = " + NX + " NY = " + NY);
	console.log("Score = " + Score);
	console.log("OrderCounter = " + OrderCounter);
	
	once = 0;
};
};

function render(num) {
	//gl.clear( gl.COLOR_BUFFER_BIT );
	gl.drawArrays( gl.TRIANGLES, 0, num );
}
