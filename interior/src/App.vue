<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "UB";
  src: url("./../public/URWDIN-Black.woff") format("woff");
}
@font-face {
  font-family: "UX";
  src: url("./../public/URWDIN-XLight.woff") format("woff");
}
@font-face {
  font-family: "UR";
  src: url("./../public/URWDIN-Regular.woff") format("woff");
}
@font-face {
  font-family: "UM";
  src: url("./../public/URWDIN-Medium.woff") format("woff");
}
@font-face {
  font-family: "UD";
  src: url("./../public/URWDIN-Demi.woff") format("woff");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
