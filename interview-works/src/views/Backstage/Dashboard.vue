<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-tv me-2"></i>
        後台管理
      </a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link d-lg-none" href="#">產品列表</a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-lg-none" href="#">訂單列表</a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-lg-none" href="#">優惠卷</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="signOut">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div class="container-fluid">
    <div class="row">
      <nav
        class="
          sidebar
          collapse
          col-lg-2
          bg-secondary
          d-none d-lg-block
        "
      >
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item fs-3">
              <i class="bi bi-people-fill"></i>
              管理員
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-dark">
                <i class="bi bi-book-half"></i>
                產品列表
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-dark">
                <i class="bi bi-list-columns"></i>
                訂單列表
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-dark">
                <i class="bi bi-ticket-detailed"></i>
                優惠卷
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main class="col-lg-10 ms-sm-auto">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      const url = `${process.env.VUE_APP_API}logout`;
      this.$http.post(url).then((res) => {
        console.log(res);
        this.$router.push('/login');
      });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)visionToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const url = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(url).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
