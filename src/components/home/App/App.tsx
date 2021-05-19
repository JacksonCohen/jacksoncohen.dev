import { useRef, useState } from 'react';
import { About, Contact, Footer, Header, Navbar, Projects } from 'src/components';
import { useSticky } from 'src/shared/hooks';
import { globalStyles } from './styles';

const App = () => {
  const [visibleSection, setVisibleSection] = useState<string>();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  globalStyles();

  const sectionRefs = [
    { section: 'Home', ref: homeRef },
    { section: 'About', ref: aboutRef },
    { section: 'Projects', ref: projectsRef },
    { section: 'Contact', ref: contactRef },
  ];

  useSticky(sectionRefs, { visibleSection, setVisibleSection });

  return (
    <div>
      <Header homeRef={homeRef} />
      <Navbar section={visibleSection} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
};

export default App;
