document.getElementById("getObjPageBtn").addEventListener("click", generateObjPage);

function generateObjPage(){

	var inputTags = document.getElementsByTagName("input");
	var objFile = "";
	
	for (i = 0; i < inputTags.length; i++) {
		objFile += inputTags.elements[i].value;
	}
	
	alert("File: \n" + objFile);
}