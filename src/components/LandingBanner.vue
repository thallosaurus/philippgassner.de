<script setup lang="ts">
import { Dot } from '../intro/Dot';
</script>

<script lang="ts">
export default {
    mounted() {
        let c = document.querySelector("canvas#intro") as HTMLCanvasElement;
        if (c !== null) {
            this.ctx = c.getContext("2d")!;
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            
            window.addEventListener("resize", (ev) => {
                c.width = window.innerWidth;
                c.height = window.innerHeight;
            });

            this.initArray();

            this.draw(0);
        } else {
            console.error("LandingBanner", "canvas element wasnt found")
        }
    },
    methods: {
        initArray() {
            for (let i = 0; i < 25; i++) {

                let x = Number(Math.floor(Math.random() * window.innerWidth));
                let y = Number(Math.floor(Math.random() * window.innerHeight));
                
                this.dotArray.push(new Dot(i, x, y));
            }

        },
        draw(ts: number) {
            this.clearCanvas();

            this.dotArray.forEach((v) => {
                v.draw(this.ctx);
            })

            requestAnimationFrame((ts: number) => {
                this.draw(ts);
            });
        },
        clearCanvas() {
            this.ctx.fillStyle = "transparent";
            this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        }
    },
    data() {
        return {
            ctx: {} as CanvasRenderingContext2D,
            dotArray: [] as Array<Dot>
        }
    }
}
</script>

<template>
    <div>
        <h1>Hello, my name is Philipp Gaßner</h1>
        <span class="undertitle">Under Construction</span>
    </div>
    <!--
        <canvas id="intro"></canvas>
    -->
</template>

<style scoped>
canvas {
    z-index: -1;
}

.undertitle {
    font-family: monospace;
    background-color: black;
    padding: 1em;
    font-size: 24px;
}
</style>