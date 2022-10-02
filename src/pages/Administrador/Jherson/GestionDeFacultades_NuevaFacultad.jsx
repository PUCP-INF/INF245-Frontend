import React from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

const GestionDeFacultades_NuevaFacultad = () => {

  const columns: GridColDef[] = [
    {
      field: 'codigo',
      headerName: 'Código de la especialidad',
      width: 200,
      editable: true,
    },
    {
      field: 'nombre',
      headerName: 'Nombre de la especialidad',
      width: 540,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, codigo: 'INF', nombre: 'Ingeniería Informática'},
    { id: 2, codigo: 'MEC', nombre: 'Ingeniería Mecánica'},
  ];

  return (
    <div name="gestiondefacultades_nuevafacultades" className="h-screen w-full bg-white">
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Gestión de Facultades {">"} Nueva Facultad
            </p>
        </div>

        <div className="pb-8">  
          <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
            Informacion general
          </p>    
        </div>

        <div className="pb-4 flex flex-col w-full">
          <div className="w-full mb-4">
            <Input label="Nombre de la facultad" />
          </div>

          <div className="w-full pb-8">
            <Input label="Nombre del decano" />
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
            <IconButton aria-label="add">
              <AddCircleIcon />
            </IconButton>
          </Stack>

          <Box sx={{ height: 250, width: '100%' }} className="pb-5">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={2}
              rowsPerPageOptions={[3]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>

          <div className="grid grid-cols-3 w-full">
            <div> </div>
            <div> </div>
            <div>
              <Button variant="contained" className="bg-white text-blue-pucp border-b-3 ml-12">Cancelar</Button>
              <Button variant="contained" className="bg-blue-pucp ml-5">Guardar</Button>
            </div>          
          </div>
        </div>

      </div>
    </div>
  );
};
export default GestionDeFacultades_NuevaFacultad;