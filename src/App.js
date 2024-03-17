import NavBar from "./Components/Navbar/NavBar";
import HeroSlider from "./Components/HeroSlider/HeroSlider";
import Fotter from "./Components/Fotter/Fotter";
import Movies from "./Components/Movies/Movies";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <>
    <div style={{backgroundColor:"black"}}>
    <NavBar />
    <HeroSlider />
    <Movies />
    <Fotter />
    </div>
    </>
  );
}

export default App;
