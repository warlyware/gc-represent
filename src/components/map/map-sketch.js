import API_KEY from '../../api-key';

export default (p5) => {
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  const mapImage =  p5.loadImage(`https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/-122.4241,37.78,14.25,0,60/600x600?${API_KEY}`);

  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('map');
  }

  p5.draw = () => {
    p5.ellipse(50, 50, 80, 80);
  }
}