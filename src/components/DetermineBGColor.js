async function getColorFromTopLeftCorner(imgSrc) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = imgSrc;
    img.onload = function () {
      let canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      let ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);

      let r = 0,
        g = 0,
        b = 0,
        a = 0;
      for (let y = 0; y < 2; y++) {
        for (let x = 0; x < 2; x++) {
          let pixelData = ctx.getImageData(x, y, 1, 1).data;
          r += pixelData[0];
          g += pixelData[1];
          b += pixelData[2];
          a += pixelData[3];
        }
      }

      r /= 4;
      g /= 4;
      b /= 4;
      a /= 4;

      let rgba = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${
        a / 255
      })`;

      resolve(rgba);
    };
    img.onerror = reject;
  });
}
async function fetchColorAndSetBackground() {
  try {
    bgColor = await getColorFromTopLeftCorner(
      `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}`
    );
    return bgColor;
    // Use the color here
  } catch (error) {
    console.error(error);
    // Handle the error here
  }
}
fetchColorAndSetBackground();
