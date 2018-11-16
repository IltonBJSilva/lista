function acresentaTarefa(event){

	var valor = document.getElementById("Criador").value;

	//	if(valor === ""){
	//	alert("Insira um valor");
	//	  } else 
	if(event.which == 13 || event.keycode == 13  ){
		if(valor == ""){
		   alert("Insira um valor");	
		   }else{
			//Para acresentar tarefa 
			var tarefa = document.createElement("div");

			//dar uma ID para cada div criada
			tarefa.id = "TarefaID" + valor;

			//Para acresentar o texto
			var texto = document.createTextNode(valor);
			tarefa.appendChild(texto);
			   
			var span = document.createElement("SPAN");
			var check = document.createTextNode("\u2713");   
			span.appendChild(check);
			   
			document.getElementById("lista").appendChild(span);

			//Limpar o campo de tarefas 
			document.getElementById("Criador").value = "";



			//Para acresentar um novo ao corpo o body
			document.body.appendChild(tarefa);
			//return false;
		}
	}else{
	return true;
	}

}

function deletaTarefa(event){


}