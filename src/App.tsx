import Input from "./components/Input";
import Form, { type FormRef } from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormRef>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };

    customForm.current?.clear();
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
