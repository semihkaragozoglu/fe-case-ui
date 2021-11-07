import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";
import Layout from "../components/Layout";
import NotFound from "./NotFound";

export default function index(): ReactElement {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}
