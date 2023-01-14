import Match from "./components/match"
function App() {
  return (
    <main className="App bg-pumpkin-100 min-h-screen">
      <header className="App-header flex justify-center  bg-pumpkin-400 shadow-lg text-white py-3 text-lg">
        Mix-It-Up
      </header>
      <div className="container mx-auto lg:max-w-2xl md:max-w-xl p-3 md:p-5 mt-6 md:mt-8">
        <Match />
      </div>
    </main>
  );
}

export default App;
