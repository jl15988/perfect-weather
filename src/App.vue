<template>
    <div class="container" :style="{backgroundImage: `url(${bgImg})`}">
        <weather-type :type="weatherType"></weather-type>
        <div class="content">
            <m-time></m-time>
            <m-weather @change="weatherChange"></m-weather>
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
        return {
            weatherType: '0',
            bgImg: '',
        }
    },
    methods: {
        weatherChange(weather) {
            this.weatherType = weather.weather_icon_id;
        }
    },
    mounted() {

    },
    created() {
        const _this = this;
        _this.bgImg = require('/src/assets/bgImg.jpg');

        // WallpaperEngine 用于监听的事件
        window.wallpaperPropertyListener = {
            applyUserProperties: function (properties) {
                if (properties.bg_img && properties.bg_img.value) {
                    // 切换背景
                    _this.bgImg = 'file:///' + properties.bg_img.value;
                }
            }
        }
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
    //background: url("/src/assets/bgImg.jpg") no-repeat;
    background-color: #000;
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
