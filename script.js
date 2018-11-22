function acresentaTarefa(event){

	var valor = document.getElementById("Criador").value;
	
	if(event.which == 13 || event.keycode == 13  ){
		if(valor == ""){
		   alert("Insira um valor");	
		 } else {
			//Para acresentar tarefa 
			var tarefa = document.createElement("li");
			var texto = document.createTextNode(valor);
			  
			//Para criar um SPAN onde o simbolo sera colocada e Para criar o proprio simbolo
			var spancheck = document.createElement("SPAN");
			var check = document.createTextNode("\u2713");
			spancheck.appendChild(check);
			spancheck.id = "correto";
			spancheck.className = "ativo";
			spancheck.addEventListener("click", function(){
				if(spancheck.className == "ativo"){
				    spancheck.className = "desativada";
					tarefa.className = "riscado";
					
		         } else if (spancheck.className == "desativada") {
					 spancheck.className = "ativo";
					 tarefa.className = "";
					 
					 
					
				}				
			});
			
			//Para criar um SPAN onde o simbolo X sera colocada e Para criar o proprio simbolo e Para inserir remove em span2
			var spanremove = document.createElement("SPAN");
			var remove = document.createTextNode("\u00D7");			
			spanremove.appendChild(remove);
			spanremove.id = "removedor"
			spanremove.className = "ativo";
			spanremove.addEventListener("click", function(){	
    			tarefa.remove();
			});
			
			tarefa.appendChild(spancheck);
			tarefa.appendChild(texto);
			tarefa.appendChild(spanremove);
			 
			 
			//Inserir atraves da ID usando appenchild e Limpar o campo de tarefas Para acresentar um novo ao corpo o body
			document.getElementById("lista").appendChild(tarefa);
			document.getElementById("Criador").value = "";
			document.body.appendChild(tarefa);
			
			

		}
	}else{
	return true;
	}
}

function excluir(){
	remove()
}

	

