import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-y-5">
        <h1>Hello</h1>

        <div className="flex gap-x-4 items-center">
          <Button size="sm">Hello</Button>
          <Button onClick={()=>alert("hi")}>Hello</Button>
          <Button size="lg">Hello</Button>
          <Button size="md" outline>
            Hello
          </Button>
          <Button rounded="pill">Hello</Button>
        </div>

        <div className="flex gap-x-4 items-center">
          <Button size="sm" intent="secondary">
            Hello
          </Button>
          <Button intent="secondary">Hello</Button>
          <Button intent="secondary" size="lg">
            Hello
          </Button>
          <Button size="md" outline intent="secondary">
            Hello
          </Button>
          <Button intent="secondary" rounded="pill">
            Hello
          </Button>
        </div>

        <div className="flex gap-x-4 items-center">
          <Button size="sm" intent="warning">
            Hello
          </Button>
          <Button intent="warning">Hello</Button>
          <Button intent="warning" size="lg">
            Hello
          </Button>
          <Button size="md" outline intent="warning">
            Hello
          </Button>
          <Button intent="warning" rounded="pill">
            Hello
          </Button>
        </div>

        <div className="flex gap-x-4 items-center">
          <Button size="sm" intent="danger">
            Hello
          </Button>
          <Button intent="danger">Hello</Button>
          <Button intent="danger" size="lg">
            Hello
          </Button>
          <Button size="md" outline intent="danger">
            Hello
          </Button>
          <Button intent="danger" rounded="pill" outline>
            Hello
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
