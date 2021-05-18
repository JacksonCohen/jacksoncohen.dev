import { CallToAction, Canvas, HeroMessage, Highlight, Section, Wrapper } from './styles';
import { scrollTo } from 'src/shared/utils';
import { Circle } from 'src/components';
import { useEffect } from 'react';

const Header = ({ homeRef }) => {
  const updateCanvas = () => {
    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d', { alpha: false });
    const mouse = {
      x: undefined,
      y: undefined,
    };

    let circles = [];
    const init = () => {
      circles = [];

      for (let i = 0; i < 40; i++) {
        const radius = Math.random() * 10 + 2;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5 * 5;
        let dy = Math.random() - 0.5 * 5;

        const circle = new Circle(c, { x, y }, { dx, dy }, radius, mouse);
        circles.push(circle);
      }
    };

    const animate = () => {
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      circles.forEach((circle) => circle.update());
      window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });

    // setInterval(init, 2000);
    init();
    animate();
  };

  useEffect(() => {
    updateCanvas();
  }, []);

  return (
    <Section id='home' ref={homeRef}>
      <Canvas />
      <Wrapper>
        <HeroMessage fontSize={{ '@bp0': 'sm', '@bp1': 'md' }}>
          Hi, my name is <Highlight>Jackson Cohen</Highlight>.
          <br />
          I'm a software engineer.
        </HeroMessage>
        <CallToAction onClick={() => scrollTo('portfolio')}>
          View my work <i className='fas fa-arrow-right' />
        </CallToAction>
      </Wrapper>
    </Section>
  );
};

export default Header;
