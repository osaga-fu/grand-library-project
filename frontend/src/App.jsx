import "./App.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import { AppRouter } from "./middleware/router/AppRouter";
import { BookProvider } from "./middleware/context/BookContext";
import { MemberProvider } from "./middleware/context/MemberContext";

function App() {
  return (
    <>
      <MemberProvider>
        <BookProvider>
          <AppRouter />
        </BookProvider>
      </MemberProvider>
    </>
  );
}

export default App;
