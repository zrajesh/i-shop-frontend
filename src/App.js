// Imports
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import components
import BottomNav from "./Components/navigation/BottomNav";
import TopNav from "./Components/navigation/TopNav";
// Import pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <BottomNav/>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
