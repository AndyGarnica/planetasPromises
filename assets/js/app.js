function getJSON(url) {
      return new Promise(function(resolve, reject) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.send();
        ajax.onreadystatechange = function() {
          if (ajax.readyState == 4) {
            resolve(JSON.parse(ajax.responseText));
          }
        };
      });
    }
    getJSON("data/earth-like-results.json")
    .then(function(response){
    	var arregloPromesas = (response.results.map(function(url){
    		return getJSON(url);
    	}));
    	return Promise.all(arregloPromesas);
    })

    .then(function(arrayPromises){
    	console.log(arrayPromises);
    	arrayPromises.forEach(function(element){
    		var namePlanet = element.pl_name;
    		console.log(namePlanet + " " + element.dec);
    	});
    });
    var plantilla = '';
