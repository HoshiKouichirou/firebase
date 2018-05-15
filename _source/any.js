$(function() {
  const Ref = firebase.database().ref('hiButton');
//test すはや
	if(snapshot.val().hi_button !== true){
  	let active = false; 
		 }

  function on(){
    if(active === false){
      active = true;
      console.log("off")
    }
    else{
      active = false;
      console.log("on")
    }
    return active;
  }

  Ref.on('child_added', function(snapshot) {
    if(snapshot.val().hi_button === true){
      $("button").addClass("active");
    }
    if(snapshot.val().hi_button === false){
      $("button").toggleClass("active");
    }
    active = snapshot.val().hi_button;
  });

  $("button").click(function(){
    Ref.push({
      hi_button: on()
    });
  });

})
