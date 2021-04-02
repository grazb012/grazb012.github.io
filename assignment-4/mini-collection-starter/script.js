//console.log("is this working?");

//load the airtable library, call it "Airtable";
var Airtable = require("airtable");
//console.log(Airtable);

//use airtable library, connect to base using API key
var base = new Airtable({ apiKey: "keyiFaq9DveHPz98w" }).base(
  "appw38n8Oe6JfvuAG"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("music")
  .select({})
  .eachPage(gotPageOfAlbums, gotAllAlbums);

//empty array for album data
var albums = [];

//callback function that recieves data
function gotPageOfAlbums(records, fetchNextPage) {
  console.log("gotPageOfAlbums()");
  // add the records from this page to the array
  albums.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllAlbums(err) {
  console.log("gotAllAlbums()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogAlbums();
  showAlbums();
}

// just loop through the books and console.log them
function consoleLogAlbums() {
  console.log("consoleLogAlbums()");
  albums.forEach(album => {
    console.log("Album:", album);
  });
}

//loop through data, create elements
function showAlbums() {
  console.log("showAlbums()");
  albums.forEach(album => {

    //create container 
    var albumContainer = document.createElement("div");
    albumContainer.classList.add("album-container");
    document.querySelector(".container").append(albumContainer);

    //add album titles
		var albumTitle = document.createElement("h1");
		albumTitle.innerText = album.fields.album_title;
		document.body.append(albumTitle);

    //add artists name
		var artistName = document.createElement("h1");
		artistName.innerText = album.fields.artist;
		document.body.append(artistName);

    //add album artwork
		var albumArt = document.createElement("img");
		albumArt.src = album.fields.album_artwork[0].url;
		document.body.append(albumArt);

	});
 }