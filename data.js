var data = {
  '1': { 'name': 'Men Funky Designed Casual T-Shirt', 'price': 900, 'image': "./images/products/f1.jpg"},
  '2': { 'name': 'Men Floral Printed T-Shirt', 'price': 800, 'image': "./images/products/f2.jpg"},
  '3': { 'name': 'Men Junglee Casual T-Shirt', 'price': 1000, 'image': "./images/products/f3.jpg"},
  '4': { 'name': 'Men Pink & White Slim Fit  Floral Printed Casual T-Shirt', 'price': 1200, 'image': "./images/products/f4.jpg"},
  '5': { 'name': 'Men Navy Blue & Pink Slim Fit Printed Casual T-Shirt', 'price': 800, 'image': "./images/products/f5.jpg"},
  '6': { 'name': 'Men Navy & Brown Casual Fit Combo Shirt', 'price': 1200, 'image': "./images/products/f6.jpg"},
  '7': { 'name': 'Men Casual Floral Cargo Pants', 'price': 600, 'image': "./images/products/f7.jpg"},
  '8': { 'name': 'Women Cat Printed Tunic Top', 'price': 900, 'image': "./images/products/f8.jpg"},
  '9': { 'name': 'Men Light Blue Classic Fit Casual Shirt', 'price': 900, 'image': "./images/products/n1.jpg"},
  '10': { 'name': 'Men Grey Classic Fit Casual Shirt', 'price': 800, 'image': "./images/products/n2.jpg"},
  '11': { 'name': 'Men White Classic Fit Casual Shirt', 'price': 600, 'image': "./images/products/n3.jpg"},
  '12': { 'name': 'Men Cameo Casual T-Shirt', 'price': 900, 'image': "./images/products/n4.jpg"},
  '13': { 'name': 'Men Closed Navy Denim Shirt', 'price': 1000, 'image': "./images/products/n5.jpg"},
  '14': { 'name': 'Men\'s Striped Chinos Shorts', 'price': 800, 'image': "./images/products/n6.jpg"},
  '15': { 'name': 'Beige Cotton Linen Shirt', 'price': 900, 'image': "./images/products/n7.jpg"},
  '16': { 'name': 'Linen Cotton Stand Collar Short Sleeve Shirt', 'price': 1100, 'image': "./images/products/n8.jpg"}, 
    
}

//fetching query parameters from url
let params = new URLSearchParams(window.location.search);
let prodid = params.get("pid");

//fetching item details
let name = data[prodid]['name'];
let price = data[prodid]['price'];
let img = data[prodid]['image'];

var MainImage = document.getElementById("MainImg")  
var smallimg = document.getElementsByClassName("small-img")

var prodname = document.getElementsByClassName("pname")[0]
prodname.textContent = name;

var prodprice = document.getElementsByClassName("pprice")[0]
prodprice.textContent += price;
MainImage.src = img;

let cartBtn = document.getElementById("cart-btn");
cartBtn.onclick = function() {
  this.innerHTML = "Added to Cart";
}


// As adding small images is complex we will just comment it out
// smallimg[0].onclick = function() {
//   MainImage.src = smallimg[0].src;
// }
// smallimg[1].onclick = function() {
//   MainImage.src = smallimg[1].src;
// }
// smallimg[2].onclick = function() {
//   MainImg.src = smallimg[2].src;
// }
// smallimg[3].onclick = function() {
//   MainImg.src = smallimg[3].src;
// }
