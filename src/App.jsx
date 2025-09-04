import Home from "./components/Home";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 shadow-lg">
          AI Image Enhancer
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
          Upload your Image and let AI enhance it in seconds!
        </p>
      </div>

      <Home />

      <div className="text-sm text-gray-500 mt-6">
        Powered By @SagarAI
      </div>
    </div>
  );
};

export default App;
