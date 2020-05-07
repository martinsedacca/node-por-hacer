
const descripcion = {
    demand:true,
    alias:'d',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default:true,
    alias:'c',
    desc: 'Marca como completado la tarea'

};

const argv = require('yargs')
                    .command('crear','crear un elemento por hacer',{descripcion})
                    .command('actualizar','Actualiza un elemento completado',{descripcion,completado})
                    .command('borrar','Actualiza un elemento completado',{descripcion})
                    .help()
                    .argv;


module.exports = {
    argv
}