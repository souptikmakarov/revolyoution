$(document).ready(function() {

	var info=["46% of children under 5 are malnourished..!!",
	"Every sixth girl child's death is due to gender discrimination.. 3 lakh more girls than boys die every year..!",
	"The World Food Programme says, “The poor are hungry and their hunger traps them in poverty.”Hunger is the number 1 cause of death in the world, killing more than HIV/AIDS, malaria, and tuberculosis combined.",
	"There are 20 million street children in India..!!",
	"Over 59 million children in India have no access to school..!!",
	"Nearly half(47%) of Indian girls are married before the legal age of 18. Approx 15% are married before turning 15..!!",
	"Nearly half(48%) of Indian children under 5 years old are stunted due to chronic undernutrition. India accounts for more than 3 out of every 10 stunted children in the world..!!",
	"On an average women receive only 1.8 years of schooling in India..!",
	"There are 13 million working children across India..!",
	"In India,only 53% of habitation has a primary school and only 20% have a secondary school.!",
	"India spends only 3.3% of it's GDP on education as compared to an average 5.8% in developed countries..!",
	"India has one of the lowest higher education enrollment ratio of 11%. In the US, it is 83%.!!"
	];
	var infoIndex=0;
	setInterval(changeInfo,4000);
	function changeInfo () {
		$('#information').fadeOut(500,function(){
			$('#information').text(info[infoIndex]);
		}).fadeIn(500);
		infoIndex++;
		if(infoIndex>info.length){
			infoIndex=0;
		}
	}
});