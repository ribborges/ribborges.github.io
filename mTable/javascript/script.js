function gerartab(){
	var number = document.getElementById("num").value;

	var i;

	var table = document.getElementById("table");

	let tr = document.createElement("tr");
	table.appendChild(tr);

	let td = document.createElement("td");
	let text = document.createTextNode("x" + number);
	td.appendChild(text);
	tr.appendChild(td);

	for(i=0; i<=10; i++){
		let td = document.createElement("td");
		let text = document.createTextNode(number * i);
		td.appendChild(text);

		tr.appendChild(td);
	}
}