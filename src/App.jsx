import gsap from "gsap";
import { Resume, Safari, Terminal } from "@windows";

import { Navbar, Welcome, Dock } from "@components";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </main>
  );
};

export default App;
