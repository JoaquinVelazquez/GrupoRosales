const url = window.location.pathname;
const main = document.getElementById("root-app");

if (url === "/consultas") {
    const contenido = `
    <section class="contact" id="consultas">
      <div class="form">
        acá va un formulario
      </div>
<!-- 
      <div class="consultas">
        <h3>
          CONSULTAS
        </h3>
        <div class="sell-point">
            <img src="https://iili.io/JJ5HukP.png" class="sell-img" alt="">
            <p>
              Horarios de atención: lunes a viernes de
              9 a 18 horas - sábados de 9 a 13 horas.
            </p>
          </div>

          <div class="sell-point">
            <img src="https://iili.io/JJ5HukP.png" class="sell-img" alt="">
            <p>
              WhatsApp al +54 9 11 2806-2285
            </p>
          </div>
        <p>
          *IMPORTANTE: Para un mejor asesoramiento por favor indíquenos la marca,
          modelo, año y motor de su vehículo.
        </p>
      </div>
-->
    </section>
    <section class="about" id="nosotros">
    <h2>SOBRE NOSOTROS</h2>
    <div class="block">
      <div>
        <img src="https://iili.io/JJzKY7t.jpg" class="about-img" alt="">
      </div>
      <div class="about-text">
        <div>
          <h3>
            ¿QUIENES SOMOS?
          </h3>
          <p>
            Trabajamos desde hace más de 40 años la más amplia línea de repuestos.
            <br />
            <br />
            Grupo Rosales es representante oficial de las primeras marcas en repuestos para automotores
          </p>
        </div>
      </div>
    </div>
  
    <div class="block">
      <div class="about-text">
        <div>
          <h3>
            VISIÓN
          </h3>
          <p>
            Ser una empresa líder y referente en el mercado de autopartes,
            destacándonos por el servicio de atención brindado.
          </p>
        </div>
      </div>
      <div>
        <img src="https://iili.io/JJzKY7t.jpg" class="about-img" alt="">
      </div>
    </div>
    
    <div class="block">
      <div>
        <img src="https://iili.io/JJzKY7t.jpg" class="about-img" alt="">
      </div>
      <div class="about-text">
        <div class="text-box">
          <h3>
            MISIÓN
          </h3>
          <p>
            La Misión de Grupo Rosales es la venta de autopartes multimarca 
            para el sector mayorista y minorista de Argentina.
          </p>
        </div>
      </div>
    </div>
  
    <h3 class="testimonial-title">
      ELLOS NOS RECOMIENDAN
    </h3>
  
    <div class="testimonial-card">
      <div class="testimonial">
        <img src="https://iili.io/JJALn2a.png" class="testimonials-img" alt="">
        <h4>Adriana</h4>
        <div class="stars">
          <img src="https://iili.io/JJxRwBt.png" class="star-img" alt="">
          <img src="https://iili.io/JJxRwBt.png" class="star-img" alt="">
          <img src="https://iili.io/JJxRwBt.png" class="star-img" alt="">
          <img src="https://iili.io/JJxRwBt.png" class="star-img" alt="">
        </div>
        <p>
          "Todo lo que busco siempre lo encuentro en Grupo Rosales, 
          además de la variendad de productos destaco la atención y los precios,
          que son los mejores, gracias!"
        </p>
      </div>
  
      <div class="testimonial">
        <img src="https://iili.io/JJALn2a.png" class="testimonials-img" alt="">
        <h4>Sergio</h4>
        <div class="stars">
          <img src="https://iili.io/JJxRwBt.png" class="star-img" alt="">
          <img src="https://iili.io/JJxRwBt.png" class="star-img" alt="">
          <img src="https://iili.io/JJxRwBt.png" class="star-img" alt="">
          <img src="https://iili.io/JJxRwBt.png" class="star-img" alt="">
        </div>
        <p>
          "Necesitaba un repuesto para mi auto que no lo conseguía, los llamé 
          y me lo solucionaron, en pocos días ya lo tenían y me lo enviaron a mi casa,
          y de primera marca del mercado, eso es atención de calidad."
        </p>
      </div>
    </div>
  
    <h2>VALORES</h2>
    <img src="https://iili.io/JJRdSwX.png" alt="">
    <div class="valores">
      <p>
        HONESTIDAD
      </p>
      <p>
        COMPROMISO
      </p>
      <p>
        TRABAJO EN EQUIPO
      </p>
      <p>
        RESPONSABILIDAD
      </p>
    </div>
  </section>
    `
    setTimeout(() => {
        main.innerHTML = contenido;
    }, 500)
};