import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Stats from './Components/Stats';
import Feature from './Components/Feature';
import SampleCatalogue from './Components/SampleCatalogue';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Stats />
      <main>
      <Feature 
        title="Learning Science"
        description="Our approach involves delving into every science concept,
        meticulously crafting audio visual presentations that bring the subject matter to life. 
        We are dedicated to transforming complex 
        ideas into engaging visual experiences, ensuring that
        learners grasp the essence of each concept effortlessly."
        image="/assets/images/learning-science-image.jpg"
        reverse={false}
      />
      <Feature 
        title="Vedic Math"
        description="Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly."
        image="/assets/images/vedic-math-image.jpg"
        reverse={true}
      />
      <Feature 
        title="Bespoke"
        description="Tailored Learning Solutions - Your Vision, Our Creation. where your unique educational vision takes center stage. 
        At [Your Company Name], we understand that one size doesn't fit all in the world of education. That's why we specialize in crafting custom learning materials
        that align perfectly with your requirements."
        image="/assets/images/bespoke-image.jpg"
        reverse={false}
      />
      </main>
      <SampleCatalogue />
      <Footer />
    </div>
  );
};

export default App;