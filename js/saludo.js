

       function saludo(){
   
          fecha = new Date(); 
          hora = fecha.getHours();

           if(hora >= 0 && hora < 8){
            pSaludo.textContent = "Amanecer musical";
			img.src="imagenes/dia.png";
          }
          
  
           if(hora >= 8 && hora < 12){
            pSaludo.textContent = "Exitos variados";
			img.src="imagenes/microfono.png";
          }      
            
		   if(hora >= 12 && hora < 18){
            pSaludo.textContent = "La Revancha";
		    img.src="imagenes/tarde.png";
          }
		  
          if(hora >= 18 && hora < 24){
             pSaludo.textContent = "Recarga musical";
		     img.src="imagenes/noche.png"; 
          }	  
       }

   var img = document.getElementById("tiempo");
   var pSaludo = document.getElementById("txtsaludo");
   setInterval(saludo,1000);
   
   
$('document').ready(function(){

 $("#animation").on('click', function(e){
        e.preventDefault();
        $(".panel").slideToggle('fast');
      });
   });

  
  
