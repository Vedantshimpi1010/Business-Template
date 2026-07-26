

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar
        business={business}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

<Routes>
  <Route
    path="/"
    element={<Home darkMode={darkMode} />}
  />
</Routes>
      
      <Footer business={business} darkMode={darkMode} />
    </div>
  );
}

export default App;
