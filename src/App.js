import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import BooksList from "./components/booksList/BooksList";
function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <BooksList />
    </div>
  );
}

export default App;
