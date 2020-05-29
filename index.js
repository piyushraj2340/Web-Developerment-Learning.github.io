// JavaScript  
	   
// DOM variable decleared
	 
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
var w3DropList = document.querySelectorAll("#logo-nav li ul");
var navLi = document.querySelectorAll("#logo-nav li");
var navUl = document.querySelectorAll("#logo-nav > ul");
var menuBar = document.getElementById("menu");
var rightMenuOpen = document.getElementById("right-menu-open");
var rightMenuClose = document.getElementById("right-menu-close");
var countDarkTheme = 0;
var countMenu = 0;

	
// counter  function for darkTheme
  var counterDarkTheme = (function(){ 
    return function() {
    countDarkTheme += 1;
    return countDarkTheme;
    }
    })(); 

//	counter function for menu
  var counterMenu = (function(){ 
    return function() {
    countMenu += 1;
    return countMenu;
    }
    })(); 
	
	  
 var darkTheme = function() {
	
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
  
  
      
  if(counterDarkTheme() % 2 !== 0)	{
	  
    dark.style.backgroundColor = "black";
    dark.style.boxShadow = "0 6px #fff";
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

    if(window.innerWidth < 1050) {
	  asideLeft.style.backgroundColor = "#282c34";
	  asideRight.style.backgroundColor = "#282c34";
    }
  
    else {
	  asideLeft.style.backgroundColor = "transparent";
	  asideRight.style.backgroundColor = "transparent";
    }	
	
	
		   
    } 
	   
    else {
      dark.style.backgroundColor = "white";
      dark.style.boxShadow = "0 7px #000";
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
	
	if(window.innerWidth < 1050) {
	  asideLeft.style.backgroundColor = "#FFF";
	  asideRight.style.backgroundColor = "#FFF";
    }
  
    else {
	  asideLeft.style.backgroundColor = "transparent";
	  asideRight.style.backgroundColor = "transparent";
    }
	
    } 
	

    }
  
  
// here is font control code 
  
    var counterFont = 0;
	   
	var fontInc = (function () {
	return function () {
				
	counterFont += 1;
		      
	if(counterFont < 3 && counterFont > -3) {
		
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
	else{
      counterFont = 2;
    }
      return counterFont;
    }
    })();
	   
	   
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
	   
	var fontReset = (function (){
	  return function() {
				
	  counterFont = 0;
				
      document.body.style.fontSize = "18px";
      return counterFont;
    }
    })();
	
//menu function 
	
	function menuFunction() {
		var pos = -50;
	    if(counterMenu() % 2 !== 0) {
		 asideLeft.style.display = "block";
		 var clearItOpen = setInterval(menuAniOpen, 10);
		 
		 function menuAniOpen() {
			if(pos == 0) {
				clearInterval(clearItOpen);
			}
			else {
				pos++;
				asideLeft.style.right = pos + "%";
			}
		 }
		 
		}
		
		else {
		 var pos = 0;
		 var clearItClose = setInterval(menuAniClose, 10);

		 
		 
		 function menuAniClose() {
			if(pos == -50) {
				clearInterval(clearItClose);
				asideLeft.style.display = "none";
				//console.log("if part");
			}
			else {
				pos--;
				asideLeft.style.right = pos + "%";
				//console.log("else part");
			}
		}

		
	}
	}
	
	content.onclick = function() {
		var pos = 0;
		var post = 0;
		var point = 25;
		if(window.innerWidth < 1050) {
		var clearIt = setInterval(menuClose, 10);
		
		function menuClose() {
			if(post <= -25 && point <= 0 && pos <= -50) {
				clearInterval(clearIt);
				asideRight.style.display = "none";
				rightMenuOpen.style.right = "0%";
			    rightMenuOpen.style.display = "inline-block";
			    rightMenuClose.style.display = "none";
				asideLeft.style.display = "none";
                countMenu = 0;
			}
			
			else {
				pos--;
				post--;
				point--;
				asideLeft.style.right = pos + "%";
				asideRight.style.right = post + "%";
				rightMenuClose.style.right = point + "%";
			}
		}
		}
		
		else {
		 //nothing
		}
	}
	
// right aside menu open function	
	
	 function asideRightMenuOpen() {
		 var pos = -25;
		 var point = 0;
		 var clearIt = setInterval(menuAni, 20);
         asideRight.style.display = "block";

		 function menuAni() {
         if(pos == 0 && point == 25) {
			 clearInterval(clearIt);
			 rightMenuOpen.style.display  = "none";
			 rightMenuClose.style.display = "inline-block";
			 rightMenuClose.style.right = "25%";
		 }
		 else {
			pos++;
			point++;
			asideRight.style.right = pos + "%";
			rightMenuOpen.style.right = point + "%";
		 }
		 }
	 }
	 
	 
// right aside menu close function

        function asideRightMenuClose() {
		 var pos = 0;
		 var point = 25;
		 var clearIt = setInterval(menuAni, 20);
         

		 function menuAni() {
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
	 }
	

// aside-right anchor scroll events and function 

     function  contentMap() {
		
		var i;
		var lenRightAnchor = asideRightAnchor.length;
		var asideHash = [];  
	    var contentHeight = [];  // height of content
		var startPosition = [];  
		var lastPosition = [];
		
		(function(){
		for(i=0; i<lenRightAnchor; i++) {
		  var getHash = asideRightAnchor[i].hash;
		  var setHash = getHash.slice(1);
		  
		  asideHash.push(setHash); // geting id for content by anchor hash property 
		
		  var getPosition = document.getElementById(asideHash[i]).offsetTop;
		  var start = getPosition - 125; // start position
		  
		  
		  startPosition.push(start); //adding start position to array startPosition
		  
		  
		  var getHeight = document.getElementById(asideHash[i]).offsetHeight;
		  
		  contentHeight.push(getHeight); //adding height of content to array contentHeight
		  
		   var last = startPosition[i] + contentHeight[i] + 20;  // last position
		   
		   lastPosition.push(last); //adding last position to array lastPosition
		 
		   
		  
		  

        asideRightAnchor[i].onscroll = (function() {

			
        if(document.body.scrollTop <= lastPosition[i] && document.body.scrollTop >= startPosition[i] || document.documentElement.scrollTop <= lastPosition[i] && document.documentElement.scrollTop >= startPosition[i]) {

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
	
// scroll events 
    
    
   	
	function scrollEvent() {
	var y = document.documentElement.scrollTop;
	  
	if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
		
	  logoNav.style.backgroundColor = "#8860d0";
	  logoNav.style.height = "60px";
	  logoNav.style.position = "fixed";
	  logoNav.style.top = "0";
	  logoNav.style.width = "100%";
	  logo.style.width = "55px";
	  logo.style.height = "55px";
	  content.style.marginTop = "75px"; 
	//  w3DropList[0].style.top = "100%";
	  navUl[0].style.height = "50px";
	  asideLeft.style.height = window.innerHeight - 70 + "px";
	  asideRight.style.height = window.innerHeight - 70 + "px";
	  menuBar.style.lineHeight = "50px";
	  
	  
    var i; 	  
	var len = sitename.length;
	var lenNav = navItem.length;
	var lenDot = hoverDot.length;
	var lenNavLi = navLi.length;
	
	for(i=0; i<len; i++) {
	  sitename[i].style.fontSize = "35px";
	  sitename[i].style.lineHeight = "55px";
    }
	
	for(i=0; i<lenNav; i++) {
      navItem[i].style.lineHeight = "40px";
    }
	
	  for(i=0; i<lenDot; i++) {
		hoverDot[i].style.top = "80%";
	}
	
	  for(i=0; i<lenNavLi; i++) {
		  navLi[i].style.height = "50px";
	}
	  
	  if(window.innerWidth < 1050) {
       asideLeft.style.height = window.innerHeight - 73 + "px";
	   asideRight.style.height = window.innerHeight - 73 + "px";
	   asideLeft.style.top = "55px";
	   asideRight.style.top = "55px";
	}
	  
	  else {
	  asideLeft.style.height = window.innerHeight - 70 + "px";
	  asideRight.style.height = window.innerHeight - 70 + "px";
      asideLeft.style.top = "70px";
	  asideRight.style.top = "70px";	  
	}
	
	
    }	
   
       // else part 
  
	else {
      
	  logoNav.style.backgroundColor = "transparent";
	  logoNav.style.height = "80px";
	  logoNav.style.lineHeight = "80px";
	  logoNav.style.position = "relative";
	  logoNav.style.width = "auto";
	  logo.style.width = "70px";
	  logo.style.height = "70px";
	  content.style.marginTop = "5px";
	  navUl[0].style.height = "70px";
	  asideLeft.style.height = window.innerHeight -(145 - y) + "px";
	  asideRight.style.height = window.innerHeight -(145 - y) + "px";
	  menuBar.style.lineHeight = "70px";
	  
	var i;
	var len = sitename.length;
	var lenNavLi = navLi.length;
	var lenNav = navItem.length;
	var lenDot = hoverDot.length;
	
	for(i=0; i<len; i++) {
	  sitename[i].style.fontSize = "45px";
	  sitename[i].style.lineHeight = "70px";
 	}
	
	
	
	for(i=0; i<lenNav; i++) {
	  navItem[i].style.lineHeight = "60px";
	}
	
	
	
	  for(i=0; i<lenDot; i++) {
		hoverDot[i].style.top = "70%";
	}
	
	for(i=0; i<lenNavLi; i++) {
		  navLi[i].style.height = "70px";
	  }
	  
	  if(window.innerWidth < 1050) {
		asideLeft.style.height = window.innerHeight - (152 - y) + "px";
	    asideRight.style.height = window.innerHeight - (152 - y) + "px";
	    asideLeft.style.top = 130 - y + "px";
	    asideRight.style.top = 130 - y + "px";
	}
	
	  else {
		asideLeft.style.top = "70px";  
		asideRight.style.top = "70px";  
	}
	
	
    }
	
	}
	
// resize event control
	
	function resizeEvent() {
		if(window.innerWidth < 1050) {
			asideLeft.style.display = "none";
			asideRight.style.display = "none";
			rightMenuOpen.style.display = "inline-block";
			rightMenuOpen.style.right = "0%";
			rightMenuClose.style.display = "none";
		}
		
		else {
			asideLeft.style.display = "block";
			asideRight.style.display = "block";
			rightMenuOpen.style.display = "none";
			rightMenuClose.style.display = "none";
		}
	}



    window.addEventListener("scroll", contentMap);
	window.addEventListener("hashchange", contentMap);
	window.addEventListener("load", contentMap)
	window.addEventListener("scroll", scrollEvent);
	window.addEventListener("load", scrollEvent);
	window.addEventListener("resize", scrollEvent);
	window.addEventListener("resize", resizeEvent);