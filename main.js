var images = ["https://www.k5learning.com/sites/all/files/mom.png","https://thumbs.dreamstime.com/z/illustration-cartoon-father-carrying-son-his-arms-cartoon-father-carrying-son-his-arms-145730921.jpg","https://t3.ftcdn.net/jpg/02/62/72/10/360_F_262721041_9mNNRQadoz552DN2NTFNbGBHN14K9D58.jpg","https://image.shutterstock.com/image-vector/vector-graphic-illustration-grandmother-holding-260nw-1783811546.jpg","https://thumbs.dreamstime.com/b/cute-boy-cartoon-illustration-90163697.jpg","https://www.chicagotribune.com/resizer/nnQ3bY7X6794G-zAJXp13d4r4nI=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/7UZXJVP42VG5VISQNDAUKHJDJQ.jpg"];
var names = ["Mom", "Dad","Grandfather","Grandmother","Me", "Us"];
var i = 0;

function update(){

  var arraylength = images.length - 1;
  var updatedimage = images[i];
  var updatedtext = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>arraylength){
  i = 0;
                
  }
}
