
console.log('loaded sucessfully');
//img.onclick=function(){
//  img.style.marginLeft="100px"
//};
//MOve img to right

//code for move madi png
//var marginLeft=0;
//function moveRight() {
//  marginLeft = marginLeft+1;
//  img.style.marginLeft = marginLeft+'px';
//}

//img.onclick = function() {
//  var interval=setInterval(moveRight,50);
//};
var button = document.getElementById('counter');
//(old code)var counter = 0;
button.onclick = function count() {
  // Create a request Object

  var request = new XMLHttpRequest();
  //capture the response and save in a variable
  request.onreadystatechange = function functionName() {
    if(request.readyState ===  XMLHttpRequest.DONE){
      //Take some action
        if(request.status === 200){
          var counter = request.responseText;
          //Render in the correct span
          var span = document.getElementById('count');
          span.innerHTML=counter.toString();

        }
    }
    //Not done Do Somthing else
  };
  //(old code) counter = counter + 1;
  request.open('GET','http://127.0.0.1:8080/counter',true);
  request.send(null);
};
