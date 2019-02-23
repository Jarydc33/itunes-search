
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

		// let image = document.createElement("img");
		// image.src = allData.results[i].artworkUrl100;
		image = allData.results[i].artworkUrl100;
		// // document.getElementById("image").appendChild(image);

		artistName[i] = allData.results[i].artistName;
		trackName[i] = allData.results[i].trackName;
		albumName[i] = allData.results[i].collectionName;

		// let sound = document.createElement("audio");
		// sound.id = "audioTrack";
		// sound.controls = "controls";
		// sound.src = allData.results[i].previewUrl;
		sound = allData.results[i].previewUrl;
		// sound.type = "audio/mpeg";

		createDiv(image, artistName[i],albumName[i],trackName[i],sound);

		// document.getElementById("divAppend").appendChild(image);
		// $("#divAppend").append("<div>"+artistName[i]+"\n"+trackName[i]+"\n"+"\n"+albumName[i]+"\n"+"</div");
		// document.getElementById("divAppend").appendChild(sound);
	}
		
}

function createDiv(image,artistName,albumName,trackName,sound){
let divContainer = "<div id='divAppend'>";
let imageDiv = "<div id='imageDiv'>";
let artistDiv = "<div id='artistDiv'>";
let albumDiv = "<div id='artistDiv'>";
let songDiv = "<div id='songDiv'>";
let soundDiv = "<div id='soundDiv'>";
let divClose = "</div>";

let imagePlace = "<img src='" + image + "' alt= 'Anberlin' style='width:200px;height:200px; box-shadow: 10px 10px 10px gray;' />";
let artistPlace = "<h1>" + artistName + "</h1>";
let albumPlace = "<h1>" + albumName + "</h1>";
let songTitle = "<h1>" + trackName + "</h1>";
let songClip = "<audio src=" + sound + " controls = 'controls'> </audio>";

let div = divContainer +
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