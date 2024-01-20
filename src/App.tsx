import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" type="text" label="Your name" />
      <Input id="age" type="number" label="Your age" />
    </main>
  );
}

export default App;
