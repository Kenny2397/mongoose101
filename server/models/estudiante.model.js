const mongoose = require("mongoose");
                
const EsquemaEstudiante = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First_name is required"],
        minlength: [3, "El campo de nombre debe tener almenos 3 caracteres."] 
    },
    last_name: {
        type: String,
        required: [true, "last_name is required"],
        minlength: [3, "El campo de apellido debe tener almenos 3 caracteres."] 
    },
    age: {
        type: Number,
        min: [1, "deberias tener almenos 1 año para registrarte"],
        max: [150,"deberias tener max 150 para registrarte"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    }

}, {timestamps:true, versionKey:false});

const Estudiante = mongoose.model("estudiantes", EsquemaEstudiante);

module.exports = Estudiante;