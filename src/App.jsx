import "./App.css";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import AddCoursesForm from "./components/AddCoursesForm";
import CreateNotes from "./components/CreateNotes";
import ListNotes from "./components/ListNotes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <div className="flex justify-center mt-5">
            <img src={logo} alt="Logo" className="w-64" />
          </div>

          <Header />

          <main className="grow mt-20">
            <Routes>
              <Route path="/" element={<MainBody />} />
              <Route path="/add" element={<AddCoursesForm />} />
              <Route path="/create" element={<CreateNotes />} />
              <Route path="/list" element={<ListNotes />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
