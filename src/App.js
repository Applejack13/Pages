import Author from "./components/author/Author";
import Banner from "./components/banner/Banner";
import BooksList from "./components/booksList/BooksList";
import Header from "./components/header/Header";
import TrustedBy from "./components/trustedBy/TrustedBy";
function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <BooksList />
      <Author />
      <TrustedBy />
    </div>
  );
}

export default App;
