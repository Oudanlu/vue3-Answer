<template>
  <router-view></router-view>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'app'
  }
</script>


<style>
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, i, b, textarea, button, input, select {
    /*padding: 10px;
    margin: 0;*/
    list-style: none;
    text-decoration: none;
    border: none;
    color: #ACFFDA;
    box-sizing: border-box;
    font-weight: lighter;
    -webkit-tap-highlight-color: transparent;
}

html {
    height: 100%;
    width: 100%;
}

body {
    background: url('./assets/images/1-1.jpg') no-repeat;
    background-size: 100% 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

</style>
