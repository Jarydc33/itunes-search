
let xmlhttp = new XMLHttpRequest();

// let counter = 1;

document.getElementById("searchButton").onclick = function(){getUserInput();}

function getUserInput(){

	// if(counter != 1){
	// 	refreshPage();
	// }
	// counter++;
	
	let userInput = document.getElementById("searchText").value;
	userInput = userInput.split(" ");
	userInput = userInput.join("+");
	let url = "https://itunes.apple.com/search?parameterkeyvalue=key1=value1&Key=key1=value1%26amp;key2=value2%26amp;key3=value3&term=" + userInput + "";

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

}

xmlhttp.onreadystatechange = function(){
	let myData = [];
	let collectionName;
	let myDataText;
	if(this.readyState == 4){
		myDataText = xmlhttp.response;
		myData = JSON.parse(myDataText);

		gatherData(myData);	
	}
}

function gatherData(allData){

	let artistName = [];
	let trackName = [];
	let albumName = [];
	let image;
	let sound;

	for(let i = 0; i < allData.results.length; i++){

		image = allData.results[i].artworkUrl100;

		artistName[i] = allData.results[i].artistName;
		trackName[i] = allData.results[i].trackName;
		albumName[i] = allData.results[i].collectionName;

		sound = allData.results[i].previewUrl;

		createDiv(image, artistName[i],albumName[i],trackName[i],sound);

	}
		
}

function createDiv(image,artistName,albumName,trackName,sound){
	let divContainer = "<div id='divAppend'>";
	let imageDiv = "<div id='imageDiv'>";
	let artistDiv = "<div id='artistDiv'>";
	let albumDiv = "<div id='albumDiv'>";
	let songDiv = "<div id='songDiv'>";
	let soundDiv = "<div id='soundDiv'>";
	let divClose = "</div>";
	let divRow = "<div class='row'>";
	let divCol1 = "<div class='col-sm-5'>";
	let divCol2 = "<div class='col-sm-3'>";

	let imagePlace = "<img id='imagePlace' src='" + image + "' alt= 'Cover Art'/>";
	let artistPlace = "<p id='artistPlace'>" + artistName + "</p>";
	let albumPlace = "<p id='albumPlace'>" + albumName + "</p>";
	let songTitle = "<p id='songPlace'>" + trackName + "</p>";
	let songClip = "<audio id='soundPlace' src=" + sound + " controls = 'controls'> </audio>";

	let div = 

			divRow+
				divCol1+divClose+
				divCol2 +
					divContainer +
						imageDiv +
							imagePlace +
						divClose +
						artistDiv +
							artistPlace +
						divClose +
						albumDiv +
							albumPlace +
						divClose +
						songDiv + 
							songTitle +
						divClose +
						soundDiv + 
							songClip +
						divClose +
					divClose +
				divClose+
			divClose;
	$("body").append(div);

}

function refreshPage(){

	window.location.reload();
	getUserInput();
	counter = 1;
}
