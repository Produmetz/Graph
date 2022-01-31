function SummaArray(array1,array2)
{
	
};





function Delta(array)
	{
		let result=0;
		let i=0;
		while(i<array.length)
		{
			if(array[i]!=0){result++;}i++;
		};
		if(result==1){return false;}
		else{return true;};
	};







































































let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
function NtF(x,a){return Number((x).toFixed(a));};
 function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}	
function rgb2hex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};	                
let ArrayDotFunction=[]
function Multi(x,y)
	{
		let result;
		result=Number((x*y).toFixed(10));
		return result;
	};
function Sqrt(a){let b;b=Math.sqrt(a);return b;};  
function Qrt(a){let b;b=Number((Math.pow(a,2)).toFixed(2));return b;}; 
 
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



function DrawRect2D(x,y,z,A,B,XYZ,color)
{
	let Quadra1,Quadra2;
	context.fillStyle = color;
	if(XYZ==0)
		{
			Quadra1=DrawLine3D(x,y,z,x+A,y,z);		
			DrawLine3D(x,y,z,x,y+B,z);
			DrawLine3D(x,y+B,z,x+A,y+B,z);						
			Quadra2=DrawLine3D(x+A,y,z,x+A,y+B,z);			
		};
	if(XYZ==1)
		{
			Quadra1=DrawLine3D(x,y,z,x+A,y,z);
			DrawLine3D(x,y,z,x,y,z+B);
			DrawLine3D(x,y,z+B,x+A,y,z+B);
			Quadra2=DrawLine3D(x+A,y,z,x+A,y,z+B);
		};
	if(XYZ==2)
		{
			Quadra1=DrawLine3D(x,y,z,x,y+A,z);
			DrawLine3D(x,y,z,x,y,z+B);
			DrawLine3D(x,y,z+B,x,y+A,z+B);
			Quadra2=DrawLine3D(x,y+A,z,x,y+A,z+B);
		};	
};	
function DrawRect(x,y,z,w,h,k)
	{
		DrawRect2D(x,y,z,w,h,0);
		DrawRect2D(x,y,z,w,k,1);
		DrawRect2D(x,y,z,h,k,2);
		
		DrawRect2D(x+w,y+h,z+k,-w,-h,0);
		DrawRect2D(x+w,y+h,z+k,-w,-k,1);
		DrawRect2D(x+w,y+h,z+k,-h,-k,2);
	};	

function Rotation4D(x,y,z,w,fi,tet,alpha)
{
	let z_1;let y_1;let x_1;let w_1;let R;let t,a,f;
	
	R=Sqrt(x**2+y**2+z**2+w**2);t=Math.acos(Sqrt(z**2+w**2)/R);
	Math.acos(w/Sqrt(z**2+w**2))+alpha;
	w_1=R*Math.cos(t)*Math.cos(Math.acos(w/Sqrt(z**2+w**2))+alpha);
	z_1=R*Math.cos(t)*Math.sin(Math.acos(w/Sqrt(z**2+w**2))+alpha);
	//if((z==0)&&(w==0)){t=Math.acos(0)+tet;};
	
	f=Math.acos(x/(R*Math.sin(t)))+fi;
	a=Math.acos(w/(R*Math.cos(t)))+alpha;
	
	w_1=R*Math.cos(t)*Math.cos(a);
	z_1=R*Math.cos(t)*Math.sin(a);
	x_1=R*Math.sin(t)*Math.cos(f);
	y_1=R*Math.sin(t)*Math.sin(f);	
	
	return [x_1,y_1,z_1,w_1];
};
function Rotation3D(x,y,z,fi,tet)
{
	let z_1;let y_1;let x_1;let R;
	R=Sqrt(x**2+y**2+z**2);
	z_1=R*Math.cos(Math.acos(z/R)+tet);
	x_1=R*Math.sin(Math.acos(z_1/R))*Math.cos(Math.acos(x/R)+fi);
	y_1=R*Math.sin(Math.acos(z_1/R))*Math.sin(Math.acos(x/R)+fi);
	return [x_1,y_1,z_1];
};

function RotationAroundPoint(x,y,z,fi,tet,a,b,c)
{
	let z_1;let y_1;let x_1;
	y_1=Number(((y-b)*Number((Math.cos(tet)).toFixed(3))).toFixed(3));
	x_1=Number(((x-a)*Number((Math.cos(fi)).toFixed(3))).toFixed(3));
	x_1=x_1+Number(((x-a)*Number((Math.cos(tet)).toFixed(3))).toFixed(3))
	z_1=Number(((z-c)*Number((Math.cos(fi)).toFixed(3))).toFixed(3));
	return [x_1,y_1,z_1];
};



function DrawRotationLine3D(x,y,z,a,b,c,e){
	let fi,tet;
	let x_1,y_1,z_1,a_1,b_1,c_1;
	
	
	
	let XY,AB;
	XY=RotationAroundPoint(x,y,z,fi,tet,0,0,0);	
	AB=RotationAroundPoint(a,b,c,fi,tet,0,0,0);	
	z_1=XY[2];
	y_1=XY[1];
	x_1=XY[0];
	c_1=AB[2];
	a_1=AB[0];
	b_1=AB[1];
	DrawLine3D(x_1,y_1,z_1,a_1,b_1,c_1);};
	
function DrawRotationRect2D(x,y,z,A,B,XYZ,e)
{
	let fi,tet;
	let x_1,y_1,z_1,a_1,b_1,c_1;
	
	
	
    let XY
	XY=Rotation3D(x,y,z,0,tet,0);
	z_1=XY[2];
	y_1=XY[1];
	x_1=XY[0];
	DrawRect2D(x_1,y_1,z_1,A,B,XYZ)
};	
function DrawRectROT2D(x,y,z,A,B,XYZ,e)
{   
	if(XYZ==0)
		{
			DrawRotationLine3D(x,y,z,x+A,y,z,e);
			DrawRotationLine3D(x,y,z,x,y+B,z,e);
			DrawRotationLine3D(x,y+B,z,x+A,y+B,z,e);
			DrawRotationLine3D(x+A,y,z,x+A,y+B,z,e);
		};
	if(XYZ==1)
		{
			DrawRotationLine3D(x,y,z,x+A,y,z,e);
			DrawRotationLine3D(x,y,z,x,y,z+B,e);
			DrawRotationLine3D(x,y,z+B,x+A,y,z+B,e);
			DrawRotationLine3D(x+A,y,z,x+A,y,z+B,e);
		};
	if(XYZ==2)
		{
			DrawRotationLine3D(x,y,z,x,y+A,z,e);
			DrawRotationLine3D(x,y,z,x,y,z+B,e);
			DrawRotationLine3D(x,y,z+B,x,y+A,z+B,e);
			DrawRotationLine3D(x,y+A,z,x,y+A,z+B,e);
		};	
};	
	
function DrawRotationRect(x,y,z,w,h,k,e)
{
	context.clearRect(0, 0, 1000, 800);
		DrawRectROT2D(x,y,z,w,h,0,e);
		DrawRectROT2D(x,y,z,k,1,e);
		DrawRectROT2D(x,y,z,h,k,2,e);
		
		DrawRectROT2D(x+w,y+h,z+k,-w,-h,0,e);
		DrawRectROT2D(x+w,y+h,z+k,-w,-k,1,e);
		DrawRectROT2D(x+w,y+h,z+k,-h,-k,2,e);
		
};	


function Draw3DPoleSixBySixByEight(x,y,z,e)
{	let color;
	
	 for (let x_2=0;x_2<6;x_2++)
		{
		for(let y_2=0;y_2<6;y_2++)
			{
			for(let z_2=0;z_2<8;z_2++)
				{
					color=rgb2hex(0,120,y_2*40)
					DrawRect2D(x+x_2*60,y+y_2*100,z+z_2*60,60,60,1,color);
				};
			};
		};
};

function DrawRot3DPoleSixBySixByEight(x,y,z,fi,tet,alpha)
{
	let color;context.clearRect(0, 0, canvas.width, canvas.height);
	

	DrawPoint3D(x-180,y,z-180,10);
	let x_1,y_1,z_1;
    let XY
	
	XY=Rotation3D(x-180,y,z-180,fi,tet,alpha);
	z_1=XY[2];
	y_1=XY[1];
	x_1=XY[0];
	DrawPoint3D(x_1-180,y_1,z_1-180,5);
	 for (let x_2=0;x_2<6;x_2++)
		{
		for(let y_2=0;y_2<6;y_2++)
			{
			for(let z_2=0;z_2<8;z_2++)
				{
					color=rgb2hex(0,120,y_2*40)
					DrawRect2D(x_1+x_2*60,y_1+y_2*100,z_1+z_2*60,60,60,1);
				};
			};
		};
};

let x=1,y=1,z=1,a=20,b=20,c=20;
let COR=[];	

function DrawPoint4D(x,y,z,w,color,scale,size)
	{
		let AngleCos1;let AngleCos2;let AngleSin1;let AngleSin2;
		
		DrawPoint(7500+x*scale*Math.cos(-Math.PI/6)+y*scale*Math.cos(7*Math.PI/6)+z*scale*Math.cos(Math.PI/3)+w*scale*Math.cos(2*Math.PI/3),7500-x*scale*Math.sin(-Math.PI/6)-y*scale*Math.sin(7*Math.PI/6)-z*scale*Math.sin(Math.PI/3)-w*scale*Math.sin(2*Math.PI/3),color,size);
		return [7500+x*scale*Math.cos(-Math.PI/6)+y*scale*Math.cos(7*Math.PI/6)+z*scale*Math.cos(Math.PI/3)+w*scale*Math.cos(2*Math.PI/3),7500-x*scale*Math.sin(-Math.PI/6)-y*scale*Math.sin(7*Math.PI/6)-z*scale*Math.sin(Math.PI/3)-w*scale*Math.sin(2*Math.PI/3)];
	};
	function DrawLine4D(x,y,z,w,x_1,y_1,z_1,w_1,color)
	{
		let XY1=[];let XY2=[];
		XY1=DrawPoint4D(x,y,z,w,'gray',1);
		XY2=DrawPoint4D(x_1,y_1,z_1,w_1,'gray',1);
		DrawLine(XY1[0],XY1[1],XY2[0],XY2[1],color);

	};

function DrawRect2Dfor4D(x,y,z,w,A,B,XYZ,color)
{
	if(XYZ==0)
		{
			 DrawLine4D(x,y,z,w,x+A,y,z,w,color);
			 DrawLine4D(x,y,z,w,x,y+B,z,w,color);
			 
			 DrawLine4D(x,y+B,z,w,x+A,y+B,z,w,color);
			 DrawLine4D(x+A,y,z,w,x+A,y+B,z,w,color);
		};
	if(XYZ==1)
		{
			DrawLine4D(x,y,z,w,x+A,y,z,w,color);
			DrawLine4D(x,y,z,w,x,y,z+B,w,color); 
			DrawLine4D(x,y,z+B,w,x+A,y,z+B,w,color);
			DrawLine4D(x+A,y,z,w,x+A,y,z+B,w,color);
			
		};
	if(XYZ==2)
		{
			DrawLine4D(x,y,z,w,x,y+A,z,w,color);
			DrawLine4D(x,y,z,w,x,y,z+B,w,color); 
			DrawLine4D(x,y,z+B,w,x,y+A,z+B,w,color);
			DrawLine4D(x,y+A,z,w,x,y+A,z+B,w,color);
			
		};
	if(XYZ==3)
		{
			DrawLine4D(x,y,z,w,x+A,y,z,w,color);
			 DrawLine4D(x,y,z,w,x,y,z,w+B,color);
			 
			 DrawLine4D(x,y,z,w+B,x+A,y,z,w+B,color);
			 DrawLine4D(x+A,y,z,w,x+A,y,z,w+B,color);
			
		};	
	if(XYZ==4)
		{
			DrawLine4D(x,y,z,w,x,y+A,z,w,color);
			DrawLine4D(x,y,z,w,x,y,z,w+B,color); 
			DrawLine4D(x,y,z,w+B,x,y+A,z,w+B,color);
			DrawLine4D(x,y+A,z,w,x,y+A,z,w+B,color);
			
		};
	if(XYZ==5)
		{
			DrawLine4D(x,y,z,w,x,y,z+A,w,color);
			DrawLine4D(x,y,z,w,x,y,z,w+B,color); 
			DrawLine4D(x,y,z,w+B,x,y,z+A,w+B,color);
			DrawLine4D(x,y,z+A,w,x,y,z+A,w+B,color);
			
		};
};	
 function DrawRect4D(x,y,z,w,A,color)
	{
		DrawRect2Dfor4D(x,y,z,w,A,A,0,color);
		DrawRect2Dfor4D(x,y,z,w,A,A,1,color);
		DrawRect2Dfor4D(x,y,z,w,A,A,2,color);
		DrawRect2Dfor4D(x,y,z,w,A,A,3,color);
		DrawRect2Dfor4D(x,y,z,w,A,A,4,color);
		DrawRect2Dfor4D(x,y,z,w,A,A,5,color);
		
		DrawRect2Dfor4D(x+A,y+A,z+A,w+A,-A,-A,0,color);
		DrawRect2Dfor4D(x+A,y+A,z+A,w+A,-A,-A,1,color);
		DrawRect2Dfor4D(x+A,y+A,z+A,w+A,-A,-A,2,color);
		DrawRect2Dfor4D(x+A,y+A,z+A,w+A,-A,-A,3,color);
		DrawRect2Dfor4D(x+A,y+A,z+A,w+A,-A,-A,4,color);
		DrawRect2Dfor4D(x+A,y+A,z+A,w+A,-A,-A,5,color);
	};	


function DrawSphere4D(x,y,z,w,R)
{
	let fi,alpha,tet,koks;let h=0.035;let Coor;let r=Sqrt(x**2+y**2+z**2+w**2);
	fi=0;alpha=0;tet=0;let ar;
	while(fi<=Math.PI*2)
	{
		while(tet<Math.PI*2)
		{
			while(alpha<=Math.PI*2)
			{
				
					
					
					Coor=Rotation4D(R,0,0,0,fi,tet,0);
					//let color=rgb2hex(fi*30+koks*20,tet*30+koks*20,alpha*20+koks*20);
					
					
					r=0;//10+alpha**2+tet**2+fi**2;
					//if((R>=r-0.07)&&(R<=r+0.07)){DrawPoint4D(Coor[0],Coor[1],Coor[2],Coor[3],color,5,5);}
					//if((r>=99)&&(r<=100)){
						DrawPoint4D(r+Coor[0],r+Coor[1],r+Coor[2],r+Coor[3],'red',15,0.35)//;}
						if((Coor[3]>=400)||(Coor[3]<=-400)){DrawPoint4D(r+Coor[0],r+Coor[1],r+Coor[2],r+Coor[3],'green',10,1)};
					//DrawPoint4D(Coor[0],Coor[1],Coor[2],Coor[3],color,7,2);
					
				
				alpha=alpha+h;
			};
			tet=tet+h;
			alpha=0;
		};
		fi=fi+h;
		tet=0;
	};
};/*
let alpha=0;

			while(alpha<=2*Math.PI)
			{
				
					
					
					Coor=Rotation4D(50,50,50,50,0,0,alpha);
					//let color=rgb2hex(fi*30+koks*20,tet*30+koks*20,alpha*20+koks*20);
					
					
					r=Sqrt(Coor[0]**2+Coor[1]**2+Coor[2]**2+Coor[3]**2);
					//if((R>=r-0.07)&&(R<=r+0.07)){DrawPoint4D(Coor[0],Coor[1],Coor[2],Coor[3],color,5,5);}
					//if((r>=99)&&(r<=100)){
						DrawPoint4D(Coor[0],Coor[1],Coor[2],Coor[3],'red',5,1)//;}
					//DrawPoint4D(Coor[0],Coor[1],Coor[2],Coor[3],color,7,2);
					
				
			alpha=alpha+0.005;
			};
*/








class Forms3D
{
	RadiusVectorCentre=[];
	CountNodes;
	CoordinatesNodes=[];
	
	constructor(x,y,z,N)
	{
		this.RadiusVectorCentre=[x,y,z];
		this.CountNodes=N;
	};	
	getMultiply(constant){	let result=[]; for (let i=0;i<Vector.length;i++){result[i]=this.Value[i]*constant};return result;};
	SetCoordinatesNodes(ArrayCoordinates)
	{
		let i=0;
		
		while(i<this.CountNodes)
		{
			this.CoordinatesNodes[i]=[];
			this.CoordinatesNodes[i][0]=ArrayCoordinates[i][0];
			this.CoordinatesNodes[i][1]=ArrayCoordinates[i][1];
			this.CoordinatesNodes[i][2]=ArrayCoordinates[i][2];
			i++;
		};
	};
	GetCoordinatesNodes(){return this.CoordinatesNodes;};
	DrawForm()
	{	
		let XY1=[];
		context.beginPath();
		context.lineWidth = 3;
		let i=0;
		XY1=DrawPoint3D(this.CoordinatesNodes[i][0],this.CoordinatesNodes[i][1],this.CoordinatesNodes[i][2],10);
		context.moveTo(XY1[0],XY1[1]);
		while(i<this.CoordinatesNodes.length)
		{
		
		XY1=DrawPoint3D(this.CoordinatesNodes[i][0],this.CoordinatesNodes[i][1],this.CoordinatesNodes[i][2],10);
		context.lineTo(XY1[0],XY1[1]);
		i++;
		};
		context.stroke();
	};
};












// DrawRot3DPoleSixBySixByEight(0,0,0,Math.PI*0.25,0,Math.PI*0.25);
DrawPoint4D(0,0,0,0,'black',1);
DrawLine4D(-7500,0,0,0,7500,0,0,0,'gray');
DrawLine4D(0,-7500,0,0,0,7500,0,0,'gray');
DrawLine4D(0,0,-7500,0,0,0,7500,0,'gray');
DrawLine4D(0,0,0,-7500,0,0,0,7500,'gray');
/*
20,0,0,0/-20,0,0,0/0,20,0,0/0,-20,0,0/0,0,0,20/0,0,0,-20/0,0,20,0/0,0,-20,0
5,5,5,5/5,5,5,-5/5,5,5,5/

*/
function GetCoor()
{
	let result=[];let i=-1,j=-1,k=-1,l=-1;let y=0;
	while(i<2)
	{
		if(i==0){i++};
		while(j<2)
		{
			if(j==0){j++};
			while(k<2)
			{
				if(k==0){k++};
				while(l<2)
				{
					if(l==0){l++};
					//if((i!=0)||(k!=0)||(j!=0)||(l!=0)){}
					result[y]=[5*i,5*l,5*k,5*l];
					y++;
					l++;
				};	
				k++;
				l=-1;
			};
			j++;
			k=-1;
		};
		i++;
		j=-1;
	};
	return result;
};
function DrawStar()
{
	let i=0;let ar=GetCoor();
	while(i<ar.length)
	{
		
		//DrawLine4D(ar[i][0],ar[i][0],ar[i][1],ar[i][2],ar[i][3],ar[i+1][0],ar[i+1][1],ar[i+1][2],ar[i+1][3],'gray');
		DrawPoint4D(ar[i][0],ar[i][1],ar[i][2],ar[i][3],'blue',40,3);
		i++;
	};
	//rawLine4D(ar[i][0],ar[i][0],ar[i][1],ar[i][2],ar[i][3],ar[0][0],ar[0][1],ar[0][2],ar[0][3],'gray');
	/*i=0;
	while(i<)
	{
		
	};*/
	DrawPoint4D(20,0,0,0,'blue',40,4);
	DrawPoint4D(-20,0,0,0,'blue',40,4);
	DrawPoint4D(0,20,0,0,'blue',40,4);
	DrawPoint4D(0,-20,0,0,'blue',40,4);
	DrawPoint4D(0,0,0,20,'blue',40,4);
	DrawPoint4D(0,0,0,-20,'blue',40,4);
	DrawPoint4D(0,0,20,0,'blue',40,4);
	DrawPoint4D(0,0,-20,0,'blue',40,4);
};
DrawStar();
//DrawLine4D(20,0,0,0,5,5,0,0,'gray');
//DrawRect4D(0,0,0,0,50,'blue')
//DrawSphere4D(0,0,0,0,50)
/*let A,color;
a=0;b=0;c=0,d=100;A=50;color='red';
DrawRect2Dfor4D(a,b,c,d,A,A,0,color);
		DrawRect2Dfor4D(a,b,c,d,A,A,1,color);
		DrawRect2Dfor4D(a,b,c,d,A,A,2,color);
		
		DrawRect2Dfor4D(a+A,b+A,c+A,d,-A,-A,0,color);
		DrawRect2Dfor4D(a+A,b+A,c+A,d,-A,-A,1,color);
		DrawRect2Dfor4D(a+A,b+A,c+A,d,-A,-A,2,color);*/
let t;let h;let m;let g;let pos;let v;let at;let tu=0;
//let fi=0,tet=0,alpha=0,koks=0;let r,R;
let ArrayData=[];let Turo=[];


/*
t=-15;
h=0.5;pos=-15;v=-15;at=0;
var x_t,L,dx;
let k=0,k1=0,k2=0;
while(v<=15)
{
	g=0;m=1;
	
	
	while(pos<=15)
{
	context.beginPath();tu=tu+4;
	let color=rgb2hex(0,200,tu);
	while(t<=15)
	{;
	g=0;m=1;
	x_t=pos+v*t+(g/2)*(t**2)+(at/3)*(t**3);
	dx=v+g*t+at*(t**2);
	L=(m*(v**2))/2-m*g*Math.abs(x_t);
	Tuto=Rotation4D(x_t,dx,t,L,0,0,0,0);
	R=Sqrt(Tuto[0]**2+Tuto[1]**2+Tuto[2]**2+Tuto[3]**2);
	
	//DrawPoint4D(x_t,dx,t,L,color,10,2);
	DrawPoint4D(Tuto[0],Tuto[1],Tuto[2],Tuto[3],color,10,2);
	if((t==3)){DrawPoint4D(Tuto[0],Tuto[1],Tuto[2],Tuto[3],'red',10,4);};
	if((t==7)){DrawPoint4D(Tuto[0],Tuto[1],Tuto[2],Tuto[3],'black',10,4);};
	t=t+h;k2++;
	};
	k1++;
	context.stroke();
	pos=pos+h;t=-15;

	};pos=-15;tu=0;
	v=v+h;k++;
};*/
/*
let Turo=[];i=0;
for( k=0;k<61;k++)
		{		
			for(k1=0;k1<3660;k1++)
			{		
				for(k2=0;k2<223260;k2++)
				{
					tet=1;
					Turo=Rotation4D(ArrayData[k][k1][k2][0],ArrayData[k][k1][k2][1],ArrayData[k][k1][k2][2],ArrayData[k][k1][k2][3],0,tet,0);
					DrawPoint4D(Turo[0],Turo[1],Turo[2],Turo[3],'blue',10,1)
					
					
				};			
			};
		};	*/
/*
t=-15;
h=0.5;pos=-15;v=-15;at=0;
var x_t,L,dx;
while(v<=15)
{
	g=1;m=1;
	
	
	while(pos<15)
{   
	context.beginPath();tu=tu+4;
	let color=rgb2hex(0,200,tu);
	while(t<=15)
	{
	g=1;m=1;
	x_t=pos+v*t+(g/2)*(t**2)+(at/3)*(t**3);
	dx=v+g*t+at*(t**2);
	L=(m*(v**2))/2;
	Tuto=Rotation4D(x_t,dx,t,L,Math.PI,0,0,0);
	DrawPoint4D(Tuto[0],Tuto[1],Tuto[2],Tuto[3],color,7,1);
	if(v==3){DrawPoint4D(Tuto[0],Tuto[1],Tuto[2],Tuto[3],'red',7,3);};
	if(v==7){DrawPoint4D(Tuto[0],Tuto[1],Tuto[2],Tuto[3],'black',7,3);};
	t=t+h;
	t=t+h;
	};
	
	context.stroke();
	pos=pos+h;t=-15;

	};pos=-15;tu=0;
	v=v+h;
};*/

/*
t=-15;
h=0.5;pos=0;v=5;
let tu=0;
context.beginPath();
while(pos<15)
{
	context.beginPath();tu=tu+8;
	let color=rgb2hex(255,0,tu);
	while(t<=15){
	g=5;m=1;
	
	


	x_t=pos+v*t+(g/2)*(t**2)+(at/3)*(t**3);
	dx=v+g*t+at*(t**2);
	L=(m*(v**2))/2-m*g*Math.abs(x_t);
	DrawPoint4D(x_t,dx,t,0,color,10);
	t=t+h;
	};
	t=-15;
	context.stroke();
	pos=pos+h;

};
*/
 //DrawRect4D(0,0,0,0,50,'blue')
let PressKey=false;
let PressMouse=false;



/*canvas.addEventListener('mousemove',function(ev)
{
	DrawRot3DPoleSixBySixByEight(x,y,z,ev);
})*/

/*
let Rect= new Forms3D(0,0,0,4);
pos=[];
let i=0;
while(i<4)
{
	pos[i]=[]
	pos[i][0]=Number(prompt('',i));
	pos[i][1]=Number(prompt('',i));
	pos[i][2]=Number(prompt('',i));
	i++;
}
Rect.SetCoordinatesNodes(pos);

Rect.DrawForm();

*/



///////////////////////////////////////////////////////////////////////////////////

/*
	DrawPoint4D(200,200,200,200,'red',1,10);
	DrawPoint3D(0,0,0,1)
	DrawPoint3D(0,200,0,5);
let i=-10;
while(i<10)
{
	
	pos=Rotation3D(0,200,0,0,Math.PI,0);
	DrawPoint3D(pos[0],pos[1],pos[2],50);
	fi=fi+i;
	//tet=tet+i;
	//alpha=alpha+i;
	
	i=i+0.1;
};*/

function DrawCoplexFunc(h)
	{	
		let Re,Im;
		let TYRO=[]
		let tu=0;
		x=-20,y=-20;
		while(x<=20)
		{
			while(y<=20)
			{ 
				
				tu=x*y-150;
				let color=rgb2hex(0,255,tu);
				Re=x**2-y**2;Im=x*y;
				//TYRO=Rotation4D(x,y,Re,Im,Math.PI*0.5,Math.PI*0.5,0,0);
				
				//if((x<=2)&&(x>=1)){DrawPoint4D(TYRO[0],TYRO[1],TYRO[2],TYRO[3],'black',10,3);}else if((y<=3)&&(y>=2)){DrawPoint4D(TYRO[0],TYRO[1],TYRO[2],TYRO[3],'gray',10,3);}else{DrawPoint4D(TYRO[0],TYRO[1],TYRO[2],TYRO[3],'green',10,1);};
				if((Re<=2)&&(Re>=1)){DrawPoint4D(x,y,Re,Im,'red',50,1);}else if((Im<=3)&&(Im>=2)){DrawPoint4D(x,y,Re,Im,'blue',50,1);}else{DrawPoint4D(x,y,Re,Im,'green',50,1);}
				y=y+h;
			};
			y=-20;
			x=x+h;
		}; 
	};
	
//DrawCoplexFunc(0.05);
function DrawArray(array_x,array_y,scale,color)
	{
		let result,i=0;
		while(i<array_x.length)
			{
				DrawPoint(500+Math.round(array_x[i]/scale),400-Math.round(array_y[i]/scale),color);
				DrawLine(500+Math.round(array_x[i]/scale),400-Math.round(array_y[i]/scale),500+Math.round(array_x[i+1]/scale),400-Math.round(array_y[i+1]/scale),color)
				i++;
			};
	};
const h1=14,h2=17,lambda=299792458/2500000000;
function Oper(x,y,p,n,max,sigma,eps)
	{
		let result=0;
		if(n==0)
		{
			if(x!=0)
			{
			result=(173/x)*(p*(1+Math.cos(2*y))*(Math.E**(-0.1*y**2)))**(0.5);} else{result=0;};
		}
		else if(n==1)
		{
			if(x!=0)
			{
			result=(173/x)*2*Math.abs(Math.sin((2*Math.PI*h1*h2)/(lambda*x)))*(p*max)**(0.5);};
		}
		else if(n==2)
		{
			if(x!=0)
			{
			result=(173/x)*((4*Math.PI*h1*h2)/(lambda*x))*(p*max)**(0.5);};
		}
		else if(n==3)
		{
			if(x!=0)
			{
			result=((245/x)*(p*max))*((Math.PI*x)/(lambda*(Sqrt(eps**2+(60*lambda*sigma)**2))));};
		}
		else if(n==4)
		{
			if(x!=0)
			{
			result=((245/x)*(p*max))*((Math.PI*x)/(lambda*(Sqrt(eps**2+(60*lambda*sigma)**2))));};

		}
		else if(n==5)
		{
			
		}
		return result;
	};

let max=0;	
function SearchD_max(y1,y2,h,max)
{
	let min=0;
		while(y1<=y2)
		{
				
			min=(1+Math.cos(3.8*y1))*(Math.E**(-0.12*y1**2));
			if(min>=max){max=min;};
				
			y1+=h;
		};
		
		
	return max;
};
function Fill(x1,y1,x2,y2,h,n,max)
	{
	/*context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = 'blue';
	context.moveTo(7500+x1,7500-y1);
	*/
		
		let abs=0;
		let x=0,y=0;
		let i=y1;
		while(x1<=x2)
		{
			while(y1<=y2)
			{
				abs=Oper(x1,y1,1,n,max,1,1);
				x=x1*Math.cos(y1);
				y=x1*Math.sin(y1);
				
				
				//if((x1==0)&&(y1==0)){context.moveTo(7500+y,7500-y);}
				//context.lineTo(7500+x*1,7500-y*1);
				//DrawPoint(7500+x*5,7500-y*5,'blue',1);
				//DrawPoint3D(x1,y1,abs,1,10);
				DrawPoint3D(x,y,abs,1,10);
				y1+=h;
			};
			y1=i;
			x1+=h;
		};
		//context.stroke();
		
	};
//max=SearchD_max(0,2*Math.PI,0.001,max);	


//Fill(0,0,100,2*Math.PI,0.05,0,max);
//DrawPoint3D(100,100,100,2);
// DrawRect(0,0,0,50,50,50);
function DrawSphere3D(x,y,z,R)
{
	let fi,alpha,tet,koks;let h=0.005;let Coor;let r;
	fi=0;alpha=0;tet=0;koks=0;let ar;let color=rgb2hex(0,0,25);
	while(fi<=Math.PI*2)
	{
		while(tet<=2*Math.PI)
		{
			r=R+2*Math.cos(11*tet)+2*Math.cos(11*fi);
			Coor=Rotation3D(r,0,0,fi,tet);
			ar=tet*50	
			//color=rgb2hex(0,ar,255-fi*15);		
					
			
			//if((R>=r-0.07)&&(R<=r+0.07)){DrawPoint4D(Coor[0],Coor[1],Coor[2],Coor[3],color,5,5);}
			//if((Coor[0]>=0)&&(Coor[1]>=0)&&(Coor[2]>=0)){DrawPoint3D(x+Coor[0],y+Coor[1],z+Coor[2],1,10,color);}
			DrawPoint3D(x+Coor[0],y+Coor[1],z+Coor[2],0.5,4,'green');
			//if(r==R){DrawPoint3D(x+Coor[0],y+Coor[1],z+Coor[2],1,1);}
				
			tet=tet+h;
		};
		fi=fi+h;
		tet=0;
	};
};
function DrawLissagu3D()
{
	let t=0;
	while (t<=Math.PI*4)
	{
		DrawPoint3D(8+2*Math.cos(t),8+2*Math.sin(t),t,0.5,40,'green');
		t+=0.002;
	};
};
//DrawSphere3D(0,0,0,70)
 //DrawLissagu3D()
 /* DrawLine3D(-7500,0,0,7500,0,0);
DrawLine3D(0,-7500,0,0,7500,0);
DrawLine3D(0,0,-7500,0,0,7500);*/
  let CoorNow=[[3,0,0],[5,1,0],[2,4,0],[0,0,0],[0,0,0],[0,0,0]]; let CoorNext=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
 function AccelerationAbs(G,m1,m2,m3,CoorNow)
 {
	let result=[];
	
	
	let i=0;let j=0;
	while(j<3){result[j]=[];
		while (i<3)
				{
			
			result[j][i]=0;
			
			i++;
			};
		i=0;j++
		};
	i=0;
		while (i<3)
		{
			result[0][i]=-G*m1*m2/(CoorNow[0][i]-CoorNow[1][i])**2;
			result[1][i]=-G*m2*m3/(CoorNow[1][i]-CoorNow[2][i])**2;
			result[2][i]=-G*m1*m3/(CoorNow[0][i]-CoorNow[2][i])**2;
			if((CoorNow[0][i]-CoorNow[1][i])==0){result[0][i]=0;}
			if((CoorNow[1][i]-CoorNow[2][i])==0){result[1][i]=0;}
			if((CoorNow[0][i]-CoorNow[2][i])==0){result[2][i]=0;}
			i++;
		};
	return result;
 };
 
 function EquateArrays(array1,array2)
{
	let i=0,j=0,k=0;
	while(i<3)
	{
		while(j<3)
		{
			array1[i][j]=array2[i][j];
			j++;
		};
		j=0;
		i++;
};};
 
 function DrawMoveThreeObj(CoorNow,CoorNext,Time)
 {
	let G=6,m_1=1,m_2=1,m_3=0,h=0.005,a,t=1;let r1=0,r2=0,r3=0;
	
	a= AccelerationAbs(G,m_1,m_2,m_3,CoorNow);
	let i=0;
	while(i<3)
	{
		CoorNext[0][i]=CoorNow[0][i]+((CoorNow[0][i]-CoorNow[1][i])*a[0][i]/m_1+(CoorNow[0][i]-CoorNow[2][i])*a[2][i]/m_1)*(h**2)/2;
		CoorNext[1][i]=CoorNow[1][i]+((CoorNow[1][i]-CoorNow[0][i])*a[0][i]/m_2+(CoorNow[1][i]-CoorNow[2][i])*a[1][i]/m_2)*(h**2)/2;
		CoorNext[2][i]=CoorNow[2][i]+((CoorNow[2][i]-CoorNow[1][i])*a[1][i]/m_3+(CoorNow[2][i]-CoorNow[0][i])*a[2][i]/m_3)*(h**2)/2;
		i++;
	};
	i=0;
	while(i<3)
	{
		if(i==0){color='blue'};
		if(i==1){color='green'};
		if(i==2){color='red'};
		//if(Time==49999){t=2;};
		DrawPoint3D(CoorNow[i][0],CoorNow[i][1],CoorNow[i][2],1,50,color);i++;
	}
	i=0;
	while(i<3)
	{
		r1+=CoorNow[0][i]**2;
		r2+=CoorNow[1][i]**2;
		r3+=CoorNow[2][i]**2;
		i++;
	}
	
	if((Math.abs(r1-r2)<=0.1)&&(Math.abs(r1-r3)<=0.01)&&(Math.abs(r3-r2)<=0.01)){alert(CoorNext);return false;};
	t=1;
	EquateArrays(CoorNow,CoorNext)
	return true;
 };
 DrawLine3D(-7500,0,0,7500,0,0);
DrawLine3D(0,-7500,0,0,7500,0);
DrawLine3D(0,0,-7500,0,0,7500);

 
 document.addEventListener('mousedown', function(e) {//context.clearRect(0, 0, canvas.width, canvas.height);
  

    let Time=0;
 while(Time<805000)
 { let p;
	p=DrawMoveThreeObj(CoorNow,CoorNext,Time);
	if(!p){return}
	Time++;
 };
	//EquateArrays(CelssFinish,CellsNow);
  });