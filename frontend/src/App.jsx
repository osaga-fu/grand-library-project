import "./App.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import { AppRouter } from "./middleware/router/AppRouter";
import { BookProvider } from "./middleware/context/BookContext";

function App() {
  return (
    <>
      <BookProvider>
        <AppRouter />
      </BookProvider>
    </>
  );
}

export default App;
