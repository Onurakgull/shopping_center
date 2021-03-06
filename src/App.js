import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Main from "./Component/Main";

function App() {
  return (
    <div className="container h-8 mx-auto p-5">
      <Header/>
      <Main/>
      <Content/>
      <Footer/>
    </div>
    
  );
}

export default App;
