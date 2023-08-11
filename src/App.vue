<template>
  <div class="container">
    <weather-type></weather-type>
    <div class="content">
      <m-time></m-time>
      <m-weather></m-weather>
    </div>
  </div>
</template>

<script>
import MTime from "@/components/MTime";
import MWeather from "@/components/MWeather";
import WeatherType from "@/components/WeatherType";

export default {
  name: 'App',
  components: {
    WeatherType,
    MWeather,
    MTime
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {

  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, .16);
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("/src/assets/阿尔卑斯山风景4k高清壁纸3840x2160_彼岸图网.jpg") no-repeat;
  //background-color: #000;
  background-size: cover;
  padding-top: 60px;
  box-sizing: border-box;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
}
</style>
