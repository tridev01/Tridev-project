function slider(){
  var lis = document.getElementById('audio').getElementsByTagName('li');
  for (var i = 0; i < lis.length; i++){
    lis[i].onclick = function (){
      document.getElementById('myAud').src='song/'+this.id+'.mp3';
  document.getElementById('caption').innerHTML=this.title;
  document.getElementById('change').src='pic/'+this.id+'.jpg';   
  
    }
  }   
  document.getElementById('change').src='pic/song1.jpg';   
  document.getElementById('caption').innerHTML=lis[0].title;    
}
window.onload = slider;


