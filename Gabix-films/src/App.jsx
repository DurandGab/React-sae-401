import "./styles.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ResponsiveAppBar from "./views/ResponsiveAppBar";
import AccueilView from "./views/AccueilView";
import FilmsView from "./views/FilmsView";
import PrixView from "./views/PrixView";
import AjoutView from "./views/AjoutView";
import ProfileView from "./views/ProfileView";
import AccountView from "./views/AccountView";
import DashboardView from "./views/DashboardView";
import LogoutView from "./views/LogoutView";
import LoginView from "./views/LoginView";
import IdentView from "./views/IdentView";
import Footer from "./views/Footer";
import DetailView from "./views/DetailView";
import DetailActeurView from "./views/DetailActeurView";
import AjoutCritiqueView from "./views/ajoutCritiqueView"

import Container from "@mui/material/Container";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container sx={{ py: 10, minHeight: 500 }} maxWidth="xl">
          <Routes>
            <Route path="/" element={<AccueilView />} />
            <Route path="/films" element={<FilmsView />} />
            <Route path="/detailfilm/:titre" element={<DetailView />} />
            <Route path="/detailacteur/:id_acteur" element={<DetailActeurView />} />
            <Route path="/ajoutcritique" element={<AjoutCritiqueView />} />

            <Route path="/prix" element={<PrixView />} />
            <Route path="/ajoutfilm" element={<AjoutView />} />

            <Route path="/login" element={<LoginView />} />
            <Route path="/ident" element={<IdentView />} />


            <Route path="/profil" element={<ProfileView />} />
            <Route path="/account" element={<AccountView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/logout" element={<LogoutView />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
