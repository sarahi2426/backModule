const getTareas = (req, res) => {
    res.status(200).json({message:'obtener la lista de tareas'})
}

const createTareas = (req, res) => {
    console.log (req.body)
    res.status(200).json({message:'crear una tarea'})
}

const updateTareas = (req, res) => {
    res.status(200).json({message:`MODIFICAR LA TAREA CON ID: ${req.params.id}`})
}


const deleteTareas = (req, res) => {
    res.status(200).json({message:`Borrar la tarea con id: ${req.params.id}`})
}


module.exports ={
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}