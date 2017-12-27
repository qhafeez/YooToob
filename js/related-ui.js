var relatedUI = {

	displayInitialThumbnails:function(){
		$("#relatedVideosCont").html(lll.autoDisplay());
		

		this.addHover();

		// if(lll.noMoreVids()){
		// 	this.hideShowMoreButton();
		// } else{
			this.clickHandler();
		// }
	},

	hideShowMoreButton: function(){
		$("#show-more").hide();
	},

	showShowMoreButton: function(){
		$("#show-more").show();
	},

	displayNextThumbnails: function(){



		$("#relatedVideosCont").append(lll.displayMore());
		this.addHover();
	},

	clickHandler: function(){

		var self = this;
		$("#show-more").click(function(){

			
			

			// if(lll.noMoreVids()){
			// 	self.hideShowMoreButton();
			// } else{

				self.hideShowMoreButton();
				self.appendLoadingGif();

			setTimeout(function(){
				self.displayNextThumbnails();
				self.showShowMoreButton();
				self.removeLoadingGif();

				if(lll.noMoreVids()){
					self.hideShowMoreButton();
				}

			}, 1000);	

			
		});


	},

	addHover:function(){
		var self = this;

		$(".thumbnails").hover(function(){
				console.log($(this));
		
			console.log(self);

		 		var $fileName = $(this).attr("src");
		 		self.imgHover($fileName, $(this));

			}, function(){

				
				var $fileName = $(this).attr("src");
		 		
		 		self.imgHover($fileName, $(this));

		});

	},

	imgHover: function(filename, scope){


				 		var filename = filename;

				 		if (filename.indexOf(".jpg") !== -1){		 			
				 		var $fileNameSansExt = filename.slice(0,-3);
				 		var $fileNameWithNewExt = $fileNameSansExt+"webp";

				 		scope.attr("src", $fileNameWithNewExt);
						console.log(scope);
					} else {
							var $fileNameSansExt = filename.slice(0,-4);
				 		var $fileNameWithNewExt = $fileNameSansExt+"jpg";

				 		scope.attr("src", $fileNameWithNewExt);
						console.log(scope);
					}

		 		},

		 appendLoadingGif: function(){

		 	var $loadingGif = $("<img src='assets/images/2.svg' />");

		 	$("#loading-svg").append($loadingGif);

		 },

		 removeLoadingGif: function(){

		 	$("#loading-svg").empty();

		 }		
	
}