var rect = {

	perimeter : function(x,y){
		return (2 * (x + y));
	},
	area : function(x,y){
		return (x*y)
	}
}

function solveRect(x,y){
	if(x===0 || y===0){
		console.log('some is 0, a-  '+x + '/nb='+y);
	}else{
		console.log("Result area " + rect.area(x,y));
		console.log("Result permimeter " + rect.perimeter(x,y));
	}


}
solveRect(3,4);
solveRect(1,5);