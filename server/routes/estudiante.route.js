const EstudianteController = require('../controllers/estudiante.controller');

module.exports = app => {
    app.get("/api/estudiantes", EstudianteController.findAllstudents);
    app.post("/api/estudiantes", EstudianteController.createStudent);
    app.get("/api/estudiantes/:id", EstudianteController.findOneSingleUser);
    app.put("/api/estudiantes", EstudianteController.updateExistingStudent);
    app.delete("/api/estudiantes", EstudianteController.deleteAnExistingStudent);
};
