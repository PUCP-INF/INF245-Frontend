import React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

//GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
const NuevaFacultad = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: "20181923", col2: "Ingeniería Informática" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Código", width: 500 },
    { field: "col2", headerName: "Nombre Especialidad", width: 600 },
  ];
  return (
    <div name="listaentregablespendientes" className="h-screen w-full bg-white">
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-5 grid grid-cols-1">
          <p className="  text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900">
            Gestión de Facultades {">"} Nueva Facultad
          </p>
        </div>

        <div className="pb-8 grid grid-cols-1">
          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Nombre
          </p>
          <div className="w-72 pb-5">
            <Input label="Ciencias e Ingeniería" />
          </div>

          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Decano
          </p>
          <div className="w-72 pb-5">
            <Input label="Francisco Remiche Zapata" />
          </div>

          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Fundación
          </p>
          <div className="w-72 pb-5">
            <Input label="1933" />
          </div>
        </div>

        <div className="pb-8 grid grid-cols-3">
          <p className="text-1xl font-semibold inline w-full   text-blue-900 flex-auto border-amber-600">
            Especialidades
          </p>
          <p className="w-full"> </p>
          <div className="">
            <Button className="mr-1">Agregar</Button>
            <Button className="ml-5">Eliminar</Button>
          </div>
        </div>

        <div className="pb-6 w-full" style={{ height: 350, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};
export default NuevaFacultad;