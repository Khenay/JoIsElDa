import Main from "./page/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Finance/> */}
      <BrowserRouter>
        <Main />
        
      </BrowserRouter>

    </div>
  );
}

export default App;
