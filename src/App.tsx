import Layout from "./components/layout";
import AboutMe from "./pages/about-me";
import Contacts from "./pages/contacts";
import Home from "./pages/home";
import Projects from "./pages/projects";
import { Router } from "./router";
import { Route } from "./router/router.type";

const App = () => {
  const routes: Route[] = [
    { path: "/", component: Home },
    { path: "/about-me", component: AboutMe },
    { path: "/contacts", component: Contacts },
    { path: "/works", component: Projects },
  ];

  return (
    <Layout>
      <Router routes={routes} />
    </Layout>
  );
};

export default App;
