import React from "react";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import {
  listarEspecialidades,
  agregarEspecialidades,
} from "../../../services/EspecialidaServices";
import { agregarFacultad } from "../../../services/FacultadServices";
import DataTable from "react-data-table-component";
//GAAAAAAAAA1 CAMBIO
const NuevaFacultad = () => {
  const columns: GridColDef[] = [
    {
      field: "codigo",
      headerName: "Código de la especialidad",
      width: 150,
      editable: true,
    },
    {
      field: "nombre",
      headerName: "Nombre de la especialidad",
      width: 540,
      editable: true,
    },
  ];

  const rows = [
  ];
  const [especialidad, setEspecialidad] = useState([]);
  const [nuevaEspecialidad, setNuevaEspecialidad] = useState({
    nombre: "",
    codigo: "",
    nombreCoordinador: "",
    descripcion: "",
  });
  const showData = async () => {
    try {
      const esp = await listarEspecialidades();
      const data = esp.data;
      setEspecialidad(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  /*const addData = async () => {
    try {
      const resultado = agregarEspecialidades(newEsp);
    } catch (error) {
      console.log(error);
    }
  };*/
  useEffect(() => {
    showData();
  }, []);

  //3. Configuramos las columnas para el data table
  const columnas = [
    {
      name: "CÓDIGO",
      selector: (row) => row.codigo,
    },
    {
      name: "NOMBRE DE ESPECIALIDAD",
      selector: (row) => "Ingeniería " + row.nombre,
    },
  ];
  const handleInputChange = async (event) => {
    console.log();
    event.persist();
    await setNuevaEspecialidad({
      ...nuevaEspecialidad,
      [event.target.name]: event.target.value,
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const addFacultad = () => {
    agregarFacultad(nuevaEspecialidad);
    showData();
  };
  return (
    <div name="nuevafacultad" className="h-screen w-full bg-white">
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">
          <p className="  text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Gestión de Facultades {">"} Nueva Facultad
          </p>
        </div>

        <div className="pb-8">
          <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
            Informacion general
          </p>
        </div>

        <div className="pb-8 flex flex-col">
          <div className="w-full mb-4">
            <Input
              label="Nombre de la facultad"
              name="nombre"
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full mb-4">
            <Input
              label="Nombre del decano"
              name="decano"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <Input
              label="Año de fundacion"
              name="anhoFundacion"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="pb-4">
            <p className="text-2xl font-semibold inline text-amber-800 flex-auto">
              Especialidades
            </p>
          </div>

          <Stack direction="row" spacing={1} className="ml-auto">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="modify">
              <EditIcon />
            </IconButton>
            <Link to ="/nuevaespecialidad">
              <IconButton aria-label="add">
                <AddCircleIcon />
              </IconButton>
            </Link>
          </Stack>

          <Box sx={{ height: 250, width: "100%" }} className="pb-5">
            <DataTable
              columns={columnas}
              data={especialidad}
              pagination
              selectableRows
              selectableRowsHighlight
              highlightOnHover
            ></DataTable>
          </Box>

          <div className="grid grid-cols-3 w-full">
            <div> </div>
            <div> </div>
            <div>
              <Link to ="/gestiondefacultades">
                <Button
                  variant="contained"
                  className="bg-white text-blue-pucp border-b-3 ml-12"          
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                variant="contained"
                className="bg-blue-pucp ml-5"
                onClick={() => addFacultad()}
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NuevaFacultad;
