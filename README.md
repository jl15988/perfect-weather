# 完美天气（perfect-weather）

![](https://img.shields.io/badge/github-jl15988-000000?logo=github&link=https://github.com/jl15988) ![](https://img.shields.io/badge/github-perfect--weather-000000?logo=github&link=https://github.com/jl15988/perfect-weather) [![](https://img.shields.io/badge/bilibili-%E4%BC%9A%E5%8A%9F%E5%A4%AB%E7%9A%84%E6%9D%8E%E7%99%BD-fb7299?logo=bilibili&link=https%3A%2F%2Fspace.bilibili.com%2F394641202)](https://space.bilibili.com/394641202)
> 这是一个天气类的Vue3项目，是 `wallpaper engine` 上的同名网页壁纸，作为开发者，现开源代码，更想与大家共同遇见美好天气。


## 预览
预览地址：https://jl15988.github.io/perfect-weather/

## 功能
- 支持自定义背景
- 支持天气动效（目前只有阳光和多云），且随天气变化而变化
- 可查看前天、今天、未来14天天气情况
- 天气包括天气状况、温度、风向、风级、且有温度变化折线图
- 可查看时间、日期、星期、时间段、地支纪时法

更多功能敬请期待...

## wallpaper engine
现最新壁纸已发布到wallpaper engine，搜索**完美天气**即可订阅，或者搜索**功夫李白**查看本作者所有壁纸，欢迎关注订阅，壁纸更新和发布会在 [![](https://img.shields.io/badge/dynamic/json?color=fb7299&label=bilibili&logo=bilibili&query=%24.data.totalSubs&suffix=%20fans&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dbilibili%26queryKey%3D394641202)](https://space.bilibili.com/394641202) 发布视频，欢迎关注，发现更多好看、好玩的壁纸！

## 项目启动
首先，你应该通过下面命令去安装依赖
```shell
npm install
```

然后通过下面命令去运行它
```shell
npm run serve
```

同样，你也可以通过下面命令来打包，以便于发到服务器
```shell
npm run build
```

## 使用
该项目仅供个人学习使用，请勿将api用于商用等赚取利益的渠道。

### 1. 本地环境
本地使用的是测试数据，如果想切换api数据，请到`src/api/api.js`中，将`useTestData`改为false（不影响生产环境）。

### 2. 生产环境
生产环境自动为api数据，无需切换。

## 组件

### 1. WeatherType
该组件为动态天气背景，识别api数据的`weather_icon_id`属性，现在只加了三种环境，多云、阳光和星空。后面会继续添加其他效果。

### 2. MTime
时间组件。

### 3. MWeather
显示的天气信息组件。

### 4. MWeatherLines
天气折线图组件。