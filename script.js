function acresentaTarefa(event){
	
	var valor = document.getElementById("Criador").value;
	
//	if(valor === ""){
//		alert("Insira um valor");
//	   } else 
		if(event.which == 13 || event.keycode == 13  ){
		
		//Para acresentar tarefa 
		var tarefa = document.createElement("div");
		
		tarefa.id = "TarefaID";
		
		//Para acresentar o texto
		var texto = document.createTextNode(valor);
		
		
		
		document.getElementById("Criador").value = "";
		
		tarefa.appendChild(texto);
		
		//Para acresentar um novo ao corpo o body
		document.body.appendChild(tarefa);
		return false;
	}else{
		return true;
	}

}

function deletaTarefa(event){

	
}

