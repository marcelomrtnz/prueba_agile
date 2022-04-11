const cors = require("cors")
const express = require("express")

const router = express()

router.use(cors({ origin: "*" }))

router.get("/", ( _req, res ) => {
    try {
        const obtenerEnteroAleatorio = () => Math.floor(Math.random() * 1001 )

        //{ mes:String, ventas:number }[]
        const ventasMeses = []

        for ( const mes of [ "enero", "febrero", "marzo", "abril", "mayo" ] ) {
            ventasMeses.push({ mes, ventas: obtenerEnteroAleatorio()  })
        }

        res.send(ventasMeses)
    }
    catch ( error ) {
        console.error(error)
        res.status(500).send({ mensaje: "Ocurrio un error." })
    }
})

router.listen(3001)

