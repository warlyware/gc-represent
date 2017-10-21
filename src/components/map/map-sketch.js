import API_KEY from '../../api-key';

export default (p5) => {
  let canvasWidth = p5.windowWidth;
  let canvasHeight = p5.windowHeight;
  let mapImage;
  let canvas;
  let lat = 0;
  let long = 0;

  p5.preload = () => {
    mapImage =  p5.loadImage(`https://api.mapbox.com/styles/v1/mapbox/light-v9/static/0,0,1,0,0/1024x512?access_token=${API_KEY}`);
  }

  p5.setup = () => {
    canvas = p5.createCanvas(1024, 512);
    canvas.parent('map');
    p5.image(mapImage, 0, 0);
  }

  p5.draw = () => {

  }
}