function show(){
	for (var i = 20; i <= 60; i++){
		if(i % 4 == 0 || i % 9 == 0){
			var counter = document.createTextNode(i + " ");
			holder.appendChild(counter);
		}
	}
}