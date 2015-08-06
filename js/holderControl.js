var holder = document.getElementById("holder");

holder.ondragover = function(){
	this.className = 'hover';
	return false;
}

holder.ondragleave = function(){
	this.className = '';
	return false;
}

holder.ondrop = function(e){
	e.preventDefault();

	var file = e.dataTransfer.files[0],
		reader = new FileReader();
	reader.onload = function(event){
		console.log(event.target);
	};
	console.log(file);
	reader.readAsDataURL(file);

	return false;
}