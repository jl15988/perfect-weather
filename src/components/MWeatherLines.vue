<template>
  <div class="m-weather">
    <div class="weather-list">
      <div class="weather-item" v-for="item in list">
        <div class="date">{{ item.date.substring(5) }}</div>
        <div class="icon">
          <img class="weather_icon" :src="require(`/src/assets/weather_icon/${item.weather_icon_id}.png`)"/>
        </div>
        <div class="blank"></div>
        <div class="wind">
          <div class="direction">{{ item.wind_direction }}</div>
          <div class="level">{{ item.wind_level + "级" }}</div>
        </div>
      </div>
    </div>
    <div class="temperature_lines" ref="temperatureLines"></div>
  </div>
</template>

<script>
import echarts from '@/utils/echarts.min'

export default {
  name: "MWeatherLines",
  props: {
    /*
    "condition": "多云",
    "date": "2023-08-08",
    "high_temperature": "31",
    "low_temperature": "23",
    "weather_icon_id": "1",
    "wind_direction": "北风",
    "wind_level": "3-4"
     */
    list: Array
  },
  data() {
    return {
      charts: null
    }
  },
  watch: {
    list: {
      handler(n) {
        this.init();
      }
    }
  },
  methods: {
    init() {
      const temperatureLines = this.$refs.temperatureLines;
      let charts = null;
      if (!this.charts) {
        charts = this.charts = echarts.init(temperatureLines);
      } else {
        charts = this.charts;
      }
      charts.setOption(this.getChartOption());
    },
    getChartOption() {
      const highTemperatures = this.list.map(item => {
        return item.high_temperature;
      });
      const lowTemperatures = this.list.map(item => {
        return item.low_temperature;
      });
      return {
        xAxis: {
          show: false,
          type: 'category'
        },
        yAxis: {
          show: false,
          type: 'value',
          max: Math.max.apply(null, highTemperatures),
          min: Math.min.apply(null, lowTemperatures)
        },
        grid: {
          left: '0%',
          right: '0%',
          top: '26%',
          bottom: '6%',
          // containLabel: true
        },
        series: [
          {
            data: highTemperatures,
            type: 'line',
            label: {
              show: true,
              position: 'top',
              formatter: "{c}°"
            }
          },
          {
            data: lowTemperatures,
            type: 'line',
            label: {
              show: true,
              position: 'top',
              formatter: "{c}°"
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
$weather-width: 74px * 16;

.m-weather {
  position: relative;
  width: $weather-width;
  color: white;
}

.weather-list {
  display: flex;
  width: 100%;
}

.weather-item {
  width: calc(100% / 16);
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 4px;
  }

  .weather_icon {
    width: 30px;
    vertical-align: middle;
  }

  .blank {
    height: 110px;
  }
}

.temperature_lines {
  position: absolute;
  top: 60px;
  left: 0;
  width: $weather-width;
  height: 100px;
}
</style>