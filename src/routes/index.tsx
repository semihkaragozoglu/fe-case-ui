import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";
import Layout from "../components/Layout";
import NotFound from "./NotFound";
import Home from "./Home";
import { useStore, StoreProvider } from "../context/StoreContext";

export default function index(): ReactElement {
  return (
    <Router>
      <StoreProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </StoreProvider>
    </Router>
  );
}
