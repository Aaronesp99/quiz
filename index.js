$(function(){
   let puntaje;

   console.log(personajes);
   $("#btn-diagnostico").on('click', ()=>{
      puntaje = 0;
      $.each($("input[type='radio']:checked"), (i, v)=>{
         puntaje += parseInt($(v).val()) ?? 0;
      });

      console.log(puntaje);
      const personaje = personajes.find(p => puntaje >= p.min && puntaje <= p.max);

      console.log(personaje);
      $("#img-personaje").attr("src", 'image/'+personaje.url);
      $("#descripcion").text(personaje.descripcion);
   });

});
