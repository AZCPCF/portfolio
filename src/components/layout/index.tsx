import { Container } from "cubes-ui";
import { ReactNode } from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container className="max-w-7xl max-md:px-2 m-auto">
      <Header />
      <main className="my-8">{children}</main>
      <Footer />
    </Container>
  );
}
