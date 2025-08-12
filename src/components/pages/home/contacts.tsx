import { Container } from "cubes-ui";
import Title from "../../ui/title";
import ContactsComponent from "../contacts";
export default function HomeContacts() {
  return (
    <Container className="mt-12 px-0">
      <div className="grid grid-cols-12 gap-4">
        <Title className="col-span-7 max-lg:col-span-8 max-md:col-span-4">
          contacts
        </Title>
      </div>
      <ContactsComponent />
    </Container>
  );
}
