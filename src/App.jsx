import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";
import logo from "./assets/logo.png";
import Courses from "./Courses";
import AddCoursesForm from "./AddCoursesForm";
import CreateNotes from "./CreateNotes";
import ListNotes from "./ListNotes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <div className="absolute top-10 left-1/2 -translate-x-1/2  ">
        <img src={logo} alt="Logo" className="w-64" />
      </div>
      <QueryClientProvider client={queryClient}>
        <Header />

        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/add" element={<AddCoursesForm />} />
          <Route path="/create" element={<CreateNotes />} /> 
          <Route path="/list" element={<ListNotes /> } />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
