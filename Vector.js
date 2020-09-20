function Vector2D(x, y) {
	return new _vect(x, y);
}
function _vect(x, y) {
	this.x = x;
	this.y = y;
	this.add = function(v) {
		return new _vect(this.x+v.x, this.y+v.y);
	}
	this.sub = function(v) {
		return new _vect(this.x-v.x, this.y-v.y);
	}
	this.mult = function(s) {
		return new _vect(this.x*s, this.y*s);
	}
	this.mag = function() {
		return Math.sqrt(this.x**2+this.y**2);
	}
	this.unit = function() {
		return new _vect(this.x/this.mag(), this.y/this.mag());
	}
	this.normal = function() {
		return new _vect(-this.y, this.x).unit();
	}
	this.dot = function(v) {
		return this.x*v.x+this.y*v.y;
	}
	this.angle = function(v) {
		return Math.acos(this.dot(v)/(this.mag()*v.mag()));
	}
}
function Vector3D(x, y, z) {
	return new _vect3d(x, y, z);
}
function _vect3d(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.add = function(v) {
		return new _vect3d(this.x+v.x, this.y+v.y, this.z+v.z);
	}
	this.sub = function(v) {
		return new _vect3d(this.x-v.x, this.y-v.y, this.z-v.z);
	}
	this.mult = function(s) {
		return new _vect3d(this.x*s, this.y*s, this.z*s);
	}
	this.mag = function() {
		return Math.sqrt(this.x**2+this.y**2+this.z**2);
	}
	this.unit = function() {
		return new _vect3d(this.x/this.mag(), this.y/this.mag(), this.z/this.mag());
	}
	this.dot = function(v) {
		return this.x*v.x+this.y*v.y+this.z*v.z;
	}
	this.angle = function(v) {
		return Math.acos(this.dot(v)/(this.mag()*v.mag()));
	}
}