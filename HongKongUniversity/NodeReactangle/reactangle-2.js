module.exports= function(x,y,callback){

try{
	if(x< 0 || y < 0){
		throw new Error('dude negative and 0 not allowed here a = '+ x +' and b ='+b);
	}else{
		callback(null,{
			perimeter : function(){
				return (2*(x+y));
			},
			area : function(){
				return x*y;
			}
		});
	}
}catch(e){
	callback(e,null)
}
}