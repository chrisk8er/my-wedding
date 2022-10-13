import React from 'react';

interface FigureCanvasProps {
  src: string;
  play: boolean;
}

export const FigureCanvas = ({ src, play }: FigureCanvasProps) => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  const mask = {
    img: loadImg('https://i.imgur.com/UtkjNa3.png'),
    cols: 5,
    rows: 6,
    width: 1845,
    height: 1620,
  };

  React.useEffect(() => {
    animate(loadImg(src), mask);
  }, [play]);

  function loadImg(src: string) {
    let img = new Image();
    img.src = src;
    return img;
  }

  function animate(img: HTMLImageElement, mask: any) {
    if (canvas.current) {
      let width = (canvas.current.width = mask.width);
      let height = (canvas.current.height = mask.height);
      const ctx = canvas.current.getContext('2d');

      // set background image size
      img.width = canvas.current.width;
      img.height = canvas.current.height;

      const speed = 60;
      let rafid = null;
      let last = performance.now();
      let lastFrameUpdate = 0;

      const mWidth = mask.width / mask.cols;
      const mHeight = mask.height / mask.rows;
      let index = 0;
      let direction = 1;

      function update(now: number) {
        if (index < 29) rafid = requestAnimationFrame(update);

        const elapsed = now - last;
        last = now;

        lastFrameUpdate += elapsed;
        while (lastFrameUpdate >= speed) {
          if (play) {
            lastFrameUpdate -= speed;
            index += direction;
          }
          // if (index < 0) {
          //   index = 0;
          //   direction = 1;
          // } else if (index >= mask.cols * mask.rows) {
          //     index = mask.cols * mask.rows - 1;
          //     direction = -1;
          // }
        }

        if (ctx) {
          ctx.clearRect(0, 0, width, height);

          ctx.globalCompositeOperation = 'source-over';
          ctx.drawImage(
            mask.img,
            (index % mask.cols) * mWidth,
            Math.floor(index / mask.cols) * mHeight,
            mWidth,
            mHeight,
            0,
            0,
            width,
            height,
          );

          ctx.globalCompositeOperation = 'source-atop';
          ctx.drawImage(img, 0, 0, img.width, img.height);
        }
      }

      if (play) {
        update(performance.now());
      } else {
        ctx && ctx.clearRect(0, 0, width, height);
      }
    }
  }

  return <canvas ref={canvas} style={{ width: `100%` }}></canvas>;
};
