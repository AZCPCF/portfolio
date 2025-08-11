import { Container } from "cubes-ui";
import HomeQuote from "../components/pages/home/quote";
import HomeWhoAmI from "../components/pages/home/whoami";
export default function Home() {
  return (
    <Container className="px-0">
      <HomeWhoAmI />
      <HomeQuote />
    </Container>
  );
}
