var cadastros=[];
var i=0;

function cadastrar(){
    var matricula = document.getElementById("matricula").value;
	var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    
	var aluno = new Object();
    
    aluno.matricula=matricula;
    aluno.nome=nome;
    aluno.email=email;
    aluno.telefone=telefone;
                
    cadastros[i]=aluno;
	i++;

	alert(aluno.nome + " cadastrado na lista de alunos");
}
            
function geraTabela(){
	var x;
	var tabela = document.getElementById("tabela");

	while(tabela.firstChild){
		tabela.removeChild(tabela.firstChild);
	}

	let a = document.createElement("th");
	let ta = document.createTextNode("Matricula");
	a.appendChild(ta);

	let b = document.createElement("th");
	let tb = document.createTextNode("Nome");
	b.appendChild(tb);

	let c = document.createElement("th");
	let tc = document.createTextNode("Email");
	c.appendChild(tc);

	let d = document.createElement("th");
	let td = document.createTextNode("Telefone");
	d.appendChild(td);

	let l = document.createElement("tr");
	l.appendChild(a);
	l.appendChild(b);
	l.appendChild(c);
	l.appendChild(d);

	tabela.appendChild(l);
    
	for(x = 0; x < i; x++){
        let c1 = document.createElement("td");
		let t1 = document.createTextNode(cadastros[x].matricula);
        c1.appendChild(t1);
        
		let c2 = document.createElement("td");
		let t2 = document.createTextNode(cadastros[x].nome);
		c2.appendChild(t2);

		let c3 = document.createElement("td");
		let t3 = document.createTextNode(cadastros[x].email);
		c3.appendChild(t3);

		let c4 = document.createElement("td");
		let t4 = document.createTextNode(cadastros[x].telefone);
		c4.appendChild(t4);

		let linha = document.createElement("tr");
		linha.appendChild(c1);
		linha.appendChild(c2);
        linha.appendChild(c3);
        linha.appendChild(c4);
					
		tabela.appendChild(linha);
	}
}