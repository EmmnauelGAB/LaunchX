let myFooter = `
<footer>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <img src="src/images/icons/pasteleria.png" alt="" width="200px" class="">
        </div>
        <div class="col-sm footerIcons">
          <h5 class="footerTitle">SIGUENOS</h2>
            <img src="../src/images/icons/whatsapp.png" alt="imagen telefono" width="35px" class="iconStyle " />
            <img src="../src/images/icons/correo.png" alt="imagen email" width="35px" class="iconStyle" />
            <!-- <img src="src/images/icons/facebook.png" alt="imagen facebook" width="35px" class="iconStyle" />
            <img src="src/images/icons/instagram.png" alt="imagen instagram" width="35px" class="iconStyle" /> -->
        </div>
      </div>
    </div>
    <div class="footerStyle">
      <small>&copy; 2022 <b>Sweet Dreams</b> - Todos los Derechos Reservados.</small>
    </div>
  </footer>`
  anclaFooter.innerHTML = myFooter;

  let myWhass =`
  <a href="https://api.whatsapp.com/send?phone=525561160225" class="btn-wsp" target="_blank">
    <i class="fa fa-whatsapp icono"></i>
  </a>
  `
  myWhats.innerHTML = myWhass;