<template>
  <Navbar></Navbar>
  <div class="container-fluid position-relative px-0">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
