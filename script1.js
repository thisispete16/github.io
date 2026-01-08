var arrayImg = new Array();
arrayImg[0] = "100x100";
arrayImg[1] = "150x150";
arrayImg[2] = "200x200";
arrayImg[3] = "250x250jjj";
arrayImg[4] = "300x300";
arrayImg[5] = "350x350";
arrayImg[6] = "400x400";

getRandomImage(arrayImg, "");

function getRandomImage(imgAr, path) {
  path = path || "http://fpoimg.com/"; // default path here
  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr[num];
  var imgStr = '<img src="' + path + img + '" alt = "">';
  document.write(imgStr);
  document.close();
}

