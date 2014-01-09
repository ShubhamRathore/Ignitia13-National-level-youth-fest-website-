var end = new Date('21 Feb 2013 12:00:00');
var flag=0;
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour *24;
var timer;



function start(){
	
	
	$(document).ready(function(){
    $('#home').bind('click',function(){
	$("#aboutus").fadeIn(300);
	$("#events").fadeIn(600);
	$("#sponser").fadeIn(900);
    $("#contacts").fadeIn(1200);
	$("#register").fadeIn(1500);
    $("#pronites").fadeIn(1800);
	$("#gallery").fadeIn(2100);
	$("#feeds").fadeIn(2400);
	

	$('#home').unbind('click');
	    
	
  });
});

	var ratio=screen.width/1366;
	var cl=document.getElementsByClassName('side_icon_img');
	
	if(flag!=1){

		$("#events").fadeOut(0);
		$("#register").fadeOut(0);
		$("#sponser").fadeOut(0);
		$("#contacts").fadeOut(0);
		$("#aboutus").fadeOut(0);
		$("#pronites").fadeOut(000);
		$("#feeds").fadeOut(0);
		$("#gallery").fadeOut(0);
	
		flag=1;
	}
	soc_mov();
	frame();
	count();
}

function count()
{
    var now = new Date();
    var distance = end - now;
    if (distance < 0 ) {
       // handle expiry here..
       clearInterval( timer ); // stop the timer from continuing ..
       //alert('Expired'); // alert a message that the timer has expired..
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor( (distance % _day ) / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;
	var d0=(days%10);
	var d1=Math.floor(days/10);
	var h0=(hours%10);
	var h1=Math.floor(hours/10);
	var m0=(minutes%10);
	var m1=Math.floor(minutes/10);
	var s0=(seconds%10);
	var s1=Math.floor(seconds/10);
    var countdownElement = document.getElementById('timer');
	document.getElementById('d1').src='images/numbers/'+d1+'.png';
	document.getElementById('d0').src='images/numbers/'+d0+'.png';
	document.getElementById('h1').src='images/numbers/'+h1+'.png';
	document.getElementById('h0').src='images/numbers/'+h0+'.png';
	document.getElementById('m1').src='images/numbers/'+m1+'.png';
	document.getElementById('m0').src='images/numbers/'+m0+'.png';
	document.getElementById('s1').src='images/numbers/'+s1+'.png';
	document.getElementById('s0').src='images/numbers/'+s0+'.png';
								 
}

function soc_mov(){
	if($("#t_in").css("left")=="25px"){
			$("#t_in").animate({
				left:'90px',
				
			},800);
			$("#bg_in").animate({
				left:'155px',
				
			},800);
			$("#fb_in").animate({
				left:'25px',
				
			},800);
				
			}
			if($("#fb_in").css("left")=="25px" ){
			$("#fb_in").animate({
				left:'90px',
				
			},800);
			$("#t_in").animate({
				left:'155px',
				
			},800);
			$("#bg_in").animate({
				left:'25px',
				
			},800);
						
			}
			if($("#bg_in").css("left")=="25px"){
			$("#bg_in").animate({
				left:'90px',
				
			},800);
			$("#fb_in").animate({
				left:'155px',
				
			},800);
			$("#t_in").animate({
				left:'25px',
				
			},800);
				
			}
}

setInterval(soc_mov,5000);
timer = setInterval(count, 500);



function p_show(){
$(document).ready(function() {
	
	$("#first_logo").fadeOut(500);
	$('#second_logo').fadeIn(1700);
	$('#ig_home_p').fadeIn(700);
    
});
}



function frame_close(){
	$('#clock').fadeIn(500);
	$('#closer').fadeOut(500);
	
	$(".iframe").animate({
		right:'100%'
		},1000);
		$('#aboutus').fadeIn(1000);
		$('#aboutus>img').animate({
			top:'17%'
			},1000);
		$('#events').fadeIn(1000);
		$('#events>img').animate({
			top:'38%'
			},1000);
		$('#sponser').fadeIn(1000);
		$('#sponser>img').animate({
			top:'59%'
			},1000);
		$('#contacts').fadeIn(1000);
		$('#contacts>img').animate({
			top:'80%'
			},1000);
		$('#register').fadeIn(1000);
		$('#register>img').animate({
			top:'0%'
			},1000);
		$('#pronites').fadeIn(1000);
		$('#pronites>img').animate({
			top:'21%'
			
			},1000);
		$('#gallery').fadeIn(1000);
		$('#gallery>img').animate({
			top:'42%'
			},1000);
		$('#feeds').fadeIn(1000);
		$('#feeds>img').animate({
			top:'63%'
			},1000);
}


function frame(){
	
$(document).ready(function(){
	$("#aboutus").click(function(){
		$('#clock').fadeOut(500);
		
		$('.side_icon_img').animate({
			top:'17%',

			},1000);
		$('#closer').fadeIn(2000);
		$('#events').fadeOut(1000);
		$('#contacts').fadeOut(1000);
		$('#register').fadeOut(1000);
		$('#sponser').fadeOut(1000);
		$('#pronites').fadeOut(1000);
		$('#gallery').fadeOut(1000);
		$('#feeds').fadeOut(1000);
		
		$(".iframe").animate({
		right:'100%'
		},1000);
		$("body").append("<iframe id='aboutusframe' class='iframe' src='aboutus_frame.html' ></iframe>");
		$("#aboutus").animate({
			right:'7%'
			},1000);
			
		});
		
});

$(document).ready(function(){
	$("#events").click(function(){
		$('#clock').fadeOut(500);
		$('.side_icon_img').animate({
			top:'17%',
			},1000);	
		$('#closer').fadeIn(2000);
		$('#aboutus').fadeOut(1000);
		$('#contacts').fadeOut(1000);
		$('#register').fadeOut(1000);
		$('#sponser').fadeOut(1000);
		$('#pronites').fadeOut(1000);
		$('#gallery').fadeOut(1000);
		$('#feeds').fadeOut(1000);
		$(".iframe").animate({
		right:'100%'
		},1000);
		$("body").append("<iframe id='eframe' class='iframe' src='event_frame.html' ></iframe>");
		$("#eframe").animate({
			right:'7%'
			},1000);
			
		});
		
});


$(document).ready(function(){
	$("#sponser").click(function(){
		$('#clock').fadeOut(500);
		$('.side_icon_img').animate({
			top:'17%',
			},1000);
		$('#closer').fadeIn(2000);
		$('#events').fadeOut(1000);
		$('#contacts').fadeOut(1000);
		$('#register').fadeOut(1000);
		$('#aboutus').fadeOut(1000);
		$('#pronites').fadeOut(1000);
		$('#gallery').fadeOut(1000);
		$('#feeds').fadeOut(1000);
		$(".iframe").animate({
		right:'100%'
		},1000);
		$("body").append("<iframe id='sponserframe' class='iframe' src='sponser_frame.html' ></iframe>");
		$("#sponserframe").animate({
			right:'7%'
			},1000);
			
		});
		
});


$(document).ready(function(){
	$("#contacts").click(function(){
				$('#clock').fadeOut(500);
		$('.side_icon_img').animate({
			
			top:'17%',
			},1000);
		$('#closer').fadeIn(2000);
		$('#events').fadeOut(1000);
		$('#aboutus').fadeOut(1000);
		$('#register').fadeOut(1000);
		$('#sponser').fadeOut(1000);
		$('#pronites').fadeOut(1000);
		$('#gallery').fadeOut(1000);
		$('#feeds').fadeOut(1000);
		$(".iframe").animate({
		right:'100%'
		},1000);
		$("body").append("<iframe id='contactframe' class='iframe' src='contacts_frame.html' ></iframe>");
		$("#contactframe").animate({
			right:'7%'
			},1000);
			
		});
		
});

$(document).ready(function(){
	$("#register").click(function(){
				$('#clock').fadeOut(500);
		$('.side_icon_img').animate({
			top:'0%',
			},1000);
		$('#closer').fadeIn(2000);
		$('#events').fadeOut(1000);
		$('#contacts').fadeOut(1000);
		$('#aboutus').fadeOut(1000);
		$('#sponser').fadeOut(1000);
		$('#pronites').fadeOut(1000);
		$('#gallery').fadeOut(1000);
		$('#feeds').fadeOut(1000);
		$(".iframe").animate({
		right:'100%'
		},1000);
		$("body").append("<iframe id='rframe' class='iframe' src='register_frame.html' ></iframe>");
		$("#rframe").animate({
			right:'7%'
			},1000)
		});
	
		
});

$(document).ready(function(){
	$("#pronites").click(function(){
				$('#clock').fadeOut(500);
		$('.side_icon_img').animate({
			top:'0%',

			},1000);
		$('#closer').fadeIn(2000);
		$('#events').fadeOut(1000);
		$('#contacts').fadeOut(1000);
		$('#register').fadeOut(1000);
		$('#sponser').fadeOut(1000);
		$('#aboutus').fadeOut(1000);
		$('#gallery').fadeOut(1000);
		$('#feeds').fadeOut(1000);
		$(".iframe").animate({
		right:'100%'
		},1000);
		$("body").append("<iframe id='pronitesframe' class='iframe' src='pronite.html' ></iframe>");
		$("#pronitesframe").animate({
			right:'7%'
			},1000)
		});
		
});

$(document).ready(function(){
	$("#gallery").click(function(){
				$('#clock').fadeOut(500);
		$('.side_icon_img').animate({
			top:'0%',

			},1000);
		$('#closer').fadeIn(2000);
		$('#events').fadeOut(1000);
		$('#contacts').fadeOut(1000);
		$('#register').fadeOut(1000);
		$('#sponser').fadeOut(1000);
		$('#pronites').fadeOut(1000);
		$('#aboutus').fadeOut(1000);
		$('#feeds').fadeOut(1000);
		$(".iframe").animate({
		right:'100%'
		},1000);
		$("body").append("<iframe id='galleryframe' class='iframe' src='gallery_frame.html' ></iframe>");
		$("#galleryframe").animate({
			right:'7%'
			},1000)
		});
		
});

$(document).ready(function(){			
	$("#feeds").click(function(){
		$('#clock').fadeOut(500);
	$('.side_icon_img').animate({
			top:'0%',
			},1000);
		$('#closer').fadeIn(2000);
		$('#events').fadeOut(1000);
		$('#contacts').fadeOut(1000);
		$('#register').fadeOut(1000);
		$('#sponser').fadeOut(1000);
		$('#pronites').fadeOut(1000);
		$('#gallery').fadeOut(1000);
		$('#aboutus').fadeOut(1000);
		$(".iframe").animate({
		right:'100%'
		},1000);
		$("body").append("<iframe id='feedsframe' class='iframe' src='feeds_frame.html' ></iframe>");
		$("#feeds").animate({
			right:'7%'
			},1000)
		});
		
});

}

