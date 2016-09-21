'use strict';

function getEnv(inHexo){
	
	var DEV = 'development';
	var PRD = 'production';
	
	if(inHexo){
		if(inHexo.env.args._ && inHexo.env.args._.length > 0){
			for(var i=0; i < inHexo.env.args._.length; i++){
				if(inHexo.env.args._[i] == "s" || inHexo.env.args._[i] == "server")return DEV;
				if(inHexo.env.args._[i] == "d" || inHexo.env.args._[i] == "deploy")return PRD;
				if(inHexo.env.args._[i] == "g" || inHexo.env.args._[i] == "generate")return PRD;
			}
		}
	}
	return null;
};

module.exports.env = function (inHexo){
	return getEnv(inHexo);
}