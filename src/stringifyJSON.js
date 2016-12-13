var stringifyJSON = function(obj) {
	
  if(typeof obj === 'number' || typeof obj === 'boolean'){//checking to see if not a array or object
    return obj.toString();
}

  if(typeof obj === 'string'){//checking to see if not a array or object
    return '"' + obj + '"';              
  }
 
  if(typeof obj === 'number'){//checking to see if not a array or object
    obj += obj.toString();
    return (obj);
  }
  if(obj === null || typeof obj === 'undefined' || typeof obj === 'function'){
    return 'null';
  }
  
  if(Array.isArray(obj)){
    var result = "[";
    for(var i = 0; i < obj.length; i++){
      if(i !== 0) {result += ","};
      result += stringifyJSON(obj[i]);
    }
    return result += "]";
  }
  
    if(typeof obj === 'object'){
   var arg = "{";//initializing return string

      var counter = 0;

      for (var rel in obj){
      	if(typeof obj[rel] === 'function'){
      		return '{}';
      }

        if(counter !== 0) {
        	arg += ",";
        }
          counter++;
        arg += '"' + rel + '"' + ":";
        
         if(typeof obj[rel] === 'object' && obj[rel] != null){
       arg += stringifyJSON(obj[rel]);
       }
        else if(typeof obj[rel] === 'string'){
         arg+= '"' + obj[rel] + '"';
       }
       else{
        arg += obj[rel];
       }
      }
        arg += "}";
    return arg;
    }
}; 