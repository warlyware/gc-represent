export default (p5) => {
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;

  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('map');
  }

  p5.draw = () => {
    p5.ellipse(50, 50, 80, 80);
  }
}