	var PrintButton1 = new Image();
	var PrintButton2 = new Image();
	var logo1 = new Image();
	var logo2 = new Image();
if (document.images) {
	PrintButton1.src = "Images/Print1.png"
	PrintButton2.src = "Images/Print2.png"
	logo1.src = "Images/logo1.png"
	logo2.src = "Images/logo2.png"
}


		var imgArray = new Array(
			'image1Lg.jpg',
			'image2Lg.jpg',
			'image3Lg.jpg',
			'image4Lg.jpg'
			

		);


		var titleArray = new Array(
			'Boy sitting on Pig',
			'German Shephard',
			'Woman riding Horse',
			'Irish Setter'
			
		);
			
		var imgPath = "Images/fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		
