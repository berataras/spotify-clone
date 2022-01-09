import {Content, Footer, Sidebar} from "./components";
import {
    BrowserRouter as Router
} from "react-router-dom";

import {Home} from 'pages';

function App() {
  return (
    <Router>
      <div className="wrapper">
          <Sidebar />
          <Content />
      </div>
        <Footer />
    </Router>
  );
}

export default App;
