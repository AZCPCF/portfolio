import Layout from "./components/layout";
import Home from "./pages/home";
import { Router } from "./router";
import { Route } from "./router/router.type";
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  const routes: Route[] = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
  ];

  return (
    <Layout>
      <Router routes={routes} />
    </Layout>
  );
};

export default App;
