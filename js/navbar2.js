let myNavbarPage = `
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../src/images/icons/pasteleria.png" alt="" width="100" height="40">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active btn btnNav" href="../index.html">Inicio <span class="sr-only">(current)</span></a>
        <a class="nav-link btn btnNav" href="./pasteles.html">Pasteles</a>
        <a class="nav-link btn btnNav" href="./contacto.html">Contacto</a>
        <a class="nav-link disabled">Postres</a>
      </div>
    </div>
  </nav>
  `

  anclaNavbarP.innerHTML = myNavbarPage;