
var setParent = function(o){
//   console.log('jalan 1', o)    
  if(o.sub != undefined){
    // console.log('jalan 2')
    for(const n in o.sub){
      o.sub[n].parent = o
      setParent(o.sub[n])
    }
  }
}
