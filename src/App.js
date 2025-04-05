import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import WellnessNavigator from './components/WellnessNavigatorComponent';
import NavigationComponent from './components/NavigationComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      {/* Header */}
      <header className="w-full py-4 pl-20 pr-9 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10 flex-nowrap">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-blue-600">guideRx</h1>
          <div className="border-l-2 border-gray-100 h-8 mx-4"></div>
          <h1 className="text-xl text-gray-500 hidden sm:block">Wellness Navigator</h1>
        </div>

        {/* Fullscreen Button with FontAwesome Icon */}
        <button
          onClick={toggleFullscreen}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground p-2"
          title="Toggle Fullscreen"
        >
          <FontAwesomeIcon
            icon={isFullscreen ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter}
            size="lg"
            className="text-gray-600"
          />
        </button>
      </header>

      {/* Main Content */}
      <Container>
        <Routes>
          <Route path="/" element={<WellnessNavigator />} />
          <Route path="/Navigator" element={<NavigationComponent />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
