import MobNavbar from "./components/MobNavbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";

const App = () => {
  return (
   <main>
    <Navbar />
    <MobNavbar />
    <Hero />
    <Category />
   </main>
  );
};

export default App;
