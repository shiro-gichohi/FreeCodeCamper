
var country_towns = [
{ town:"Nairobi" , country : "Kenya"},
{ town:"Dar" , country : "Tanzania"},
{ town:"Kampala" , country : "Uganda"},
{ town:"Nakuru" , country : "Kenya"},
{ town:"Mwanza" , country : "Tanzania"},
{ town:"Nyeri" , country : "Kenya"},

];

//list ONLY the towns in kenya - using Filter Function
var kenya_towns = country_towns.filter(function(t){
	return t.country === "Kenya";
});

console.log(kenya_towns);


