import TOS from './components/TOS.jsx';
import Menu from './components/Menu.jsx';
import Mid from './components/Mid.jsx';
import Home2 from './components/Home2.jsx';
import { useState } from 'react';
function App() {
  const [showApp, setShowApp] = useState(0);

  function toggleApp(appNum) {
    setShowApp(appNum);
  }

  return (
    <>
      <div className=" border rounded-[2.25rem] border-dashed border-white bg-white/40 p-8 m-4 flex justify-center items-center animate-[slide-up_1s_ease-out] min-md:p-12">
        {showApp === 0 ? <Home2 onToggle={toggleApp} /> : null}
        {showApp === 1 ? <Mid onToggle={toggleApp} /> : null}
        {showApp === 2 ? <TOS onToggle={toggleApp} /> : null}
        {showApp === 3 ? <Menu onToggle={toggleApp} /> : null}
      </div>
    </>
  )
}

export default App
