<template>
<div>
  <div id="home">
    <div class="banner"></div>
    <home-page></home-page>
  </div>

  <div id="about" class="is-inverted-bg">
    <about-page></about-page>
  </div>

  <div id="calculations">
    <calculations-page></calculations-page>
  </div>

  <div id="registrations" class="is-inverted-bg">
    <registrations-page></registrations-page>
  </div>

  <div id="activities">
    <activities-page></activities-page>
  </div>

  <div id="documents" class="is-inverted-bg">
    <documents-page></documents-page>
  </div>

  <div id="contact">
    <contact-page></contact-page>
  </div>

  <div id="utils" class="is-inverted-bg">
    <utils-page></utils-page>
  </div>
</div>
</template>

<script>
import HomePage from '@/components/pages/Home'
import AboutPage from '@/components/pages/About'
import UtilsPage from '@/components/pages/Utils'
import CalculationsPage from '@/components/pages/Calculations'
import RegistrationsPage from '@/components/pages/Registrations'
import ActivitiesPage from '@/components/pages/Activities'
import DocumentsPage from '@/components/pages/Documents'
import ContactPage from '@/components/pages/Contact'

export default {
  name: 'pages',
  components: {
    HomePage,
    AboutPage,
    UtilsPage,
    CalculationsPage,
    RegistrationsPage,
    ActivitiesPage,
    DocumentsPage,
    ContactPage
  }
}
</script>

<style lang="css" scoped>
.is-inverted-bg {
  background-color: rgba(0, 0, 0, 0.09);
}

#home {
  position: relative;
  z-index: 1;
}

.banner {
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("../../assets/office-banner.jpg") center center;
  background-size: cover;
  opacity: .6;
  width: 100%;
  height: 100%;
}
</style>
