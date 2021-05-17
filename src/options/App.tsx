import React from 'react';
import Navbar from './components/Navbar';
import SettingsPage from './SettingsPage';

const App: React.FC = () => (
  <div className="min-w-[350px] min-h-[400px]">
    <Navbar />
    <div className="font-sans mx-auto max-w-screen-lg sm:px-8 sm:py-10">
      <SettingsPage />
    </div>
  </div>
);

export default App;
