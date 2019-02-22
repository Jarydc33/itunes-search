
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
		postData(myData);	
	}
}

xmlhttp.open("GET", url, true);
xmlhttp.responseType = 'text';
xmlhttp.send();

function postData(allData){
	let image = document.createElement("img");
	image.src = allData.results[4].artworkUrl100;
	image.width = 300;
	document.getElementById("image").appendChild(image);

	let artistName = allData.results[4].artistName;
	let trackName = allData.results[4].trackName;
	let albumName = allData.results[4].collectionName;

	let sound = document.createElement("audio");
	sound.id = "audioTrack";
	sound.controls = "controls";
	sound.src = allData.results[4].previewUrl;
	sound.type = "audio/mpeg";
	document.getElementById("audioTrack").appendChild(sound);

	document.getElementById("artistName").innerHTML = artistName;
	document.getElementById("trackName").innerHTML = trackName;
	document.getElementById("albumName").innerHTML = albumName;
		
}

function searchData(allData){



}
