let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
function Sqrt(a){let b;b=Math.sqrt(a);return b;};  
function DrawPoint(x,y,color,size)
	{	
		
		//context.lineWidth = 3;
		//context.strokeStyle = color;
		context.fillStyle = color;
		context.fillRect(x-1*size, y-1*size,1*size,1*size);
		///context.lineTo(x,y);
	};
function DrawLine(x,y,x_1,y_1,color)
	{
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = color;
	context.moveTo(x, y);
	context.lineTo(x_1, y_1);
	context.stroke();
	};
function DrawPoint3D(x,y,z,size,scale,color)
{
	DrawPoint(7500+y*scale*Math.cos(7*Math.PI/6)+x*scale*Math.cos(11*Math.PI/6),7500-z*scale-y*scale*Math.sin(7*Math.PI/6)-x*scale*Math.sin(11*Math.PI/6),color,size);
	return [7500+y*scale*Math.cos(7*Math.PI/6)+x*scale*Math.cos(11*Math.PI/6),7500-z*scale-y*scale*Math.sin(7*Math.PI/6)-x*scale*Math.sin(11*Math.PI/6)];
};	

function DrawLine3D(x,y,z,x_1,y_1,z_1)
{
	let XY1=[];let XY2=[];let Z=[];Z[0]=[];Z[1]=[];
	XY1=DrawPoint3D(x,y,z,1,1);
	XY2=DrawPoint3D(x_1,y_1,z_1,1,1);
	DrawLine(XY1[0],XY1[1],XY2[0],XY2[1],'gray');
	Z[0][0]=XY1[0];Z[0][1]=XY1[1];Z[1][0]=XY2[0]-XY1[0];
	Z[1][1]=XY2[1]-XY1[1];
	return Z;
};
function DrawPoint4D(x,y,z,w,color,scale,size)
	{
		let AngleCos1;let AngleCos2;let AngleSin1;let AngleSin2;
		
		DrawPoint(7500+x*scale*Math.cos(-Math.PI/6)+y*scale*Math.cos(7*Math.PI/6)+z*scale*Math.cos(Math.PI/3)+w*scale*Math.cos(2*Math.PI/3),7500-x*scale*Math.sin(-Math.PI/6)-y*scale*Math.sin(7*Math.PI/6)-z*scale*Math.sin(Math.PI/3)-w*scale*Math.sin(2*Math.PI/3),color,size);
		return [7500+x*scale*Math.cos(-Math.PI/6)+y*scale*Math.cos(7*Math.PI/6)+z*scale*Math.cos(Math.PI/3)+w*scale*Math.cos(2*Math.PI/3),7500-x*scale*Math.sin(-Math.PI/6)-y*scale*Math.sin(7*Math.PI/6)-z*scale*Math.sin(Math.PI/3)-w*scale*Math.sin(2*Math.PI/3)];
	};
function DrawLine4D(x,y,z,w,x_1,y_1,z_1,w_1,color)
{
	let XY1=[];let XY2=[];
	XY1=DrawPoint4D(x,y,z,w,'gray',30,1);
	XY2=DrawPoint4D(x_1,y_1,z_1,w_1,'gray',30,1);
	DrawLine(XY1[0],XY1[1],XY2[0],XY2[1],color);

};
	
	
function ScalarMultiplicationVector(x,vector)
{
	let i=0,result=[];
	while(i<vector.length)
	{
		result[i]=x*vector[i];
		i++;
	};
	return result;
}
function AdditionVectors(vector1,vector2)
{
	let i=0,result=[];let length;
	if(vector1.length>=vector2.length){length=vector1.length}else{length=vector2.length}
	while(i<length)
	{
		if((vector1[i]==undefined)){vector1[i]=0;};
		if((vector2[i]==undefined)){vector2[i]=0;};
		result[i]=vector1[i]+vector2[i];
		i++;
	};
	return result;
};
function SubtractionVectors(vector1,vector2)//vector1-vector2
{
	let i=0,result=[];let length;
	if(vector1.length>=vector2.length){length=vector1.length}else{length=vector2.length}
	while(i<length)
	{
		if((vector1[i]==undefined)){vector1[i]=0;};
		if((vector2[i]==undefined)){vector2[i]=0;};
		result[i]=vector1[i]-vector2[i];
		i++;
	};
	return result;
};
function AbsVector(vector)
{
	let i=0,result=0;
	while(i<vector.length)
	{
		result+=(vector[i])**2;
		i++;
	};
	return Sqrt(result);
};
function ExternalForce(RadiusVector,h,t)
{
	result=[];
	result=ScalarMultiplicationVector(-1/(AbsVector(RadiusVector)**2),RadiusVector);
	
	return result;
}


function EquateArrays(array1,array2)
{
	let i=0,j=0,k=0;
	while(i<3)
	{
		while(j<4)
		{
			array1[i][j]=array2[i][j];
			j++;
		};
		j=0;
		i++;
	};
}; 
let m=[3,3,3];
let CoordinatesNow=[[14,7,-5,8],[-8,-3,7,14],[10,-8,12,-6],[0,0,0,0]];//[[14,7,-15,8],[-10,-10,7,10],[10,-8,12,-20],[0,0,0]];[[14,7,-15],[-10,-10,7],[10,-8,12],[0,0,0]]
let CoordinatesNext=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
let VelocitysNow=[[-1,0,1,0],[1,0,-1,0],[1,0,0,1],[0,0,0,0]];
let VelocitysNext=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];


function Acceleration(G,m,CoordinatesNow,h,Time)
{
	let result=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	//[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
	//[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

	
	let i=0;let j=0;
	
	while(i<3)
	{
		while(j<3)
		{
			if(i!=j)
			{
				result[i]=AdditionVectors(ScalarMultiplicationVector(G*m[i]*m[j]/((AbsVector(SubtractionVectors(CoordinatesNow[j],CoordinatesNow[i])))**3),SubtractionVectors(CoordinatesNow[j],CoordinatesNow[i])),result[i])
				result[i]=AdditionVectors(result[i],ExternalForce(CoordinatesNow[i],h,Time))
			}
			j++;
		};
		result[i]=ScalarMultiplicationVector(1/m[i],result[i]);
		j=0;
		i++;
	};
	return result;
};
function DrawMoveThreeObject(CoordinatesNow,CoordinatesNext,VelocitysNow,VelocitysNext,m,Time)
{
	let G=8 ,h=0.0005,a,t=1;
	a=Acceleration(G,m,CoordinatesNow,h,Time);
	let i=0;
	while(i<3)
	{
		VelocitysNext[i]=AdditionVectors(VelocitysNow[i],ScalarMultiplicationVector(h,a[i]));
		CoordinatesNext[i]=AdditionVectors(CoordinatesNow[i],ScalarMultiplicationVector(h,VelocitysNow[i]));
		i++;
	};
	i=0;
	while(i<3)
	{
		if(i==0){color='blue'};
		if(i==1){color='green'};
		if(i==2){color='red'};
		if(i==3){color='black'};
		//if(Time==49999){t=2;};
		DrawPoint4D(CoordinatesNow[i][0],CoordinatesNow[i][1],CoordinatesNow[i][2],CoordinatesNow[i][3],color,30,1);
		
		i++;
	};
	
	EquateArrays(CoordinatesNow,CoordinatesNext);
	EquateArrays(VelocitysNow,VelocitysNext);
};




DrawLine4D(-7500,0,0,0,7500,0,0,0,'gray');
DrawLine4D(0,-7500,0,0,0,7500,0,0,'gray');
DrawLine4D(0,0,-7500,0,0,0,7500,0,'gray');
DrawLine4D(0,0,0,-7500,0,0,0,7500,'gray');

 
 document.addEventListener('keydown', function(e) {//context.clearRect(0, 0, canvas.width, canvas.height);
 /*rawLine3D(-7500,0,0,7500,0,0);
DrawLine3D(0,-7500,0,0,7500,0);
DrawLine3D(0,0,-7500,0,0,7500);
  */
DrawLine4D(-7500,0,0,0,7500,0,0,0,'gray');
DrawLine4D(0,-7500,0,0,0,7500,0,0,'gray');
DrawLine4D(0,0,-7500,0,0,0,7500,0,'gray');
DrawLine4D(0,0,0,-7500,0,0,0,7500,'gray');  
  

    let Time=0;
 while(Time<6000)
 { 
	DrawMoveThreeObject(CoordinatesNow,CoordinatesNext,VelocitysNow,VelocitysNext,m,Time)
	
	Time++;
 };/*
	DrawLine4D(CoordinatesNow[0][0],CoordinatesNow[0][1],CoordinatesNow[0][2],CoordinatesNow[0][3],CoordinatesNow[1][0],CoordinatesNow[1][1],CoordinatesNow[1][2],CoordinatesNow[1][3],'gray')
	DrawLine4D(CoordinatesNow[2][0],CoordinatesNow[2][1],CoordinatesNow[2][2],CoordinatesNow[2][3],CoordinatesNow[1][0],CoordinatesNow[1][1],CoordinatesNow[1][2],CoordinatesNow[1][3],'gray')
	DrawLine4D(CoordinatesNow[0][0],CoordinatesNow[0][1],CoordinatesNow[0][2],CoordinatesNow[0][3],CoordinatesNow[2][0],CoordinatesNow[2][1],CoordinatesNow[2][2],CoordinatesNow[2][3],'gray')*/
	//EquateArrays(CelssFinish,CellsNow);
  });
