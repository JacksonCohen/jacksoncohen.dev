import { scrollTo } from 'src/utils/scrollTo';
import { BackToTop, FooterInfo, Highlight, Icon, IconBar, IconLink, Wrapper } from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <BackToTop
        src='https://img.icons8.com/metro/26/000000/double-up.png'
        onClick={() => scrollTo('home')}
      />
      <IconBar>
        <IconLink href='https://www.linkedin.com/in/jacksonrcohen/'>
          <Icon>
            <i className='fab fa-linkedin-in' />
          </Icon>
        </IconLink>
        <IconLink href='https://github.com/JacksonCohen'>
          <Icon>
            <i className='fab fa-github' />
          </Icon>
        </IconLink>
        <IconLink href='https://angel.co/u/jackson-cohen-1'>
          <Icon>
            <i className='fab fa-angellist' />
          </Icon>
        </IconLink>
      </IconBar>
      <FooterInfo>
        Jackson Cohen <Highlight>©{new Date().getFullYear()}</Highlight>
      </FooterInfo>
    </Wrapper>
  );
};

export default Footer;