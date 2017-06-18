var rect =require("./reactangle-1.js");

function solveRect(x,y){
	if(x===0 || y===0){
		console.log('some is 0, a-  '+x + '/nb='+y);
	}else{
		console.log("Result area " + rect.area(x,y));
		console.log("Result permimeter " + rect.perimeter(x,y));
	}


}
solveRect(4,5);
solveRect(1,0);