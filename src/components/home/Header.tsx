import { styled } from '@stitches/react';
import { scrollTo } from 'src/utils/scrollTo';

const Section = styled('section', {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#373850',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const HeroMessage = styled('div', {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  color: '#ebe9e9',
  fontSize: '2rem',
  margin: '0 0 15px 0',
});

const Highlight = styled('span', {
  color: '#ffa600',
  fontWeight: 700,
});

const CallToAction = styled('button', {
  color: 'white',
  background: 'none',
  border: '1px #ebe9e9 solid',
  borderRadius: '1px',
  padding: '10px 10px',
  cursor: 'pointer',
  transition: '.5s ease-out',
  '&:not(:hover)': {
    '& i': {
      transition: '.5s',
      transform: 'rotate(0deg)',
    },
  },
  '&:hover': {
    background: '#007cc6',
    '& i': {
      transition: '.5s',
      transform: 'rotate(90deg)',
    },
  },
});

const Header = ({ homeRef }) => {
  return (
    <Section id='home' ref={homeRef}>
      <Wrapper>
        <HeroMessage>
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
