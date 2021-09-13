// Import components
import { BrowserRouter, Switch } from "react-router-dom";
import BottomNav from "./Components/navigation/BottomNav";
import TopNav from "./Components/navigation/TopNav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <BottomNav/>
        <Switch>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
