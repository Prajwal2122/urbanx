import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './components/header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <AppRoutes /> {/* This will handle all pages like HomePage, ServiceDetails, etc. */}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
