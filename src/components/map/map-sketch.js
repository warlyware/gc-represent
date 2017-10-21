import API_KEY from '../../api-key';

import users from '../../data/users';

const mapSketch = (p5) => {
  let mapImage;
  let canvas;
  let userLocations = [];
  let canvasWidth = p5.windowWidth;
  let canvasHeight = p5.windowHeight;
  let centerLatitude = 0;
  let centerLongitude = 0;
  let latitude = 31.2304;
  let longitude = 121.4737;
  let zoom = 1;

  const webMercatorX = (longitude) => {
    longitude = p5.radians(longitude);
    const mercatorA = (256 / p5.PI) * p5.pow(2, zoom);
    const mercatorB = longitude + p5.PI;
    return mercatorA * mercatorB;
  }

  const webMercatorY = (latitude) => {
    latitude = p5.radians(latitude);
    const mercatorA = (256 / p5.PI) * p5.pow(2, zoom);
    const mercatorB = p5.tan(p5.PI / 4 + latitude / 2);
    const mercatorC = p5.PI - p5.log(mercatorB);
    return mercatorA * mercatorC;
  }

  p5.preload = () => {
    mapImage = p5.loadImage(`https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,${zoom},0,0/1024x512?access_token=${API_KEY}`);
    for (const [userName, userInfo] of Object.entries(users)) {
      userLocations.push({
        longitude: userInfo.longitude,
        latitude: userInfo.latitude
      });
    }
  }

  p5.setup = () => {
    canvas = p5.createCanvas(1024, 512);
    canvas.parent('map');
    p5.translate(p5.width / 2, p5.height / 2);
    p5.imageMode(p5.CENTER);
    p5.image(mapImage, 0, 0);

    const centerX = webMercatorX(centerLongitude);
    const centerY = webMercatorY(centerLatitude);

    for (const { longitude, latitude } of userLocations) {
      const x = webMercatorX(longitude) - centerX;
      const y = webMercatorY(latitude) - centerY;

      p5.fill(255, 0, 255, 200);
      p5.ellipse(x, y, 20, 20);
    }
  }
}

export default mapSketch;