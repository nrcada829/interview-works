<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-0">
    <div class="container">
      <h1 class="mb-0">
        <a class="navbar-brand logo" href="#">
          <img
            src="../assets/img/logo.png"
            width="120"
            height="80"
            alt="LOGO"
          />
        </a>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a class="nav-link" href="#">首頁</a>
          <router-link to="products" class="nav-link">產品介紹</router-link>
          <a class="nav-link" href="#">關於我們</a>
          <a class="nav-link" href="#">聯絡我們</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
