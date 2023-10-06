const url = window.location.pathname;
const main = document.getElementById("root-app");

if (url === "/sucursales") {
  const sucursales = `
<section class="seller-points" id="sucursales">
<h2>PUNTOS DE VENTA</h2>
<div class="sell-group">                      
  <div class="sell-box">
    <div class="sell-point">
      <img src="https://iili.io/Jdz2vfe.png" class="sell-img" alt="">
      <div class="sell-direction">
        <h3>REPUESTOS AVELLANEDA</h3>
        <P>AV. MITRE 2274, AVELLANEDA</P>
      </div>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzBvqB.png" class="sell-img" alt="">
      <a href="tel:70781042">7078-1042</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <a href="mailto:repuestosavellaneda@grupo-rosales.com.ar">repuestosavellaneda@grupo-rosales.com.ar</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCABV.png" class="sell-img" alt="">
      <p>
        Lunes a Viernes de 8 a 13hs. y de 14 a 18hs - 
        Sábados de 8 a 13hs.
      </p>
    </div>
  </div>

  <div class="sell-box">
    <div class="sell-point">
      <img src="https://iili.io/Jdz2vfe.png" class="sell-img" alt="">
      <div class="sell-direction">
        <h3>RESPUESTOS ROSALES</h3>
        <P>AV. ROSALES 1602, REMEDIOS DE ESCALADA</P>
      </div>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzBvqB.png" class="sell-img" alt="">
      <a href="tel:70781043">7078-1043</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <a href="mailto:repuestosrosales@grupo-rosales.com.ar">repuestosrosales@grupo-rosales.com.ar</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCABV.png" class="sell-img" alt="">
      <p>
        Lunes a Viernes de 8 a 13hs. y de 14 a 18hs - 
        Sábados de 8 a 13hs.
      </p>
    </div>
  </div>

  <div class="sell-box">
    <div class="sell-point">
      <img src="https://iili.io/Jdz2vfe.png" class="sell-img" alt="">
      <div class="sell-direction">
        <h3>REPUESTOS TOTAL</h3>
        <P>AV. SAN MARTIN 716, VALENTÍN</P>
      </div>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzBvqB.png" class="sell-img" alt="">
      <a href="tel:70781047">7078-1047</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <a href="mailto:totalrepuestos@grupo-rosales.com.ar">totalrepuestos@grupo-rosales.com.ar</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCABV.png" class="sell-img" alt="">
      <p>
        Lunes a Viernes de 8 a 13hs. y de 14 a 18hs - 
        Sábados de 8 a 13hs.
      </p>
    </div>
  </div>

  <div class="sell-box">
    <div class="sell-point">
      <img src="https://iili.io/Jdz2vfe.png" class="sell-img" alt="">
      <div class="sell-direction">
        <h3>REPUESTOS ROSALES V</h3>
        <P>AV. EVA PERÓN 2750, LANÚS</P>
      </div>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzBvqB.png" class="sell-img" alt="">
      <a href="tel:70781045">7078-1045</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <a href="mailto:rosalesv@grupo-rosales.com.ar">rosalesv@grupo-rosales.com.ar</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCABV.png" class="sell-img" alt="">
      <p>
        Lunes a Viernes de 8 a 13hs. y de 14 a 18hs - 
        Sábados de 8 a 13hs.
      </p>
    </div>
  </div>

  <div class="sell-box">
    <div class="sell-point">
      <img src="https://iili.io/Jdz2vfe.png" class="sell-img" alt="">
      <div class="sell-direction">
        <h3>REPUESTOS ROSALES 6</h3>
        <P>AV. EVA PERÓN 1587, TEMPERLEY</P>
      </div>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzBvqB.png" class="sell-img" alt="">
      <a href="tel:70781046">7078-1046</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <a href="mailto:rosales6@grupo-rosales.com.ar">rosales6@grupo-rosales.com.ar</a>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCABV.png" class="sell-img" alt="">
      <p>
        Lunes a Viernes de 8 a 13hs. y de 14 a 18hs - 
        Sábados de 8 a 13hs.
      </p>
    </div>
  </div>
</div>
</section>
`;
  setTimeout(() => {
    main.innerHTML = sucursales;
  }, 500);
}
