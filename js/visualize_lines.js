var globeRadius = 1000;
var vec3_origin = new THREE.Vector3(0,0,0);

function constrain(v, min, max){
	if( v < min )
		v = min;
	else
	if( v > max )
		v = max;
	return v;
}