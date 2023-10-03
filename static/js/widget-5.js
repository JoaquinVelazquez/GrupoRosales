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
      <p>7078-1042</p>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <p>repuestosavellaneda@grupo-rosales.com.ar</p>
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
      <p>7078-1043</p>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <p>repuestosrosales@grupo-rosales.com.ar</p>
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
      <p>7078-1047</p>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <p>totalrepuestos@grupo-rosales.com.ar</p>
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
      <p>7078-1045</p>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <p>rosalesv@grupo-rosales.com.ar</p>
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
      <p>7078-1046</p>
    </div>

    <div class="sell-point">
      <img src="https://iili.io/JdzCFB2.png" class="sell-img" alt="">
      <p>rosales6@grupo-rosales.com.ar</p>
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
