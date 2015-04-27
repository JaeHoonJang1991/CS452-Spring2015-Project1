var gl;
var points = [];
var PointX = 0;
var PointY = 0.1;
window.onload = function init()
{
var canvas = document.getElementById( "gl-canvas" );
gl = WebGLUtils.setupWebGL( canvas );
if ( !gl ) { alert( "WebGL isn't available" ); }
//
// Configure WebGL
//
gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 0.82, 0.01, 1.0 );
	
	//document.onkeydown = handleKeyDown;
    //document.onkeyup = handleKeyUp;
// Load shaders and initialize attribute buffers

	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	var CX = 0;
	var CY = 0;
	var vertices2 = new Float32Array([
		0,0,
		0.04,0,
		0,0.01
	]); 	
	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices2, gl.STATIC_DRAW );
	num = 3;
		
    // Associate our shader variables with our data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition ); 
	
// Load the data into the GPU
// Associate our shader variables with our data buffer
	render(num);

};

function render(num) {
	gl.clear( gl.COLOR_BUFFER_BIT );
	gl.drawArrays( gl.TRIANGLES, 0, num );
}
