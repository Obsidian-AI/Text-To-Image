//Global Variables
var image1;
var image2;
var canvas1;
var canvas2;
var context1;
var context2;
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+=-*, ."

//Start Up Process
function initiate() {
  var button = document.getElementById('Decrypt');
  image1 = document.getElementById('decrypt-original');
  image2 = document.getElementById('decrypt-modified');
  canvas1 = document.getElementById('Canvas2');
  canvas2 = document.getElementById('Canvas3');
  canvas1.height = image1.height;
  canvas1.width = image1.width;
  canvas2.height = image2.height;
  canvas2.width = image2.width;
  context1 = canvas1.getContext('2d');
  context2 = canvas2.getContext('2d');

  button.addEventListener('click', imgDrawing(image1, context1));
  button.addEventListener('click', imgDrawing(image2, context2));
}

//Send Image to Canvas
function imgDrawing(image, ctx) {
  ctx.drawImage(image, 0, 0);
}

//Access the Image Data
function ImageData() {
  var imagedata1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  var imagedata2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  console.log(imagedata1);
  console.log(imagedata2);
  decrypt(imagedata1.data, imagedata2.data);
}

//Decryption Function
function decrypt(dataOne, dataTwo) {
  var shortHistory = "";
  var message = "";
  var incorrect = 0;

  //Decryption Algorithm
  for (var i = 0; i < dataOne.length; i++) {
    shortHistory = "";
    if (dataOne[i] == dataTwo[i]) {
      //Keep Empty
    }else{
      if (dataOne[i] > dataTwo[i]) {
        shortHistory += dataOne[i] - dataTwo[i];
      }else {
        shortHistory += dataTwo[i] - dataOne[i];
      }
    }

    //Number to Text Conversion
    if (shortHistory > 0) {
      console.log("Message: " + characters.charAt(shortHistory - 1));
      console.log("Shorthistory: " + shortHistory);
      message += characters.charAt(shortHistory - 1)
    }
  }
  document.getElementById('decrypted-message').innerHTML = message;
}

//Start the Program
window.addEventListener('load', initiate);
