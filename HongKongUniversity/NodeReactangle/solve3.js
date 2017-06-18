var args = require("yargs")
			.usage("Usage : node $0 --l=[num] --b=[num]")
			.demand(['l','b'])
			.argv;

var rect = require("./reactangle-2");

function solveRect(x,y){
	rect(x,y,function(err,reactangle){

		if(err){
				console.log(err);
		}else{
			console.log("Area = > "+ reactangle.area());
			console.log("perimeter = > "+ reactangle.perimeter());
		}
	});


}
solveRect(args.l,args.b);
solveRect(1,0);