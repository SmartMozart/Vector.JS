<img alt="Vector.js" src="https://lh4.googleusercontent.com/ax4nwt3f5fLzLdpKjy9L0EmrtnlRQpz5-m4iZCVnGT5VeyJiU6o06JrQ8FbqOqdrJzdIo6GW_TeESHEkGFUS=w1920-h937" align="left" width="450">  

# *Vector.JS*

Vector is a javascript library that handles vector maths so you don't have to.

## Installation

Reference the library in your html file.

```html
<script type="text/javascript" src="vector.js"></script>
```

## 2D Vectors

***Functions:***
* **Vector2D**
* **Add**
* **Sub**
* **Mult**
* **Mag**
* **Unit**
* **Normal**
* **Dot**
* **Angle**


**Vector2D**(x, y)  
Creates a *2 dimensional* vector.

```javascript
let myVector1 = Vector2D(7, 12);
let myVector2 = Vector2D(5, 3);
```

Vector2D.**add**(Vector2D)  
*Adds* a 2D vector to another 2D vector.

```javascript
let c = myVector1.add(myVector2);
```

Output:

```javascript
c = {x:12, y:15}
```

Vector2D.**sub**(Vector2D)  
*Subtracts* a 2D vector from another 2D vector.

```javascript
let c = myVector1.sub(myVector2);
```

Output:

```javascript
c = {x:2, y:9}
```

Vector2D.**mult**(x)  
*Multiplies* a 2D vector by a *scalar* value.

```javascript
let c = myVector1.mult(5);
```

Output:

```javascript
c = {x:35, y:60}
```

Vector2D.**mag**()  
Returns the *magnitude* of a 2D vector.

```javascript
let c = myVector1.mag();
```

Output:

```javascript
c = 13.892443989449804
```

Vector2D.**unit**()  
Returns a 2D vector with the same angle but with a *magnitude of 1.*

```javascript
let c = myVector1.unit();
```

Output:

```javascript
c = {x:0.5038710255240862, y:0.8637789008984335}
```

Vector2D.**normal**()  
Returns a *perpendicular vector* with a unit value.

```javascript
let c = myVector1.normal();
```

Output:

```javascript
c = {x:-0.8637789008984335, y:0.5038710255240862}
```

Vector2D.**dot**()  
Returns the *dot product* of two 2D vectors.

```javascript
let c = myVector1.dot(myVector2);
```

Output:

```javascript
c = 71
```

Vector2D.**angle**(Vector2D)  
Returns the *angle between* the two 2D vectors in radians.

```javascript
let c = myVector1.angle(myVector2);
```

Output:

```javascript
c = 0.5023023780979529
```

## 3D Vectors

***Functions:***
* **Vector2D**
* **Add**
* **Sub**
* **Mult**
* **Mag**
* **Unit**
* **Dot**
* **Cross**
* **Angle**

**Vector3D**(x, y, z)  
Creates a *3 dimensional* vector.

```javascript
let myVector1 = Vector2D(1, 2, 3);
let myVector2 = Vector2D(4, 5, 6);
```

Vector3D.**add**(Vector3D)  
*Adds* a 3D vector to another 3D vector.

```javascript
let c = myVector1.add(myVector2);
```

Output:

```javascript
c = {x:5, y:7, z:9}
```

Vector3D.**sub**(Vector3D)  
*Subtracts* a 3D vector from another 3D vector.

```javascript
let c = myVector1.sub(myVector2);
```

Output:

```javascript
c = {x:-3, y:-3, z:-3}
```

Vector3D.**mult**(x)  
*Multiplies* a 3D vector by a *scalar* value.

```javascript
let c = myVector1.mult(5);
```

Output:

```javascript
c = {x:5, y:10, z:15}
```

Vector3D.**mag**()  
Returns the *magnitude* of a 3D vector.

```javascript
let c = myVector1.mag();
```

Output:

```javascript
c = 3.7416573867739413
```

Vector3D.**unit**()  
Returns a 3D vector with the same angle but with a *magnitude of 1.*

```javascript
let c = myVector1.unit();
```

Output:

```javascript
c = {x: 0.2672612419124244, y: 0.5345224838248488, z: 0.8017837257372732}
```

Vector3D.**dot**()  
Returns the *dot product* of two 3D vectors.

```javascript
let c = myVector1.dot(myVector2);
```

Output:

```javascript
c = 32
```

Vector3D.**cross**()  
Returns the *cross product* of two 3D vectors.

```javascript
let c = myVector1.cross(myVector2);
```

Output:

```javascript
c = {x:-3, y:6, z:-3}
```

Vector3D.**angle**(Vector3D)  
Returns the *angle between* the two 3D vectors in radians.

```javascript
let c = myVector1.angle(myVector2);
```

Output:

```javascript
c = 0.2257261285527342
```
