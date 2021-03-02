let btn = document.getElementById('btn')

var links = new Array()
		links[0]='sections/one/index.html',
		links[1]='sections/two/index.html',
		links[2]='sections/three/index.html',
		links[3]='sections/four/index.html',
		links[4]='sections/five/index.html',
		links[5]='sections/six/index.html',
		links[6]='sections/seven/index.html',
		links[7]='sections/eight/index.html',
		links[8]='sections/nine/index.html',
		links[9]='sections/ten/index.html',


  function randomLink() {
        var randomLink = Math.round[Math.random() * 9];
 }

btn.addEventListener('click', function(){
	var randomLink = links[Math.random() * links.length]
})