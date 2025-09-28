import Card from "./components/Card"
function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black">Hello world</h1>
      <Card title="React" description="This is framework of frontend" />
      <Card title="Next" description="This is framework of React" />
      <Card title="Python" description="It is very popular language for data science and machine learning" />
      <Card title="laravel" description="It is the framework of the popular language php" />
    </>
  )
}

export default App
