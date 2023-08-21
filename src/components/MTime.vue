<template>
    <div class="time-box">
        <div class="clock">{{ clockText }}</div>
        <div class="date">{{ dateText }}</div>
    </div>
</template>

<script>
import DateTimeUtils from "@/utils/DateTimeUtils";

export default {
    name: "MTime",
    data() {
        return {
            nowDateTime: DateTimeUtils.getDates(new Date()),
            dayProgressColor: [
                {color: '#6f7ad3', percentage: 20},
                {color: '#1989fa', percentage: 40},
                {color: '#5cb87a', percentage: 60},
                {color: '#e6a23c', percentage: 80},
                {color: '#f56c6c', percentage: 100}
            ],
        }
    },
    computed: {
        dayProgress() {
            const nowDateTime = this.nowDateTime;
            const s = (nowDateTime.hours * 60 * 60 + nowDateTime.minutes * 60 + nowDateTime.seconds) / (24 * 60 * 60);
            return Number((s * 100).toFixed(2));
        },
        clockText() {
            const nowDateTime = this.nowDateTime;
            return `${nowDateTime.hour}:${nowDateTime.minute}:${nowDateTime.second}`;
        },
        dateText() {
            const nowDateTime = this.nowDateTime;
            let y = "年", M = "月", d = "日";
            return `${nowDateTime.year}${y}${nowDateTime.month}${M}${nowDateTime.day}${d}  ${nowDateTime.weekName} ${nowDateTime.name} ${nowDateTime.heavenlyStemsAndEarthlyBranchesName}`;
        }
    },
    methods: {
        timerExecutor() {
            this.nowDateTime = DateTimeUtils.getDates(new Date());
            requestAnimationFrame(this.timerExecutor.bind(this));
        }
    },
    created() {
        this.timerExecutor();
    }
}
</script>

<style lang="scss" scoped>
.time-box {
    width: 550px;
    color: #fff;
    z-index: 10;
    text-align: center;
    margin: 0 auto;

    .clock {
        font-size: 120px;
        font-weight: bolder;
    }

    .date {
        font-size: 30px;
        font-weight: bold;
    }

    .day-progress {
        width: 340px;
        margin: 0 auto;
        display: flex;
        font-size: 40px;
        align-items: center;
    }
}
</style>