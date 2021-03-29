//Global Variables ***IMPORTANT***
var encryptbtn;
var canvas;
var context;
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+=-*, ."

//Starting Function
function init(){
  var image = document.getElementById('SourceImage');
  encryptbtn = document.getElementById('Encrypt');
  canvas = document.getElementById('Canvas1');
  context = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;

  //New Image Button Press
  encryptbtn.addEventListener('click', ModifiedImage);
  encryptbtn.addEventListener('click', drawImage(image));
}

//Show Original Image on the Canvas(INVISIBLE)
function drawImage(image){
  context.drawImage(image, 0, 0);
}

//Modified Image Shows ***IMPORTANT***
function ModifiedImage(){
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  console.log(imageData);
  document.getElementById('Message').value += " ";
  encrypt(imageData.data);
  context.putImageData(imageData, 0, 0);
}

//Encryption Function
function encrypt(data){
  //Important Variables
  var message = document.getElementById("Message");
  var messageLength = message.value.length;
  var output = document.getElementById('Canvas1');
  var messageLetter;
  var letter = 0;
  var pixel = 0;
  //Encryption Algorithm
  for (var i = 0; i < messageLength; i++) {
    messageLetter = message.value.charAt(letter);
    letter += 1;
    console.log("Message: " + messageLetter);
    //Pixel Location Controller
    pixel += Math.floor(data.length/messageLength);
    console.log("Pixel Location Controller: " + pixel);

    //Changing Pixel Data
    if (characters.includes(messageLetter) == true) {
      if (data[pixel] + characters.indexOf(messageLetter) + 1 >= 255) {
        data[pixel] -= characters.indexOf(messageLetter) + 1;
      }else {
        data[pixel] += characters.indexOf(messageLetter) + 1;
      }
    }
  }
}


//Start the Program
window.addEventListener('load', init);
