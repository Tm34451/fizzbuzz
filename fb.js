function prompter() {
	var num = parseInt(prompt("Enter a number", ""));	//prompt for a number
	
	//loop through user input num and flow of 'if' statements to display game
	for(i = 1; i <= num; i++){
		if(i % 3 == 0 && i % 5 == 0){
			document.write("FizzBuzz" + "<br>");
		}else if(i % 3 == 0){
			document.write("Fizz" + "<br>");
		}else if(i % 5 == 0){
			document.write("Buzz" + "<br>");
		}else{
			document.write(i + "<br>");
		}
	}
}
