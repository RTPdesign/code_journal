// 
var a = {};
for(var x = 0; x < 3; x++){
  (function (j){
   a[j] = function(){
     return (j)
   };
  }) (x);
}
