export default {
    getDates(date) {
        date = date || new Date();
        return {
            date: date,
            timestamp: date.getTime(),
            year: date.getFullYear(),
            month: this.fill(date.getMonth() + 1),
            day: this.fill(date.getDate()),
            week: date.getDay(),
            weekName: this.getWeekName(date),
            hour: this.fill(date.getHours()),
            minute: this.fill(date.getMinutes()),
            second: this.fill(date.getSeconds()),
            months: date.getMonth() + 1,
            days: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            name: this.getTimeName(date),
            heavenlyStemsAndEarthlyBranchesName: this.getHeavenlyStemsAndEarthlyBranchesName(date)
        }
    },
    fill(n) {
        if (n < 10) {
            return "0" + n;
        } else {
            return n;
        }
    },
    getWeekName(date) {
        if (localStorage.getItem('language') === "en") {
            return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
        }
        return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][date.getDay()];
    },
    getTimeName(date) {
        const hours = date.getHours();
        if (hours >= 1 && hours < 5) {
            return "凌晨";
        } else if (hours >= 5 && hours < 8) {
            return "早上";
        } else if (hours >= 8 && hours < 11) {
            return "上午";
        } else if (hours >= 11 && hours < 13) {
            return "中午";
        } else if (hours >= 13 && hours < 17) {
            return "下午";
        } else if (hours >= 17 && hours < 19) {
            return "傍晚";
        } else if (hours >= 19 && hours < 23) {
            return "晚上";
        } else if (hours >= 23 || hours < 1) {
            return "深夜";
        }
    },
    getHeavenlyStemsAndEarthlyBranchesName(date) {
        const hours = date.getHours();
        if (hours >= 23 || hours < 1) {
            return "子时";
        } else if (hours >= 1 && hours < 3) {
            return "丑时";
        } else if (hours >= 3 && hours < 5) {
            return "寅时";
        } else if (hours >= 5 && hours < 7) {
            return "卯时";
        } else if (hours >= 7 && hours < 9) {
            return "辰时";
        } else if (hours >= 9 && hours < 11) {
            return "巳时";
        } else if (hours >= 11 && hours < 13) {
            return "午时";
        } else if (hours >= 13 && hours < 15) {
            return "未时";
        } else if (hours >= 15 && hours < 17) {
            return "申时";
        } else if (hours >= 17 && hours < 19) {
            return "酉时";
        } else if (hours >= 19 && hours < 21) {
            return "戌时";
        } else if (hours >= 21 && hours < 23) {
            return "亥时";
        }
    }
}