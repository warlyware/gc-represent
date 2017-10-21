import API_KEY from '../../api-key';

const mapSketch = (p5) => {
  let mapImage;
  let canvas;
  let canvasWidth = p5.windowWidth;
  let canvasHeight = p5.windowHeight;
  let centerLatitude = 0;
  let cneterLongitude = 0;
  let latitude = 31.2304;
  let longitdue = 121.4737;
  let zoom = 1;

  const mercatorX = (longitude) => {
    const mercatorA = (128 / p5.PI) * p5.pow(2, zoom);
    const mercatorB = longitdue + p5.PI;
    return mercatorA * mercatorB;
  }

  const mercatorY = (latitude) => {
    const mercatorA = (128 / p5.PI) * p5.pow(2, zoom);
    const mercatorB = p5.tan(p5.PI / 4 + latitude / 2);
    const mercatorC = p5.PI - p5.log(mercatorB);
    return mercatorA * mercatorC;
  }

  p5.preload = () => {
    mapImage =  p5.loadImage(`https://api.mapbox.com/styles/v1/mapbox/light-v9/static/0,0,${zoom},0,0/1024x512?access_token=${API_KEY}`);
  }

  p5.setup = () => {
    canvas = p5.createCanvas(1024, 512);
    canvas.parent('map');
    p5.translate(p5.width / 2, p5.height / 2);
    p5.imageMode(p5.CENTER);
    p5.image(mapImage, 0, 0);
  }
}

export default mapSketch;