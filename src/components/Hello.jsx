import { Container } from "semantic-ui-react";
import ContactForm from "../modules/Contact";

const Hello = () => {
  return (
    <>
      <Container>
        <h1 id="hello">Hello World, this is my portfolio</h1>
      </Container>
      <ContactForm />
    </>
  );
};

export default Hello;
