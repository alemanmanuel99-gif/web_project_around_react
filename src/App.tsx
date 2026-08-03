
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App(): React.JSX.Element {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;