// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var arg= [];
  var node = document.body;
    var recFunc = function (node,func) {//have a sub function to recurse over
        func(node);                    
        node = node.firstChild;
        while(node) {  
            recFunc(node,func);
            node = node.nextSibling;
        }

    };
  var add = function(node){
    if(node.classList != null){//checking to see if we are at the end of the tree
      if(node.classList.contains(className)) arg.push(node);
    }
  }
  recFunc(node, add);
  return arg;
}