import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Row from "./components/PosterRow/Row.jsx";
import Footer from "./components/Footer/footer.jsx";
import { Popular_movie_Url, Tv_series, Trending } from "./Api/constants.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Row url={Trending} tittle="Trending Movies & Series" />
      <Row url={Popular_movie_Url} tittle="Popular" />
      <Row url={Tv_series} tittle="Tv Series" />
      <Footer />
    </>
  );
}

export default App;
