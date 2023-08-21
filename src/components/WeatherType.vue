<template>
    <div class="weather_type">
        <div class="sun" v-if="['0', '1', '3', '13'].includes(type)">
            <div class="halo_mask"></div>
            <img :src="require('/src/assets/weather_effect/光束1.png')" class="beam1">
            <img :src="require('/src/assets/weather_effect/光束2.png')" class="beam2">
            <img :src="require('/src/assets/weather_effect/光晕1.png')" class="halo1">
            <img :src="require('/src/assets/weather_effect/光晕2.png')" class="halo2">
            <img :src="require('/src/assets/weather_effect/光晕3.png')" class="halo3">
        </div>
        <div class="cloud_main" v-if="['1', '2', '13', '31'].includes(type)">
            <div class="cloud-main cloud-last">
                <div class="cloud" id="cloud-back"></div>
                <div class="cloud" id="cloud-mid"></div>
                <div class="cloud" id="cloud-front"></div>
            </div>
            <div class="cloud-main">
                <div class="cloud" id="cloud-back"></div>
                <div class="cloud" id="cloud-mid"></div>
                <div class="cloud" id="cloud-front"></div>
            </div>
            <div class="cloud-main2">
                <div class="cloud" id="cloud-back"></div>
                <div class="cloud" id="cloud-mid"></div>
                <div class="cloud" id="cloud-front"></div>
            </div>
            <div class="cloud-main3">
                <div class="cloud" id="cloud-back"></div>
                <div class="cloud" id="cloud-mid"></div>
                <div class="cloud" id="cloud-front"></div>
            </div>
        </div>
        <night-sky v-if="['30', '31', '33', '34'].includes(type)"></night-sky>
    </div>
</template>

<script>
import NightSky from "@/components/NightSky";

export default {
    name: "WeatherType",
    components: {NightSky},
    props: {
        type: String
    },
    data() {
        return {
            sun: false,
            cloud: false
        }
    }
}
</script>

<style lang="scss" scoped>
.weather_type {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .sun {
        position: absolute;
        top: -20px;
        right: -40px;
        width: 800px;

        .halo1, .halo2, .halo3, .beam1, .beam2 {
            display: inline-block;
            opacity: .5;
            width: 100%;
            position: absolute;
            top: 0;
            right: 0;
            transform-origin: top right;
        }

        .beam1, .beam2 {
            opacity: .8;
            width: 120%;
            top: -20px;
            right: -20px;
        }

        .beam1 {
            animation: rotate3 30s ease infinite;
        }

        .beam2 {
            transform: rotate(-20deg);
            animation: rotate4 30s ease infinite;
        }

        .halo1 {
            width: 90%;
            animation: rotate1 30s ease infinite;
        }

        .halo2 {
            width: 50%;
            animation: rotate2 30s ease infinite;
        }

        .halo3 {
            animation: rotate3 30s ease infinite;
        }
    }
}

@keyframes rotate1 {
    0% {
        transform: rotate(0deg);
    }
    30% {
        transform: rotate(11deg);
    }
    60% {
        transform: rotate(-11deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes rotate2 {
    0% {
        transform: rotate(0deg);
    }
    30% {
        transform: rotate(10deg);
        opacity: .4;
    }
    60% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes rotate3 {
    0% {
        transform: rotate(0deg);
    }
    30% {
        transform: rotate(9deg);
    }
    60% {
        transform: rotate(-9deg);
        opacity: .3;
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes rotate4 {
    0% {
        transform: rotate(-20deg);
    }
    30% {
        transform: rotate(-6deg);
        opacity: .6;
    }
    60% {
        transform: rotate(-26deg);
    }
    100% {
        transform: rotate(-20deg);
    }
}

.cloud_main {
    transform: translateY(-80%);
    width: 100vw;
    height: 300px;
    position: relative;
}

.cloud {
    width: 100vw;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    top: -250px;
    left: -25vw;
    transition: all 1s;
}

.cloud-main, .cloud-main2, .cloud-main3 {
    position: absolute;
    animation: movetoleft 20s linear infinite;
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 0;
    pointer-events: none;
    transform: translateX(50%);
}

.cloud-main2 {
    animation: movetoleft2 20s linear infinite;
}

.cloud-main3 {
    animation: movetoleft3 20s linear infinite;
}

.cloud-last {
    animation: movetoleft 20s linear 10s infinite;
}

#cloud-back {
    filter: url(#filter-back);
    box-shadow: 300px 300px 60px -20px #fff;
}

#cloud-mid {
    filter: url(#filter-mid);
    box-shadow: 300px 340px 170px -60px rgba(158, 168, 179, 0.5);
    left: -25vw;
}

#cloud-front {
    filter: url(#filter-front);
    box-shadow: 300px 370px 160px -100px rgba(0, 0, 0, 0.3);
    left: -25vw;
}

@keyframes movetoleft {
    0% {
    }
    30% {
        opacity: 1;
    }
    100% {
        transform: translateX(-100%);
        opacity: 0;
    }
}

@keyframes movetoleft2 {
    0% {
        transform: translateX(-50%);
    }
    30% {
        opacity: 50%;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}

@keyframes movetoleft3 {
    0% {
        transform: translateX(150%);
    }
    30% {
        opacity: 50%;
    }
    100% {
        transform: translateX(0);
        opacity: 0;
    }
}

</style>