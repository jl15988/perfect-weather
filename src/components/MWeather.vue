<template>
    <div v-if="weather">
        <div class="current_weather">
            <span @click="handleClick" @dblclick="handleDoubleClick">{{ weather.city_name }}</span>
            <img class="weather_icon" :src="require(`/src/assets/weather_icon/${weather.weather_icon_id}.png`)"/>
            <span>{{ weather.current_condition }}</span>
            <span>{{ weather.current_temperature + "℃" }}</span>
            <span>{{ weather.wind_direction + " " + weather.wind_level + "级" }}</span>
            <span class="quality_level">{{ weather.quality_level }}</span>
        </div>
        <div class="weather_range">
            <span>{{ `${weather.high_temperature}℃ ~ ${weather.low_temperature}℃` }}</span>
            <span class="tip">{{ weather.tips }}</span>
        </div>
        <div class="weather_line">
            <m-weather-lines :list="weather.forecast_list"></m-weather-lines>
        </div>
    </div>
</template>

<script>
import {api} from "@/api/api";
import MWeatherLines from "@/components/MWeatherLines";

export default {
    name: "MWeather",
    components: {MWeatherLines},
    data() {
        return {
            weather: {
                "alert": null,
                "aqi": 47,
                "city_name": "青岛",
                "current_condition": "晴",
                "current_temperature": 31,
                "current_time": 1691566313,
                "dat_condition": "晴",
                "dat_high_temperature": 31,
                "dat_low_temperature": 26,
                "dat_weather_icon_id": "0",
                "day_condition": "多云",
                "forecast_list": [],
                "high_temperature": 31,
                "hourly_forecast": [],
                "low_temperature": 23,
                "moji_city_id": 1407,
                "night_condition": "晴",
                "origin_data": {},
                "quality_level": "优",
                "tips": "有些热了，记得多喝水。",
                "tomorrow_aqi": 86,
                "tomorrow_condition": "晴",
                "tomorrow_high_temperature": 32,
                "tomorrow_low_temperature": 24,
                "tomorrow_quality_level": "良",
                "tomorrow_weather_icon_id": "0",
                "update_time": "2023-08-09 15:25:08",
                "weather_icon_id": "0",
                "wind_direction": "北风",
                "wind_level": 5
            }
        }
    },
    methods: {
        getWeather() {
            api.getWeather().then(res => {
                if (res) {
                    this.weather = res.weather;
                    this.$emit('change', this.weather);
                }
            })
        },
        handleClick() {
            this.timer = setTimeout(() => {
                this.timer = null;
            }, 250);  // 250 毫秒内单击时触发单击事件
        },
        handleDoubleClick() {
            clearTimeout(this.timer);
            this.getWeather();
            this.timer = null;
        }
    },
    mounted() {
        this.getWeather();
        setInterval(this.getWeather, 1000 * 60 * 30);
    }
}
</script>

<style lang="scss" scoped>
.current_weather, .weather_range {
    font-size: 20px;
    font-weight: bolder;
    color: white;

    & > * {
        margin-left: 6px;
    }

    .weather_icon {
        width: 30px;
        vertical-align: middle;
    }

    .quality_level {
        border-radius: 3px;
        background-color: rgba(186, 186, 206, 0.4);
        padding: 1px 2px;
        text-shadow: .8px .8px .5px rgba(0, 0, 0, .16);
    }

    .tip {
        margin-left: 20px;
    }
}

.weather_line {
    display: inline-block;
    margin: 20px auto;
    background-color: rgba(0, 0, 0, .1);
    border-radius: 6px;
    padding: 10px;
}
</style>