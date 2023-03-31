export class Dot {
    private index: number;
    private x: number;
    private y: number;

    constructor(index: number, x: number, y: number) {
        this.x = x;
        this.y = y;
        this.index = index;
    }

    draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
        context.fillStyle = 'red';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();
    }
}