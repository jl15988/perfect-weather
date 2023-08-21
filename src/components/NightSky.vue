<template>
    <div class="night_sky">
        <stars ref="starCanvas" :width="winWidth" :height="200" :num="1000"></stars>
    </div>
</template>

<script>
import Stars from "@/components/Stars";

export default {
    name: "NightSky",
    components: {Stars},
    data() {
        return {
            winWidth: 0
        }
    },
    mounted() {
        this.winWidth = document.body.clientWidth;
        this.$nextTick(() => {
            this.$refs.starCanvas.init();
        })
    }
}
</script>

<style scoped>
.night_sky {
    position: fixed;
    top: 0;
    left: 0;
    background-image: linear-gradient(rgba(0, 16, 50, 0.6), rgba(0, 0, 0, 0));
}
</style>