// JavaScript Code 
	   
// DOM variable decleared
var darkFontSocial = document.getElementById("dark-font-social");
 
var logoNav = document.getElementById("logo-nav");

var logo = document.getElementById("logo");

var sitename = document.getElementsByClassName("sitename");

var navItem = document.getElementsByClassName("nav");

var asideLeft = document.getElementById("aside-left");

var dark = document.getElementById("dark"); //Press Button

var darkMode = document.getElementById("dark-mode");

var elemBody = document.body;

var elemLi = document.getElementsByTagName("li");

var topic = document.getElementById("topic");

var asideRight = document.getElementById("aside-right");

var content = document.getElementById("content");

var footer = document.getElementById("footer");

var learning = document.getElementById("learning");

var hoverDot = document.getElementsByClassName("dot"); 

var asideRightAnchor = document.querySelectorAll("#aside-right a");

var learningDiv = document.querySelectorAll("#learning > div");

var active = document.getElementsByClassName("active");    

var rightAnchorLi = document.querySelectorAll("#aside-right a li");

var w3schoolDrop = document.getElementById("w3school-com");

var w3DropList = document.getElementsByClassName("dropdown-list");

var navA = document.querySelectorAll("#logo-nav #nav > a");

var navLogonav = document.querySelectorAll("#logo-nav #nav");

var menuBar = document.getElementById("menu");

var dfsMenu = document.getElementById("menu-dfs");

var rightMenuOpen = document.getElementById("right-menu-open");

var leftMenuOpen = document.getElementById("left-menu-open");

var rightMenuClose = document.getElementById("right-menu-close");

var leftMenuClose = document.getElementById("left-menu-close");

var slide = document.getElementsByClassName("slide");

var next = document.getElementsByClassName("next");

var prev = document.getElementsByClassName("prev");

var newSlide = document.getElementsByClassName("a-slide");

var dropDownA = document.querySelectorAll("#logo-nav .dropdown-list a");
 

var countDarkTheme = 0;
var countMenu = 0;
var countDFS = 0;
	
    //counter  function for darkTheme

    var counterDarkTheme = (function(){ 
        return function() {
         countDarkTheme += 1;
         return countDarkTheme;
        }
    })(); 

    //counter function for menu

    var counterMenu = (function(){ 
        return function() {
         countMenu += 1;
         return countMenu;
        }
    })(); 
	
    //counter function for menudfs 

    var counterDFS = (function() {
	    return function() {
	     countDFS +=1;
	     return countDFS;
	    }
    })();    


    //slide function
	
    var slideIndex = 1;

    function plusSlides(n) {
	    if(window.innerWidth <= 1050 ) {
	     showSlides(slideIndex += n);
	    }
		
	    else {
	     //nothing
	    }
    }
	  
    function showSlides(n) {
         var i;

	    if(window.innerWidth <= 1050 && window.innerWidth > 650) {
		    if(n > slide.length) {
	         slideIndex = 1;
            }
   
            if(n < 1 ) {
	         slideIndex = slide.length 
            }
		
		    for(i=0; i<newSlide.length; i++) {
	         newSlide[i].style.display = "inline-block";
            }
   
            for(i=0; i<slide.length; i++) {
	          slide[i].style.display = "none";
            }
             slide[slideIndex - 1].style.display = "inline-block";
		    }
		
	    else if(window.innerWidth <= 650) {
        
		    if(n > newSlide.length) {
	         slideIndex = 1;
            }
   
            if(n < 1 ) {
	         slideIndex = newSlide.length 
            }
		
		    for(i=0; i<slide.length; i++) {
	         slide[i].style.display = "inline-block";
            }
		
            for(i=0; i<newSlide.length; i++) {
	         newSlide[i].style.display = "none";
            }
		     newSlide[slideIndex - 1].style.display = "inline-block";
	    }
		
		    else {
		     //nothing
		    }
    }
	
//darkTheme function dark mode control
	  
    function darkTheme() {
	
        dark.onmousedown = function() {
          darkMode.style.border = "1px solid #4D90FE";
          darkMode.style.boxShadow = "0 0 17px #4D90FE";
          dark.style.transform = "translateY(2px)";
        }

        dark.onmouseup = function() {
          darkMode.style.border = "1px solid #fff";
          darkMode.style.boxShadow = "0 0 0 transparent";
          dark.style.transform = "translateY(0px)";
        }
	  
        darkMode.onmousedown = function() {
          dark.style.transform = "translateY(2px)";
          darkMode.style.boxShadow = "0 0 17px #4D90FE";
          dark.style.transform = "translateY(2px)";
        }

        darkMode.onmouseup = function() {
          dark.style.transform = "translateY(0px)";
          darkMode.style.border = "1px solid #fff";
          darkMode.style.boxShadow = "0 0 0 transparent";
        }
	  
        darkMode.focus();
  
        if(counterDarkTheme() % 2 !== 0) {
	      dark.style.backgroundColor = "black";
          dark.style.boxShadow = "0 5px #fff";
		  
          elemBody.style.backgroundColor = "#282c34";
          elemBody.style.color = "#fff";
		  
          topic.style.boxShadow = "0 6px 3px 0 rgba(256,256,256,0.7), 0 0px 10px 0 rgba(256,256,256,0.7)";
	      topic.style.backgroundColor = "#555";
		  
          logoNav.style.boxShadow = "0 6px 10px 0 #c1c8e4, 0 0px 15px 0 #c1c8e4";
		  
          asideLeft.style.boxShadow = "0 6px 10px 0 #c1c8e4, 0 0px 15px 0 #c1c8e4";
		  
          asideRight.style.boxShadow = "0 6px 10px 0 #c1c8e4, 0 0px 15px 0 #c1c8e4";
		  
          content.style.boxShadow = "0 6px 10px 0 #c1c8e4, 0 0px 15px 0 #c1c8e4";
		  
          footer.style.boxShadow = "0 6px 10px 0 #c1c8e4, 0 0px 15px 0 #c1c8e4";
		  
          learning.style.backgroundColor = "#282c34";
          learning.style.boxShadow = "0 6px 3px 0 #c1c8e4, 0 0px 10px 0 #c1c8e4";
    
	
	      var i;
	      var navLen = navItem.length;
	      var liLen = elemLi.length;
	      var learnDiv = learningDiv.length;
	      var lenActive = active.length;
	      var lenDropA = dropDownA.length;
		   
	        for(i=0; i<navLen; i++) {
              navItem[i].style.color = "#fff";
            }
	
            for(i=0; i<liLen; i++) {
              elemLi[i].style.color = "#fff";
            }
       
	        for(i=0; i<learnDiv; i++) {
		      learningDiv[i].style.backgroundColor = "#555";
		      learningDiv[i].style.boxShadow = "0 6px 3px 0 rgba(256,256,256,0.7), 0 0px 10px 0 rgba(256,256,256,0.7)";
	        }
	
	        for(i=0; i<lenActive; i++) {
              active[i].style.color = "#1a73e8";
			}
	
	        for(i=0; i<lenDropA; i++) {
		      dropDownA[i].style.color = "#fff";
	        }

            if(window.innerWidth <= 1050) {
	          asideLeft.style.backgroundColor = "#282c34";
			  
	          asideRight.style.backgroundColor = "#282c34";
			  
	          navLogonav[0].style.backgroundColor = "rgb(40, 44, 52)";
            }
  
            else {
	          asideLeft.style.backgroundColor = "transparent";
			  
	          asideRight.style.backgroundColor = "transparent";
			  
	          navLogonav[0].style.backgroundColor = "transparent";
            }	
	
	
		   
        } 
	
	//darkTheme else part 
	   
        else {
          dark.style.backgroundColor = "white";
          dark.style.boxShadow = "0 5px #000";
		  
	      elemBody.style.backgroundColor = "#fff";
	      elemBody.style.color = "#000";
		  
          topic.style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.7), 0 2px 10px 0 rgba(0,0,0,0.7)";
          topic.style.backgroundColor = "#F1F1F1";
		  
          logoNav.style.boxShadow = "0 6px 10px 0 rgba(0,0,0,0.7), 0 0px 15px 0 rgba(0,0,0,0.7)";
		  
          asideLeft.style.boxShadow = "0 0 4px 0 rgba(0,0,0,0.7), 0 2px 10px 0 rgba(0,0,0,0.7)";
		  
          asideRight.style.boxShadow = "0 0 4px 0 rgba(0,0,0,0.7), 0 2px 10px 0 rgba(0,0,0,0.7)";
		  
          content.style.boxShadow = "0 0 4px 0 rgba(0,0,0,0.7), 0 2px 10px 0 rgba(0,0,0,0.7)";
		  
          footer.style.boxShadow = "0 0 4px 0 rgba(0,0,0,0.7), 0 2px 10px 0 rgba(0,0,0,0.7)";
		  
          learning.style.backgroundColor = "#fff";
          learning.style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.7), 0 2px 10px 0 rgba(0,0,0,0.7)";
	  
	      var i;
          var navLen = navItem.length;
	      var liLen = elemLi.length;
	      var learnDiv = learningDiv.length;
	      var lenActive = active.length;
          var lenDropA = dropDownA.length;	
	
            for(i=0; i<navLen; i++) {
	          navItem[i].style.color = "#000";
            }
		   
            for(i=0; i<liLen; i++) {
              elemLi[i].style.color = "#000";
            }
	
	        for(i=0; i<learnDiv; i++) {
		      learningDiv[i].style.backgroundColor = "#f1f1f1";
		      learningDiv[i].style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.7), 0 2px 10px 0 rgba(0,0,0,0.7)";
	        }
	
	        for(i=0; i<lenActive; i++) {
		      active[i].style.color = "#1a73e8"; 
	        }
	
	        for(i=0; i<lenDropA; i++) {
		      dropDownA[i].style.color = "#000";
	        }
	
	        if(window.innerWidth <= 1050) {
	          asideLeft.style.backgroundColor = "#FFF";
			  
	          asideRight.style.backgroundColor = "#FFF";
			  
	          navLogonav[0].style.backgroundColor = "#c1c8e4";
            }
  
            else {
	          asideLeft.style.backgroundColor = "transparent";
			  
	          asideRight.style.backgroundColor = "transparent";
			  
	          navLogonav[0].style.backgroundColor = "transparent";
            }
	
        } 
	

    }
  
  
//fontSize control function
  
    var counterFont = 0;   
	
//fontSize Increase function	
	var fontInc = (function () {
	    return function () {			
	      counterFont += 1;	      
	        if(counterFont < 3 && counterFont > -3) {
		
                switch(counterFont)   {
		          case -2: 
		             document.body.style.fontSize = "14px";
		             break;
					 
		          case -1: 
                     document.body.style.fontSize = "16px";
                     break;
					 
		          case 0: 
                     document.body.style.fontSize = "18px";
                     break;
					 
                  case 1: 
                     document.body.style.fontSize = "20px";
		             break;
					 
                   case 2: 
                     document.body.style.fontSize = "22px";
		             break;
					 
                }
            }
			
         	else{
              counterFont = 2;
            }
          return counterFont;
        }
    })();
	   
// fontSize Decrease function
	   
	var fontDec = (function (){
	    return function() {
		  counterFont -= 1;
				 
	        if(counterFont > -3 && counterFont < 3) {
	            switch(counterFont) {
		          case -2: 
		             document.body.style.fontSize = "14px";
		             break;
					 
		          case -1: 
		             document.body.style.fontSize = "16px";
		             break;
					 
		          case 0: 
		             document.body.style.fontSize = "18px";
		             break;
					 
		          case 1: 
		             document.body.style.fontSize = "20px";
		             break;
					 
		          case 2: 
		             document.body.style.fontSize = "22px";
		             break; 
                }
            }
				 
	        else {
	          counterFont = -2;
            }
	      return counterFont;
        }
    })(); 
	   
//fontSize resets function 	   
	var fontReset = (function (){
	    return function() {
		  counterFont = 0;
          document.body.style.fontSize = "18px";
          return counterFont;
        }
    })();
	
//menu function 
	
	function menuFunction() {
	  var pos = -100;

	    if(counterMenu() % 2 !== 0) {
		  var clearItOpen = setInterval(menuAniOpen, 1);
		 
		    function menuAniOpen() { 
			
		        if(window.innerWidth <= 1050 && window.innerWidth > 650) {

		            if(pos == 0) {
		              clearInterval(clearItOpen); 
		              navLogonav[0].style.display = "block";
		            }
		  
		            else {
		              pos++;
		              asideLeft.style.display = "block";
		              asideLeft.style.right = pos + "%";
		              asideLeft.style.left = null;
		            }
		        }
		
		        else if(window.innerWidth <= 650) {
		          navLogonav[0].style.display = "block";
		          clearInterval(clearItOpen);
		        } 
		
		        else {
		          clearInterval(clearItOpen);
		        }
	        }
		 
	    }
		
	    else {
		  var pos = 0;
		  var clearItClose = setInterval(menuAniClose, 1);

		    function menuAniClose() {
		        if(window.innerWidth <= 1050 && window.innerWidth > 650) {
			 
		            if(pos == -50) { 
		              clearInterval(clearItClose);
	                  navLogonav[0].style.display = "none";
		              asideLeft.style.display = "none";
		            }
		 
		            else {
		              pos--;
		              asideLeft.style.right = pos + "%";
		            }
		        }
		
		        else if(window.innerWidth <= 650) {
		          navLogonav[0].style.display = "none";
		          clearInterval(clearItClose);
		        }
			
		        else {
		          clearInterval(clearItClose);
		        }
	        }
	    }
	}
	
//dfsmenu function 
    function menuDFS() {
	    if(counterDFS() % 2 !== 0) {
		  darkFontSocial.style.height = "auto";
		  menuBar.style.top = "-257px";
		  
		  var i, len;
		  len = newSlide.length;
		  
		    for(i=0; i<len; i++) {
			  newSlide[i].style.display = "block";
			  newSlide[i].style.textAlign = "center";
            }
	    }
	   
	    else {
		  darkFontSocial.style.height = "50px";
		  menuBar.style.top = "-57px";
		  
		  var i, len;
		  len = newSlide.length;
		  
		    for(i=0; i<len; i++) {
			  newSlide[i].style.display = "inline-block";
			  newSlide[i].style.textAlign = "center";
		    }
		  showSlides(slideIndex);
	    }
    }

//close all menu
	content.onclick = function() {
	    if(window.innerWidth <= 1050 && window.innerWidth> 650) {
		  asideLeft.style.display = "none";
		  
		  asideRight.style.display = "none";
		  
		  navLogonav[0].style.display = "none";
		  
		  leftMenuClose.style.display = "none";
		  leftMenuOpen.style.left = "0";
		  
		  rightMenuClose.style.display = "none";
		  rightMenuOpen.style.display = "inline-block";
		  rightMenuOpen.style.right = "0";
		  
		  countMenu = 0;
	    }
	 
	    else if(window.innerWidth <= 650) {
		  leftMenuOpen.style.display = "inline-block";
		  leftMenuOpen.style.left = "0";
		  leftMenuClose.style.display = "none";
		  
		  rightMenuClose.style.display = "none";
		  rightMenuOpen.style.display = "inline-block";
		  rightMenuOpen.style.right = "0";
		  
		  asideLeft.style.display = "none";
		  
		  asideRight.style.display = "none";
		  
		  navLogonav[0].style.display = "none";
	
		  countMenu = 0;
	    }
	} 
	
//left aside menu open function at window.innerWidth < 650

    function asideLeftMenuOpen() {
	  var pos = -75;
	  var point = 0;
	  var post = 0;
	  var points = 75;
	  var clearIt = setInterval(menuAni, 1);
         

	    function menuAni() {
		    if(window.innerWidth <= 650) {
		  
		        if(pos == 0 && point == 75 && post == -75 && points == 0) {
		          clearInterval(clearIt);
				  
		          asideRight.style.display = "none";
				  
		          rightMenuOpen.style.display = "inline-block";
		          rightMenuOpen.style.right = "0";
		          rightMenuClose.style.display = "none";
				  
		          leftMenuOpen.style.display  = "none";
		          leftMenuClose.style.display = "inline-block";
		          leftMenuClose.style.left = "75%";
		        }
		 
		        else {
			      pos++;
			      point++;
			      post--;
			      points--;
			  
			      asideRight.style.right = post + "%";
			  
			      asideLeft.style.display = "block";
			      asideLeft.style.left = pos + "%";
			      asideLeft.style.right = null;
			  
			      leftMenuOpen.style.left = point + "%";
			  
			      rightMenuClose.style.right = points + "%";
		        }
	        }
	    } 
	}
	
//right aside menu open function	
	
	function asideRightMenuOpen() {
      var pos = -25;
	  var point = 0;
	  var post = -75;
	  var points = 0;
	  var nVePost = 0;
	  var nVePoints = 75;
	  var clearIt = setInterval(menuAni, 1);
         

	    function menuAni() {
         
		    if(window.innerWidth <= 1050 && window. innerWidth > 650) {
                if(pos == 0 && point == 25) {
			      clearInterval(clearIt);
				  
			      rightMenuOpen.style.display  = "none";
			      rightMenuClose.style.display = "inline-block";
			      rightMenuClose.style.right = "25%";
		        }
		
		        else {
			      pos++;
			      point++;
				  
			      asideRight.style.display = "block";
			      asideRight.style.right = pos + "%";
				  
			      rightMenuOpen.style.right = point + "%";
		        }
		 
		    }
		 
		    else if(window.innerWidth <= 650) {
	
		        if(post == 0 && points == 75) {
		          clearInterval(clearIt);
				  
		          asideLeft.style.display = "none";
				  
		          leftMenuClose.style.display = "none";
		          leftMenuOpen.style.display = "inline-block";
		          leftMenuOpen.style.left = "0";
				  
		          rightMenuOpen.style.display  = "none";
		          rightMenuClose.style.display = "inline-block";
		          rightMenuClose.style.right = "75%";
		        }
		 
		        else {
			      post++;
			      points++;
			      nVePoints--;
			      nVePost--;
				  
			      asideLeft.style.left =  nVePost + "%";
				  
			      leftMenuClose.style.left = nVePoints + "%";
				  
			      asideRight.style.display = "block";
			      asideRight.style.right = post + "%";
				  
			      rightMenuOpen.style.right = points + "%";
			
		        }
	        }
	    }
	}
	
//left aside menu close function only at window.innerWidth < 650
	function asideLeftMenuClose() {
	  var pos = 0;
	  var point = 75;	
      var clearIt = setInterval(menuAni, 1);
         
        function menuAni() {
		    if(window.innerWidth <= 650) {
			    if(pos == -75 && point == 0) {
			      clearInterval(clearIt);
				  
			      leftMenuOpen.style.left = "0%";
			      leftMenuOpen.style.display  = "inline-block";
			      leftMenuClose.style.display = "none";
				  
			      asideLeft.style.display = "none";
		        }
		        else {
			      pos--;
			      point--;
				  
			      asideLeft.style.left = pos + "%";
				  
			      leftMenuClose.style.left = point + "%";
		        } 
		    }  
		}
	}
	 
//right aside menu close function

    function asideRightMenuClose() {
	  var pos = 0;
	  var point = 25;
	  var post = 0;
	  var points = 75;
	  var clearIt = setInterval(menuAni, 1);
         
        function menuAni() {
		    if(window.innerWidth <= 1050 && window.innerWidth > 650) {
                if(pos == -25 && point == 0) {
			      clearInterval(clearIt); 
				  
			      rightMenuOpen.style.right = "0%";
			      rightMenuOpen.style.display  = "inline-block";
			      rightMenuClose.style.display = "none";
				  
			      asideRight.style.display = "none";
		        }
				
		        else {
			      pos--;
			      point--;
				  
			      asideRight.style.right = pos + "%"; 
				  
			      rightMenuClose.style.right = point + "%";
		        }
		    }
		 
		    else if(window.innerWidth <= 650) {
			    if(post == -75 && points == 0) {
			      clearInterval(clearIt);
				  
			      rightMenuOpen.style.right = "0%";
			      rightMenuOpen.style.display  = "inline-block";
			      rightMenuClose.style.display = "none";
				  
			      asideRight.style.display = "none";
		        }
			
		        else {
			      post--;
			      points--;
				  
			      asideRight.style.right = post + "%";
				  
			      rightMenuClose.style.right = points + "%";
		        } 
		    }
		 
		}
	}
	

//aside-right anchor scroll events and function 

    function  contentMap() {
	  var i;
	  var lenRightAnchor = asideRightAnchor.length;
	  var asideHash = []; // get the id of aside anchor 
	  var contentHeight = []; // height of content
	  var startPosition = []; // starting position of content 
	  var lastPosition = [];  // last position of content 
		
		(function(){
		    for(i=0; i<lenRightAnchor; i++) {
		      var getHash = asideRightAnchor[i].hash; // get hash for example: (#topic) 
		      var setHash = getHash.slice(1); // remove #tag for example: (#topic to topic) which get id of content 
		  
		      asideHash.push(setHash); // push content id to an array asideHash 
		
		      var getPosition = document.getElementById(asideHash[i]).offsetTop; // get the top position of content from top scroll
			  
		      var start = getPosition - 125; // start position content have padding-top: 125;
		  
		  
		      startPosition.push(start); //push start position to array startPosition
		  
		  
		      var getHeight = document.getElementById(asideHash[i]).offsetHeight; // get Height of the content 
		  
		      contentHeight.push(getHeight); //push height of content to array contentHeight
		  
		      var last = startPosition[i] + contentHeight[i] + 20;  // last position
		   
		      lastPosition.push(last); //push last position to array lastPosition

//making scroll function for contentMap	
	 
		        asideRightAnchor[i].onscroll = (function() {
                    if(document.body.scrollTop <= lastPosition[i] &&document.body.scrollTop >= startPosition[i] || document.documentElement.scrollTop <= lastPosition[i] && document.documentElement.scrollTop >= startPosition[i]) { //condition for scroll position is between start scroll position and last scroll position 

                      rightAnchorLi[i].style.color = "#1a73e8";
		              rightAnchorLi[i].style.fontWeight = "550";
		            }
		
		            else {
			
		              rightAnchorLi[i].style.fontWeight = "400";
			
		                if(countDarkTheme % 2 !== 0) {
		                   rightAnchorLi[i].style.color = "#fff";
		                }
		  
		                else{
		                 rightAnchorLi[i].style.color = "#000";
		                }
		  
		            }
		        })();
		    }
		})();
	} 
	
//scroll events 
	function scrollEvent() {
	  var y = document.documentElement.scrollTop;
	  
	    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
			
 	      logoNav.style.backgroundColor = "#8860d0";
	      logoNav.style.height = "60px";
	      logoNav.style.position = "fixed";
	      logoNav.style.top = "0";
	      logoNav.style.width = "100%";
	  
	      logo.style.width = "50px";
	      logo.style.height = "50px";
	  
	      navLogonav[0].style.height = "60px";
	      navLogonav[0].style.top = "60px";
	  
	      content.style.margin = "75px 13.5% 0 20.1%";
	  
	      w3schoolDrop.style.lineHeight = "58px";
	  
	      asideLeft.style.position = "fixed";
	      asideLeft.style.height = window.innerHeight - 75 + "px";
	  
	      asideRight.style.position = "fixed";
	      asideRight.style.height = window.innerHeight - 75 + "px";
	  
	      menuBar.style.lineHeight = "50px";
	  
	      var i; 	  
	      var len = sitename.length;
	      var lenNav = navItem.length;
	      var lenDot = hoverDot.length;
	      var lennavA = navA.length;
	
	        for(i=0; i<len; i++) {
	          sitename[i].style.fontSize = "35px";
	          sitename[i].style.lineHeight = "57px";
            }
	
	        for(i=0; i<lenNav; i++) {
              navItem[i].style.lineHeight = "40px";
            }
	
	        for(i=0; i<lenDot; i++) {
		      hoverDot[i].style.top = "80%";
	        }
	
	        for(i=0; i<lennavA; i++) {
		      navA[i].style.lineHeight = "58px";
	        }
	  
	        if(window.innerWidth <= 1050 && window.innerWidth > 650) {
              asideLeft.style.height = window.innerHeight - 120 + "px";
	          asideLeft.style.top = "115px";
	          asideLeft.style.left = "null";
	          asideLeft.style.right = "0";
	   
	          asideRight.style.height = window.innerHeight - 60 + "px";
	          asideRight.style.top = "55px";
	          asideRight.style.left = "null";
	          asideRight.style.right = "0";
	   
	          content.style.margin = "5px";
	        }
	
	        else if (window.innerWidth <= 650) {
		      content.style.margin = "5px";
		
		      asideLeft.style.top = "55px";
		      asideLeft.style.height = window.innerHeight - 60 + "px";
		
		      asideRight.style.top = "55px";
		      asideRight.style.height = window.innerHeight - 60 + "px";
		
		      menuBar.style.top = "15px";
		
		      logoNav.style.top = "0px";
		
		      navLogonav[0].style.height = "auto";
		
	            if(countDFS % 2 !== 0) {
		          darkFontSocial.style.height = "50px";
				  
		          var i, len;
                  len = newSlide.length;
          
                    for(i=0; i<len; i++) {
			          newSlide[i].display = "inline-block";
		            }		  
		   
		          showSlides(slideIndex);
		          countDFS = 0;
	            }
		
	        }
	  
	        else {
	          asideLeft.style.height = window.innerHeight - 75 + "px";
	          asideLeft.style.top = "70px";
	          asideLeft.style.right = "null";
	          asideLeft.style.left = "0";
	  
	          asideRight.style.height = window.innerHeight - 75 + "px";
	          asideRight.style.top = "70px";
	          asideRight.style.right = "0";
	          asideRight.style.left = "null";
	  
	        }
        }	
   
//scrollEvent function else part 
  
	    else {
	      logoNav.style.backgroundColor = "transparent";
	      logoNav.style.height = "80px";
	      logoNav.style.lineHeight = "80px";
	      logoNav.style.position = "relative";
	      logoNav.style.width = "auto";
	  
	      logo.style.width = "70px";
	      logo.style.height = "70px";
	  
	      
	  
	      content.style.margin = "5px";
	  
	      w3schoolDrop.style.lineHeight = "78px";
	  
	      asideLeft.style.position = "relative";
	      asideLeft.style.height = window.innerHeight -(148 - y) + "px";
	      asideRight.style.position = "relative";
	      asideRight.style.height = window.innerHeight -(148 - y) + "px";
	  
	      menuBar.style.lineHeight = "70px";
	  
	  
	  
	      var i;
	      var len = sitename.length;
	      var lennavA = navA.length;
	      var lenNav = navItem.length;
	      var lenDot = hoverDot.length;
	
	        for(i=0; i<len; i++) {
	          sitename[i].style.fontSize = "40px";
	          sitename[i].style.lineHeight = "80px";
 	        }
	
	
	
	        for(i=0; i<lenNav; i++) {
	          navItem[i].style.lineHeight = "60px";
	        }

	        for(i=0; i<lenDot; i++) {
		      hoverDot[i].style.top = "70%";
	        }
	
	        for(i=0; i<lennavA; i++) {
		      navA[i].style.lineHeight = "78px";
	        }
	  
	        if(window.innerWidth <= 1050 && window.innerWidth > 650) {
		      asideLeft.style.height = window.innerHeight - (205 - y) + "px";
		      asideLeft.style.top = 200 - y + "px";
		
	          asideRight.style.height = window.innerHeight - (135 - y) + "px";
	          asideRight.style.top = 130 - y + "px";
			  
			  navLogonav[0].style.height = "70px";
	          navLogonav[0].style.top = "80px";
	        }
	
	        else if(window.innerWidth <= 650) {
		      asideLeft.style.height = window.innerHeight - (135 - y) + "px";
		      asideLeft.style.top = 130 - y + "px";
		
	          asideRight.style.height = window.innerHeight - (135 - y) + "px";
	          asideRight.style.top = 130 - y + "px"; 
		
		      menuBar.style.top = "-57px";
		
		      navLogonav[0].style.height = "auto";
	        }
	
	        else {
		      asideLeft.style.top = "0px";  
		      asideRight.style.top = "0px"; 

			  navLogonav[0].style.height = "80px";
	        }
        }
	}
	
	
	
//resize event control and onload function
	function resizeEvent() {
	    if(window.innerWidth <= 1050 && window.innerWidth > 650) {
		  navLogonav[0].style.display = "none";
		  navLogonav[0].style.height = "70px";
		
		  content.style.margin = "5px";
		
		  asideLeft.style.display = "none";
		  asideLeft.style.left = "null";
		
		  asideRight.style.display = "none";
		  asideRight.style.left = "null";
		
		  rightMenuOpen.style.display = "inline-block";
		  rightMenuOpen.style.right = "0%";
		  rightMenuClose.style.display = "none";
		
		  leftMenuClose.style.display = "none";
		  leftMenuOpen.style.display = "none";
			
		  menuBar.style.top = "15px";
		
	      showSlides(slideIndex); 
		
          countMenu = 0;
		
	        if(countDarkTheme % 2 !== 0) {
		      asideLeft.style.backgroundColor = "#282c34";
			  
	          asideRight.style.backgroundColor = "#282c34";
			  
              navLogonav[0].style.backgroundColor = "rgb(40, 44, 52)";		
	        }
	
	        else {
		      asideLeft.style.backgroundColor = "#fff"; 
			  
	          asideRight.style.backgroundColor = "#fff";
			  
              navLogonav[0].style.backgroundColor = "#c1c8e4";		
	        }
		}
		
//reSize control function if else part		
	    else if(window.innerWidth <= 650) {
		  asideLeft.style.display = "none";
		
		  asideRight.style.display = "none";
		
		  navLogonav[0].style.display = "none";
		  navLogonav[0].style.height = "auto";
		
		  rightMenuOpen.style.display = "inline-block";
		  rightMenuOpen.style.right = "0%";
		  rightMenuClose.style.display = "none";
		
		
		  leftMenuOpen.style.display = "inline-block";
		  leftMenuOpen.style.left = "0%";
		  leftMenuClose.style.display = "none";
		
		  navLogonav[0].style.height  = "auto";
		
		  countMenu = 0;	
		
	      showSlides(slideIndex); 
		 
		    if(countDarkTheme % 2 !== 0) {
		      asideLeft.style.backgroundColor = "#282c34";
			  
	          asideRight.style.backgroundColor = "#282c34";
			  
              navLogonav[0].style.backgroundColor = "rgb(40, 44, 52)";		
	        }
	
	        else {
		      asideLeft.style.backgroundColor = "#fff";
			  
	          asideRight.style.backgroundColor = "#fff";
			  
              navLogonav[0].style.backgroundColor = "#c1c8e4";		
	        }
		
		    if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
			  menuBar.style.top = "15px";
		    } 
		
		    else {
			  menuBar.style.top = "-57px";
		    }
		
		}	
		
//reSize control function else part
		
		else {
		  asideLeft.style.display = "block";
		  asideLeft.style.left = "0";
		  asideLeft.style.right = "null";
			
		  asideRight.style.display = "block";
		  asideRight.style.right = "0";
		  asideRight.style.left = "null";
			
		  rightMenuOpen.style.display = "none";
		  rightMenuClose.style.display = "none";
			
		  leftMenuClose.style.display = "none";
		  leftMenuOpen.style.display = "none";
			
		  navLogonav[0].style.display = "block";
			
		  var i, len, newLen;
		  len = slide.length;
		  newLen = newSlide.length;
			
			for(i=0; i<len; i++) {
			  slide[i].style.display = "inline-block"; 
			} 
			
			for(i=0; i<newLen; i++) {
			  newSlide[i].style.display = "inline-block"; 
			}
			
	        if(countDarkTheme % 2 !== 0) {
		      asideLeft.style.backgroundColor = "#282c34";
	          asideRight.style.backgroundColor = "#282c34";
              navLogonav[0].style.backgroundColor = "transparent";		
	        }
	
	        else {
		      asideLeft.style.backgroundColor = "#fff";
	          asideRight.style.backgroundColor = "#fff";
              navLogonav[0].style.backgroundColor = "transparent";
			}
			
		}
	}



    window.addEventListener("scroll", contentMap);
	window.addEventListener("hashchange", contentMap);
	window.addEventListener("load", contentMap)
	window.addEventListener("scroll", scrollEvent);
	window.addEventListener("load", scrollEvent);
	window.addEventListener("resize", scrollEvent);
	window.addEventListener("resize", resizeEvent);
	window.addEventListener("load", resizeEvent);
	//window.addEventListener("load", showSlides(n));