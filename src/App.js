import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//componentes principales
import NavHorizontalBar from "./components/NavHorizontalBar";
import NavVerticalBar from "./components/NavVerticalBar";

import Home from "./pages/Home";
import Inicio from "./pages/Inicio";

import GestionDeFacultades from "./pages/Administrador/Aldair/GestionDeFacultades";

import GestionDeSemestres from "./pages/Administrador/Aldair/GestionDeSemestres";
import GestionDeUsuarios from "./pages/Administrador/Aldair/GestionDeUsuarios";

import NuevaFacultad from "./pages/Administrador/Camila/NuevaFacultad";
import NuevoSemestre from "./pages/Administrador/Camila/NuevoSemestre";
import NuevoUsuario from "./pages/Administrador/Camila/NuevoUsuario";
import NuevaEspecialidad from "./pages/Administrador/Ivan/NuevaEspecialidad";

import NuevoUsuario2 from "./pages/Administrador/Elizabeth/NuevoUsuario2";
//<Route path = "/" exact component={Home}/>

import ListaEntregablesPendientes from "./pages/ListaEntregablesPendientes";
import PendientesPorCorregir from "./pages/PendientesPorCorregir";
import GestionEntrega from "./pages/GestionEntrega";


function App() {
  return (
    <div className="App">
      <Router>
        <NavHorizontalBar />
        <NavVerticalBar />
        <Routes>
          <Route path="/" element = {<Inicio/>}> </Route>
          <Route path="/home" element = {<Home/>}> </Route>
          <Route path="/gestiondefacultades" element = {<GestionDeFacultades/>}> </Route>
          <Route path="/gestiondesemestres" element = {<GestionDeSemestres/>}></Route>
          <Route path="/gestiondeusuarios" element = {<GestionDeUsuarios/>}> </Route>
          <Route path="/nuevaespecialidad" element = {<NuevaEspecialidad/>}> </Route>
          <Route path="/pendientesporcorregir" element = {<PendientesPorCorregir/>}> </Route>
          <Route path="/gestionentrega" element = {<GestionEntrega/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
