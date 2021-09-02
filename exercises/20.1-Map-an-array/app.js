var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
     
    return ( (value * (9/5) ) + 32);
	
});

console.log(arrayOfFahrenheitValues);