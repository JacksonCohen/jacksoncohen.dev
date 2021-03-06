import { useCallback, useEffect } from 'react';
import { useWindowDimensions } from 'src/shared';
import { Circle } from 'src/components';
import { Canvas as CanvasEl } from './styles';

const Canvas = () => {
  const { width } = useWindowDimensions();

  const updateCanvas = useCallback(() => {
    const canvas = document.querySelector('canvas');
    canvas.width = document.body.clientWidth - 1;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d');
    const mouse = {
      x: undefined,
      y: undefined,
    };

    let circles = [];
    const init = () => {
      circles = [];
      let numDots = width <= 600 ? 20 : width <= 1024 ? 30 : 40;
      for (let i = 0; i < numDots; i++) {
        const radius = Math.random() * 10 + 2;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let dx = Math.random() - 0.5 * 5;
        let dy = Math.random() - 0.5 * 5;

        const circle = new Circle(c, { x, y }, { dx, dy }, radius, mouse);
        circles.push(circle);
      }
    };

    const animate = () => {
      c.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle) => circle.update());
      window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener('resize', () => {
      canvas.width = document.body.clientWidth - 1;
      canvas.height = window.innerHeight;
      init();
    });

    // setInterval(init, 2000);
    init();
    animate();
  }, [width]);

  useEffect(() => {
    updateCanvas();
  }, [updateCanvas]);

  return <CanvasEl />;
};

export default Canvas;
