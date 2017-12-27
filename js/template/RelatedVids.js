function RelatedVids(thumbs){

	this.thumbnails =thumbs;
	this.arrayLength = this.thumbnails.length;
	this.index =0;
}

	RelatedVids.prototype.autoDisplay = function(){
		//display first of array automatically
		
		var a = [];
		var self = this;

		for(var i = 0; i < 10; i++){

			a.push(self.thumbnails[i]);
			
		}
		console.log(a);
		

		this.index=i;
		return this.render(a);


	};

	RelatedVids.prototype.displayMore = function(){
		var increment = this.incrementValue();

		var a = []
		for(var i = this.index; i < this.index+increment; i++){
			a.push(this.thumbnails[i]);
		}
		this.index = i;
		return this.render(a);
		
		// console.log(increment);
		//display more of the array
	};

	RelatedVids.prototype.incrementValue = function(){

		if(this.index+10 < this.arrayLength){
			return 10;
		} else {
			return this.arrayLength - this.index;
		}

	}

	RelatedVids.prototype.noMoreVids = function(){
		return this.arrayLength === this.index;
	}

	RelatedVids.prototype.render = function(thumbnails){
		//render to the screen

		var list="";

		thumbnails.forEach(function(i){

			list+= '<div class="relVideo">';
			list+= '		<div class="relImgCont">';
			list+= '	<div class="relImg" >';
									
			list+= '<img class="thumbnails" src='+i.image+' />';

			list+= '</div>';
			list+= '	<div class="timer-cont">';
			list+= '<div  class="timer-icon oi" data-glyph="timer" aria-hidden="true"></div>';
			list+= '</div>';
			list+= '<div class="length-container">';
			list+= '<div class="length">10:00</div>';
			list+= '</div>';
			list+= '</div>';
			list+= '<div class="relDescriptionCont">';
			list+= '<div class="relDescTitle">';
			list+= '<span> ' + i.title +'</span>';
			list+= '</div>';
			list+= '<div class="relDescUserName">';
			list+= '<span>Username</span>';
			list+= '</div>';
			list+= '<div class="relDescViews">';
			list+= '<span>1.3K views</span>';
			list+= '</div>';
			list+= '</div>';
			list+= '</div>';
		});

		return list;


	};	




var vids = new RelatedVids([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]);