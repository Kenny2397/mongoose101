const Estudiante = require('../models/estudiante.model');

//request Mongo

module.exports.findAllstudents = (req, res) => {
    //request a db with mongo queries
    Estudiante.find()
    .then(students => res.json({count: students.length, users:students}))
    .catch(err => res.json({message:"Something went wrong", error:err}));
};

module.exports.findOneSingleUser = (req, res) => {
	Estudiante.findOne({ _id: req.params.id })
		.then(oneSingleStudent => res.json({ user: oneSingleStudent }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createStudent = (req, res) => {
    //request a db with mongo queries
    //tambien funciona  con insertMany
    Estudiante.create(req.body)
    .then(newStudent => res.json({newUser:newStudent}))
    .catch(err => res.json({message:"Something went wrong", error:err}));
};

module.exports.updateExistingStudent = (req, res) => {
    Estudiante.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedUser => res.json({ user_updated: updatedUser }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingStudent = (req, res) => {
    Estudiante.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};