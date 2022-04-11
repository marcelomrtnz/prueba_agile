import { Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { opcionesDisponibles } from "../app/interfaz";


interface OpcionProps {
    tipoOpcion: opcionesDisponibles,
    opcionSeleccionada: opcionesDisponibles | null,
    opciones: opcionesDisponibles[] 
    cambiarOpcion: ( tipoOpcion:opcionesDisponibles, nuevaOpcionSeleccionada:opcionesDisponibles ) => void
}
export default function Opcion({ tipoOpcion, opcionSeleccionada, opciones, cambiarOpcion }:OpcionProps) {
    console.log({opcionSeleccionada})
    return (
        <FormControl fullWidth>
            <InputLabel id={"label" + tipoOpcion}>{tipoOpcion}</InputLabel>
            <Select
                labelId={"label" + tipoOpcion}
                value={opcionSeleccionada || ""}
                onChange={(e) => cambiarOpcion(tipoOpcion, e.target.value as opcionesDisponibles)}
            >
                {
                    opciones.map( opcion => 
                        <MenuItem key={opcion} value={opcion || ""} >{opcion}</MenuItem>    
                    )
                }
            </Select>
        </FormControl>
    )
}