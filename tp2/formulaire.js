function validation() {

	vnom=document.getElementById("Nom").value;

	vprenom=document.getElementById("Prénom").value;

	vdate=document.getElementById("Date de naissance").value;

	vadresse=document.getElementById("Adresse").value;

	vtel=document.getElementById("Tel").value;

	vmail=document.getElementById("Mail").value;

	if  (vnom.length<5){

		document.getElementById("error").innerHTML='le nom doit contenir au moins 5 caractères';
	}
	else if  (vprenom.length<5){
		document.getElementById("error").innerHTML='le nom doit contenir au moins 5 caractères';
	}
	else if  (vadresse.length<5){

		document.getElementById("error").innerHTML='le nom doit contenir au moins 5 caractères';
	}
	else if  (vdate.length<5){

		document.getElementById("error").innerHTML='le nom doit contenir au moins 5 caractères';
	}
	else if  (vtel.length<5){
	
		document.getElementById("error").innerHTML='le nom doit contenir au moins 5 caractères';
	}
	else if  (vmail.length<5){
	
		document.getElementById("error").innerHTML='le nom doit contenir au moins 5 caractères';
	}
	if  (vnom.length==null){
	
		document.getElementById("error").innerHTML='la saisie du nom est obligatoire';
	}
	else if  (vprenom.length==null){
	
		document.getElementById("error").innerHTML='la saisie du Prénom est obligatoire';
	}
	else if  (vadresse.length==null){
	
		document.getElementById("error").innerHTML='la saisie de l"Adresse est obligatoire';
	}
	else if  (vdate.length==null){
	
		document.getElementById("error").innerHTML='la saisie de la date de naissance est obligatoire';
	}
	else if  (vtel.length==null){
	
		document.getElementById("error").innerHTML='la saisie du numéro de Tel est obligatoire';
	}
	else if  (vmail==''){
	
		document.getElementById("error").innerHTML='la saisie du mail est obligatoire';
	}
	
	else{
		document.getElementById("resultat").innerHTML='Bienvenue ' +vnom;
	
	}
}
