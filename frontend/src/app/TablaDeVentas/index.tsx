
import { Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from "recharts"

interface TablaDeVentasProps {
    datosMesVentas: { mes:string, ventas:number }[]
}
export default function TablaDeVentas({ datosMesVentas }:TablaDeVentasProps) {

    {console.log(datosMesVentas)}
    return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "3rem" }}>
            <BarChart
                width={1080}
                height={400}
                data={datosMesVentas}
            >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="mes" />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="ventas" fill="#1976d2" />
            </BarChart>
        </div>
    )
}
