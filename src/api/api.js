import axios from "axios";
import {testData} from "@/data/testData";

export const api = {
    getWeather() {
        return new Promise(((resolve, reject) => {
            if (process.env.NODE_ENV === 'production') {
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