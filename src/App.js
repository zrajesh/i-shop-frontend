// Imports
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import components
import BottomNav from "./Components/navigation/BottomNav";
import TopNav from "./Components/navigation/TopNav";
import ProductDetails from "./Components/productDetails/ProductDetails";
// Import pages
import HomePage from "./pages/HomePage";
// Import store
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <TopNav />
        <BottomNav/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product/:productId" component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
