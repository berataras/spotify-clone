import {Content, Footer, Sidebar} from "./components";
import {
    BrowserRouter
} from "react-router-dom";

import {Home} from 'pages';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
          <Sidebar />
          <Content />
      </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
