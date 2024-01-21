import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  function doSomething() {
    console.log("hi");
  }

  return (
    <main>
      <Input id="name" type="text" label="Your name" />
      <Input id="age" type="number" label="Your age" />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
      <Container onClick={doSomething} as={"button"}>
        Click me
      </Container>
    </main>
  );
}

export default App;
