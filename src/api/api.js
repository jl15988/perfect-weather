import axios from "axios";
import {testData} from "@/data/testData";

// 本地环境是否使用测试数据
const useTestData = true;

export const api = {
    getWeather() {
        return new Promise(((resolve, reject) => {
            if (process.env.NODE_ENV === 'production' || !useTestData) {
                axios.get('https://www.toutiao.com/stream/widget/local_weather/data/').then(res => {
                    resolve(res.data.data);
                }).catch(err => {
                    reject(err);
                });
            } else {
                resolve(testData);
            }
        }));
    }
}