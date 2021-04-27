/*function myFunction() {
  var str = document.getElementById("text").innerHTML; 
  var res = str.replace("guys", "everyone");
  document.getElementById("text").innerHTML = res;
}*/

function displayText() {
	var x = document.getElementById("text-box").value;
	document.getElementById("text").innerHTML = x;
}

function correctText() {
  var str = document.getElementById("text").innerHTML; 
  var res = str.replace("he", "they");
  var res = str.replace("she", "they");
  var res = str.replace("his", "their");
  var res = str.replace("her", "their");
  var res = str.replace("him", "them");
  var res = str.replace("her", "them");
  document.getElementById("text").innerHTML = res;
}

//list of pronouns and changes to make
/*he 
he is
he was
him
his
she
she is
she was
her
hers

they
they are
they were
them
their
theirs*/
