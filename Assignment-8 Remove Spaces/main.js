let a =  "     I am      a     Web    Developer   ";
	function removeSpaces(sentence){
		let res = ""
		for(let i=0; i<sentence.length; i++){
			if(sentence[i]==" "){
				continue
			}
			else{
				res+=sentence[i]
			}
		}
		console.log(res)
	}

removeSpaces(a);