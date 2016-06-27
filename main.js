
document.querySelector("#thanks button").addEventListener('click',function(){
	alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
	var number = document.getElementById('compoundInvestment');
	number.textContent = parseInt(number.textContent)*2;
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  	var circle = document.getElementById('circle-bw');
  	if(circle.style.backgroundColor === "black"){
  		circle.style.backgroundColor = "white";
  	} else {
  		circle.style.backgroundColor = "black";
  	}
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  	var circle = document.getElementsByClassName('circle-red')[0];
  	
  	if(parseInt(circle.style.width) >= 320){
  		circle.style.width = 40 + 'px';
  		circle.style.height = 40 + 'px';
  	} else {
  		circle.style.width = parseInt(circle.clientWidth)*2 + 'px';
  		circle.style.height = parseInt(circle.clientHeight)*2 + 'px';
  	}
})

document.querySelector("#remove button").addEventListener('click',function(){
	var inactiveusers = document.querySelectorAll("li.inactive");
	for(var i = 0; i < inactiveusers.length; i++){
		var el = inactiveusers[i];
		el.parentElement.removeChild(el);
	}
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
	var squares = document.querySelectorAll("span.square");
	var parent = squares[0].parentElement;
	for(var i = 0; i < squares.length; i++){
		var el = squares[i];
		parent.removeChild(el);
	}
	for(var i = squares.length-1; i >= 0; i--){
		var el = squares[i];
		parent.appendChild(el);
	}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
	function reverse(string) {
  		return string.split('').reverse().join('');
	}
	var tasks = document.querySelector('#tasks').children;
	for(var i = 0; i < tasks.length; i++){
		tasks[i].textContent = reverse(tasks[i].textContent);
	}
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
	var img = document.getElementById('city-img');
	img.src = img.src.slice(0, 35) + (parseInt(img.src.slice(35))+1)%10;
})