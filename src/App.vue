<template>
  <div id="app" class="container">
    <section class="section">
      <router-view/>
    </section>
  </div>
</template>

<style>
  @font-face {
    font-family: "Open Sans";
    src: local("Open Sans"),
        url(./assets/fonts/OpenSans/OpenSans-Regular.ttf) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    src: local("Open Sans"),
        url(./assets/fonts/OpenSans/OpenSans-Bold.ttf) format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Open Sans";
    src: local("Open Sans"),
        url(./assets/fonts/OpenSans/OpenSans-Light.ttf) format("truetype");
    font-weight: light;
    font-style: normal;
  }

  html, body, #app, .section {
      height: 100%;
  }

  #app {
    font-family: "Open Sans", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
  }

  section.section {
    min-height: 667px;
    width: 375px;
    margin: auto;
    padding-top: 2.5rem;
  }

  button.button, button.button:hover {
    width: 100%;
    max-width: 325px;
    min-height: 45px;
    background-color: #FF5A5E;
    color: white;
    border-color: transparent;
    cursor: pointer;
  }

  button.button, button.button:disabled {
    width: 100%;
    background-color: #FF5A5E;
    color: white;
    border-color: transparent;
    cursor: default;
  }
</style>
