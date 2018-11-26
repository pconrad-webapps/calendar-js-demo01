/*$( document ).ready(function(){
    console.log("We are here!");
    $('.myCalendar').cal();
});
*/

$(document).ready(
  function(){
    $('#myCalendar').cal(
	{ startdate : '2011-08-01',
	  daystodisplay : 5,
	  calendars : [
	      [ { uid : '1@cal1',
		  begins : '2011-08-04 08:00:00',
		  ends : '2011-08-04 09:30:00',
		  notes : 'Calendar 1...',
		  color	: 'purple' }
	      ],
	      [ { uid : '1@cal2',
		  begins : '2011-08-04 10:00:00',
		  ends : '2011-08-04 11:30:00',
		  notes : 'Calendar 2...',
		  color	: 'green' }
	      ]
	  ]
	}
    );
      $("div.myCalendar").css("width","30px");
      $("div.myCalendar").css("height","20px");
      $("div.myCalendar").css("border-color","red");
      $("div.myCalendar").css("border-width","5px");
  });
  
    
