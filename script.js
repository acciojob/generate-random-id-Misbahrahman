function makeid(l) {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let ans = "";
  for(let i = 0 ; i < l ; i++){
	  ans += str.charAt((Math.random() * str.length) % str.length);
  }

	return ans;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
