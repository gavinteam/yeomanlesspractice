$('.navbar .dropdown').mouseover(function(man){
/*	for (var i in man) {
		   if (man.hasOwnProperty(i)) { // 过滤
		      console.log(i, ":", man[i]);
		   }
		}*/
//	console.log(man['currentTarget'])
	$(man['currentTarget']).addClass('open');
	console.log('mouse over');
//	$('.dropdown-toggle').click();
	$('.navbar').addClass('in');
//	$('#dropdown3').addClass('open');
 }
);

$('.navbar .dropdown').mouseout(function(man){
	$('.navbar').removeClass('in');
	$('#dropdown3').removeClass('open');
}
);


$('.navbar .dropdown .dropdown-menu').mouseout(function(man){
	$('.navbar').removeClass('in');
	$('#dropdown3').removeClass('open');
	}
)
$('.navbar .dropdown .dropdown-menu').mouseover(function(man){
	$('.navbar').addClass('in');
	$('#dropdown3').addClass('open');
	}
)
