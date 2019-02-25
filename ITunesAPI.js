
let xmlhttp = new XMLHttpRequest();
let userInput = prompt("Who do you want to look for?")
userInput = userInput.split(" ");
userInput = userInput.join("+");
console.log(userInput);

let url = "https://itunes.apple.com/search?parameterkeyvalue=key1=value1&Key=key1=value1%26amp;key2=value2%26amp;key3=value3&term=" + userInput + "";

xmlhttp.onreadystatechange = function(){
	let myData = [];
	let collectionName;
	let myDataText;
	if(this.readyState == 4){
		myDataText = xmlhttp.response;
		myData = JSON.parse(myDataText);
		// myData = myData[1];
		distributeData(myData);
		postData(myData);	
	}
}

xmlhttp.open("GET", url, true);
xmlhttp.responseType = 'text';
xmlhttp.send();

function postData(allData){

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

function distributeData(allData){

	// $.each( allData, function( key , value ) {
	// 	let objData = allData;
	//    objData = allData.artistName;
	//    console.log(objData);
	// });

}