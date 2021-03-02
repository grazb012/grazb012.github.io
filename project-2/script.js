let btn = document.getElementById('btn')

let links = [link0, link1, link2, link3, link4, link5, link6, link7, link8, link9]
	link0 ='sections/one/index.html'
	link1 ='sections/two/index.html'
	link2 ='sections/three/index.html'
	link3 ='sections/four/index.html'
	link4 ='sections/five/index.html'
	link5 ='sections/six/index.html'
	link6 ='sections/seven/index.html'
	link7 ='sections/eight/index.html'
	link8 ='sections/nine/index.html'
	link9 ='sections/ten/index.html'


  function randomLink() {
        var randomLink = Math.round[Math.random() * 9];
 }

btn.addEventListener('click', function(){
	var randomLink = links[Math.random() * links.length]
})