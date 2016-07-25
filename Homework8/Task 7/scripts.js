function show(){
	for (var i = 50; i <= 100; i++){
		if(i % 7 == 0){
			var counter = document.createTextNode(i + " ");
			holder.appendChild(counter);
		}
	}
}