<template>
    <div class="time_zone">
        {{now}}
    </div>
</template>
<script>
    export default {
        name:'vue_time',
        data() {
            return { now: Date(Date.now()) }
        },
        mounted() {
            setInterval(() => {
                this.now = Date(Date.now())
            }, 1000)
        }

    }
</script>
<style>
.time_zone {
    position: absolute;
    top: 0;
    left: 0;
    color: #f6f6f6;
}
</style>