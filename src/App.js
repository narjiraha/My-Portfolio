
import Navbar from './componets/Navbar/Navbar';
import Intro from './componets/Intro/Intro';
import Skill from './componets/Skills/Skill';
import Works from './componets/Works/Works';
import ContactMe from './componets/Contact/ContactMe';
import ContactForm from './componets/ContactForm/ContactForm';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <Skill />
        <Works />
        <ContactMe />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
