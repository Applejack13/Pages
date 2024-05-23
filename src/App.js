import Author from "./components/author/Author";
import Banner from "./components/banner/Banner";
import BooksList from "./components/booksList/BooksList";
import Header from "./components/header/Header";
function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <BooksList />
      <Author />
    </div>
  );
}

export default App;
