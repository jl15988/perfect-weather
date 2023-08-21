<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import Star from "@/utils/star";

export default {
    name: "Stars",
    props: {
        width: Number,
        height: Number,
        num: {
            type: Number,
            default: 200
        }
    },
    data() {
        return {
            canvas: null,
            context: null,
            stars: []
        }
    },
    methods: {
        init() {
            const screenW = this.width;
            const screenH = this.height;
            let canvas = null;

            canvas = this.$refs.canvas;
            canvas.width = screenW;
            canvas.height = screenH;
            this.context = canvas.getContext('2d');
            this.canvas = canvas;

            //创建星星
            for (let i = 0; i < this.num; i++) {
                let x = Math.round(Math.random() * screenW);
                let y = Math.round(Math.random() * screenH);
                let length = 1 + Math.random() * 2;
                let opacity = Math.random();

                // 创建星星实例
                let star = new Star(x, y, length, opacity, screenW, screenH);
                this.stars.push(star);
            }
            setInterval(this.timerExecutor, 1000 / 10);
            // this.timerExecutor();
        },
        timerExecutor() {
            const context = this.context,
                stars = this.stars,
                screenW = this.width,
                screenH = this.height;

            context.clearRect(0, 0, screenW, screenH);
            for (let i = 0; i < stars.length; i++) {
                stars[i].draw(context);
            }
            // requestAnimationFrame(this.timerExecutor.bind(this));
        }
    }
}
</script>

<style scoped>

</style>