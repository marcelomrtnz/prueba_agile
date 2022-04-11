

import { Container, FormControl, Grid } from "@mui/material"
import axios from 'axios';
import { useEffect, useState } from "react";
import Opcion from "../../components/Opcion";
import TablaDeVentas from "../TablaDeVentas";

export type opcionesDisponibles = "categoria" | "producto" | "marca" 
type opcion = {
    opcionSeleccionada: string | null,
    posiblesOpciones: string[]
}
interface opciones { 
    categoria: opcion,
    producto: opcion,
    marca: opcion
}

const opcionesPredeterminadas:opciones = {
    categoria: {
        opcionSeleccionada: null,
        posiblesOpciones: [
            "Ropa",
            "Camisas",
            "Calcetines"
        ]
    }, 
    marca: {
        opcionSeleccionada: null,
        posiblesOpciones: [
            "Vershka",
            "Rossy",
            "Mega"
        ]
    }, 
    producto: {
        opcionSeleccionada: null,
        posiblesOpciones: [
            "marca1",
            "marca2",
            "marca3"
        ]
    }
}
export default function Interfaz() {

    const [ opciones, setOpciones ] = useState<opciones>(opcionesPredeterminadas)

    const [ datosMesVentas, setDatosMesVentas ] = useState<{ mes:string, ventas:number }[]>([])

    async function obtenerDatosMesesAleatorios() {
        try {
            const datosMesesAleatorios = await axios.get<{ mes:string, ventas:number }[]>("http://localhost:3001/", {
                timeout: 1000
            })
            const ventasMeses = datosMesesAleatorios.data
            setDatosMesVentas(ventasMeses)
        }
        catch ( error ) {
            console.error(error)

        }
    }

    useEffect(() => {
        obtenerDatosMesesAleatorios() 
    }, [ opciones ])

    function cambiarOpcionSeleccionada(tipoOpcion:opcionesDisponibles, nuevaOpcionSeleccionada:string) {
        console.log(arguments)
        const nuevasOpciones = {...opciones}
        nuevasOpciones[tipoOpcion].opcionSeleccionada = nuevaOpcionSeleccionada
        setOpciones(nuevasOpciones)
    }

    return (
        <Container >
            <Grid container justifyContent="space-around" spacing={3} sx={{ marginTop: 2 }}>
            {
                Object.entries(opciones).map( opcion =>
                    <Grid item xs={4} key={opcion[0]}>
                        <Opcion 
                            tipoOpcion={opcion[0] as opcionesDisponibles}
                            opcionSeleccionada={opcion[1].opcionSeleccionada} 
                            opciones={opcion[1].posiblesOpciones}
                            cambiarOpcion={cambiarOpcionSeleccionada}
                        />
                    </Grid>
                ) 
            }
            </Grid>
            <TablaDeVentas datosMesVentas={datosMesVentas}/>
        </Container>
    )
}