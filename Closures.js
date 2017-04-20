// 
// Creates object in memory
var a = {};
// for loop creates var x points it 0, 
for(var x = 0; x < 3; x++){
  //Creates a function 
  (function (j){
   a[j] = function(){
     return (j)
   };
  }) (x);
}
