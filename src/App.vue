<template>
  <div class="bg">
    <router-view />
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss">
[theme="dark"] {
  background: rgb(13, 23, 38);
  color: #fff;
}

html.dark {
  color-scheme: dark;
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

.bg-mine {
  background-color: white;
  color: #444
}

.dark .bg-mine {
  background-color: rgb(13, 23, 38);
  color: white
}

::placeholder {
  color: #052B61;
  opacity: 1;
  /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #052B61;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #052B61;
}

.lightertext {
  color: #052B61
}

.normaltext {
  color: rgb(134, 158, 192);
}

.lightercard {
  background: white;
  border: solid 1px rgb(217, 229, 245);
}

.darkercard {
  background: #052B61;
  color: rgb(229, 240, 255);
}


.bg {
  background: rgb(244 247 251);
}

.dark .darkercard {
  background: rgb(229, 240, 255);
  color: #052B61;
}

.dark .bg {
  background: #0d1726;
}

.dark .lightertext {
  color: white
}

.dark .normaltext {
  color: rgb(134, 158, 192)
}

.dark ::placeholder {
  color: rgb(134, 158, 192);
  opacity: 1;
  /* Firefox */
}

.dark .lightercard {
  background: rgb(15, 28, 46);
  color: rgb(229, 240, 255);
  border: solid 2px rgb(11, 21, 36)
}



.dark :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(134, 158, 192);
}

.dark ::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(134, 158, 192);
}


.half {
  width: 50%;
  text-align: right;
}

.text-half {
  padding: 19% 6% 0 0;
}

.text-half input {
  width: 55%
}

.text-half button {
  width: 100px;
}

.mobimage {
  width: 495px;
  margin-left: 50px;
}


.onphone {
  display: none
}


@media only screen and (max-width: 899px) {
  .half {
    width: 100%;
    text-align: center;
  }

  .text-half {
    padding: 2%
  }

  .text-half input {
    width: 80%
  }

  .text-half button {
    width: 20%;
    text-align: center;
  }

  .mobimage {
    width: 100%;
    margin-left: 0px;
  }

  .notphone {
    display: none;
    width: 0
  }

  .onphone {
    display: block
  }

  .hundred {
    width: 95% !important;
    margin: auto
  }


}

@media only screen and (max-width:400px) {
  .half {
    width: 100%;
    text-align: center;
  }

  .text-half {
    padding: 2%
  }

  .text-half input {
    width: 70%
  }

  .text-half button {
    width: 30%;
  }


}
</style>
