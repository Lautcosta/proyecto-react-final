import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar/NavBar";
import Title from "../components/Header/Title";
import "../style/App.css";
import ItemDetailContainer from "../components/ItemDatailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { CartContextProvider } from "../Context/CartContext";
import { createContext } from "react";

export const ContextApp = createContext();

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App ">
          <NavBar />

          <Title title="Coder Hardware" />

          <Switch>
            <Route component={ItemListContainer} exact path="/" />

            <Route
              component={ItemListContainer}
              exact
              path="/category/:idCategory"
            />

            <Route component={ItemDetailContainer} exact path="/item/:idF" />

            <Route component={Cart} exact path="/cart" />

            
            
          </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
