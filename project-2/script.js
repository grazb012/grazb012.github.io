let btn = document.getElementById('btn')

let links = [
	'sections/one/index.html',
	'sections/two/index.html',
	'sections/three/index.html',
	'sections/four/index.html',
	'sections/five/index.html',
	'sections/six/index.html',
	'sections/seven/index.html',
	'sections/eight/index.html',
	'sections/nine/index.html',
	'sections/ten/index.html'
]
		
  function randomLink() {
        var randomLink = Math.round[Math.random() * 9];
 }

btn.addEventListener('click', function(){
	var randomLink = links[Math.random() * links.length]
})