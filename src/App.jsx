import React, { useEffect, useState } from 'react';
import Preloader from './preloader/Preloader';
import RouterScreen from './router/RouterScreen';
import AOS from "aos";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // simulate a 3 second loading time
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return <div>{loading ? <Preloader /> : <RouterScreen />}</div>;
}

export default App;
