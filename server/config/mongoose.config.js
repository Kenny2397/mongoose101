const mongoose = require("mongoose");

//coneccion con mongo, ingresamos el nombre de la base de datos en mongo , si no existe lo crea
mongoose.connect("mongodb://localhost/mongoose101", {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(() => console.log("Established a connection to the Mongo database"))
    .catch((err) => console.log("No se pudo conectar con DB", err));

// Nota: useNewUrlParser y useUnifiedTopology son opciones que pasamos para deshacernos de los mensajes de desaprobación  en nuestro terminal.

// Nota: ¡Si conectas a una base de datos que no existe, Mongoose creará la base de datos tan pronto como cree su primer documento!