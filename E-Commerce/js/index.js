//CARRUCEL 1
const Contenido1 = document.querySelector('.carrucel-conteiner-jue');
const punto1 = document.querySelectorAll('.punto1');
const BtnDerecha_1 = document.querySelector(".boton1-retroceder");
const BtnIzquierda_1 = document.querySelector(".boton1-avanzar");
//CARRUCEL 2
const Contenido2 = document.querySelector('.carrucel-conteiner-2');
const punto_2 = document.querySelectorAll('.punto2');
const BtnDerecha_2 = document.querySelector(".boton-retroceder-categorias");
const BtnIzquierda_2 = document.querySelector(".boton-avanzar-categorias");

//Btn troll
const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');

//buscador de juegos 
const btn_cat = document.querySelector('.More_Gm');
const aunmento = document.querySelector('.catalogo');

//CARRUCEL DE JUEGOS
punto1.forEach((cadaPunto1, i)=> {
    punto1[i].addEventListener('click', () =>{
        
        
        let posicion = i;
        let operacion = posicion * -50;

        Contenido1.style.transform = `translateX(${ operacion }%)`;

        punto1.forEach((cadaPunto1, i )=>{
            punto1[i].classList.remove('activo')
        });
        punto1[i].classList.add('activo')
    });
    BtnIzquierda_1.addEventListener('click', () =>{

        let posicion = i
        let operacion = posicion * -50;
        Contenido1.style.transform = `translateX(${ operacion }%)`;
        
        punto1.forEach((cadaPunto1, i )=>{
            punto1[i].classList.remove('activo')
        });
        punto1[i].classList.add('activo')

    });
    BtnDerecha_1.addEventListener('click', () => {
        Contenido1.style.transform = `translateX(0%)`;
    
        punto1.forEach((cadaPunto1, i) => {
            punto1[i].classList.remove('activo');
        });
        punto1[0].classList.add('activo');
    });

});

//BOTOM TROLL
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const textElement = textElements[index];
      textElement.classList.toggle('showText');
      button.textContent = "Ocultar Verguenza";
      if(button.addEventListener('click', () => {
          button.textContent = "YA LO HICISTE";
        }));
    });
  });

//CARRUCEL DE CATEGORIAS

punto_2.forEach((cadaPunto_2, i)=> {
    punto_2[i].addEventListener('click', () =>{
        
        
        let posicion = i;
        let operacion = posicion * -50;

        Contenido2.style.transform = `translateX(${ operacion }%)`;

        punto_2.forEach((cadaPunto_2, i )=>{
            punto_2[i].classList.remove('activo')
        });
        punto_2[i].classList.add('activo')
    });
    BtnIzquierda_2.addEventListener('click', () =>{

        let posicion = i
        let operacion = posicion * -50;
        Contenido2.style.transform = `translateX(${ operacion }%)`;
        
        punto_2.forEach((cadaPunto_2, i )=>{
            punto_2[i].classList.remove('activo')
        });
        punto_2[i].classList.add('activo')

    });
    BtnDerecha_2.addEventListener('click', () => {
        Contenido2.style.transform = `translateX(0%)`;
    
        punto_2.forEach((cadaPunto_2, i) => {
            punto_2[i].classList.remove('activo');
        });
        punto_2[0].classList.add('activo');
    });

});

//Buscador en el catalo de juegos
document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){

        if(e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".carrucel-conteiner-juego").forEach(Gm =>{
            Gm.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?Gm.classList.remove("filtro")
            :Gm.classList.add("filtro")
        });
    }
});

//Ver mas del catalogo de juegos completo
btn_cat.addEventListener("click", () =>{
    if(aunmento.classList.contains('catalogo')){
        console.log("ni lo juna")
        aunmento.classList.replace("catalogo", "catalogo_extecion");
    }else{
        console.log("funco")
        aunmento.classList.replace("catalogo_extecion", "catalogo");
    }
});
