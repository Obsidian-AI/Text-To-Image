var loadFile = function(event, source) {
    var image = document.getElementById(source);
    image.src = URL.createObjectURL(event.target.files[0]);
};

download_img = function(el) {
  var imageURI = document.getElementById('Canvas1').toDataURL("image/jpg");
  el.href = imageURI;
};
