function Colors(){
  var randcol= "";
  var hexcomb="0123456789ABCDEF";
  for(var i=0; i<6; i++){
  randcol += hexcomb[Math.floor(Math.random()*5)];
  }
document.body.style.backgroundColor= "#"+randcol;
}
