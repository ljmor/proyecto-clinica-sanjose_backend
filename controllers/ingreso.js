const FormModel = require("../models/FormModel");
const HistoryModel = require("../models/HistoryModel");
const PacienteModel = require("../models/PacienteModel");
const { dbConection } = require('../database/config');

const searchByCed = async (req, res) => {
    const patCed = parseInt(req.params.patCed);

    try {

        dbConection().query(
            `SELECT COUNT(*) AS count, rol FROM usuarios WHERE cedula = ?`,
            [patCed],
            (error, results) => {
                if (error) throw error;

                // Si no se encuentra el usuario o el rol no es 'patient'
                if (results[0].count <= 0 || results[0].rol !== 'patient') {
                    return res.status(400).json({
                        ok: false,
                        msg: 'Paciente no encontrado.'
                    });
                }

                dbConection().query(
                    `
                    SELECT
                    u.id,
                    u.nombres,
                    u.email,
                    p.tipo_sangre,
                    p.sexo,
                    p.cedula,
                    p.estado_civil as estadoCivil,
                    p.lugar_nac as lugarnac,
                    DATE_FORMAT(p.fecha_nac, '%Y-%m-%d') AS fechanac,
                    u.contacto
                    FROM pacientes p
                    JOIN usuarios u ON p.cedula = u.cedula
                    WHERE p.cedula = ?;

            `, [patCed],
                    (error, results, fields) => {
                        if (error) throw error;

                        res.json({
                            ok: true,
                            resp: results,
                        });
                    });

            }
        );

    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'ERROR: ' + error
        });
    }
};

const crearHistoria = async (req, res) => {
    const historia = new HistoryModel(req.body);

    try {
        // Insertar la historia nueva
        dbConection().query(
            `INSERT INTO historias_clinicas VALUES (null, ?, ?, ?, ?, ?, ?);`,
            [historia.archivo, historia.fechacreacion, historia.fecha_ult_mod, historia.nroforms, historia.estado, historia.paciente],
            (error, results) => {
                if (error) throw error;

                const history_id = results.insertId;

                res.json({
                    ok: true,
                    msg: 'Historia creada correctamente',
                    history_id,
                });
            }
        );

    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'ERROR: ' + error.message
        });
    }
};

const crearFormulario = async (req, res) => {
    const formulario = new FormModel(req.body);
    try {
        // Insertar el formulario nuevo
        dbConection().query(
            `
                    INSERT INTO formularios VALUES (null, ?, ?, ?, ?, ?, ?);
                    `,
            [formulario.nombre, formulario.autor, formulario.fechacreacion, formulario.fecha_ult_mod, formulario.archivo, formulario.historia_id],
            (error, results) => {
                if (error) throw error;

                res.json({
                    ok: true,
                    msg: 'Formulario creado correctamente'
                });
            }
        );

    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'ERROR: ' + error.message
        });
    }
};

const crearPaciente = async (req, res) => {
    const paciente = new PacienteModel(req.body);

    try {
        // Verificar si la cédula ya existe en la tabla Usuarios
        dbConection().query(
            `SELECT COUNT(*) AS count FROM usuarios WHERE cedula = ?`,
            [paciente.cedula],
            (error, results) => {
                if (error) throw error;

                if (results[0].count > 0) {
                    // Si la cédula ya existe, lanzar un error
                    return res.status(400).json({
                        ok: false,
                        msg: 'La cédula ya está registrada.'
                    });
                }

                // Si la cédula no existe, proceder con la inserción
                dbConection().query(
                    `
                    INSERT INTO usuarios (cedula, nombres, email, password, rol, contacto)
                    VALUES (?, ?, ?, ?, 'patient', ?);
                    `,
                    [paciente.cedula, paciente.nombres, paciente.email, paciente.cedula, paciente.contacto],
                    (error, results) => {
                        if (error) throw error;

                        // Insertar en la tabla Pacientes
                        dbConection().query(
                            `
                            INSERT INTO pacientes VALUES (?, ?, ?, ?, ?, ?);
                            `,
                            [paciente.cedula, paciente.tipo_sangre, paciente.sexo, paciente.fechanac, paciente.estadoCivil, paciente.lugarnac],
                            (error) => {
                                if (error) throw error;

                                res.json({
                                    ok: true,
                                    msg: 'Usuario registrado correctamente',
                                    type: 'patient'
                                });
                            }
                        );
                    }
                );
            }
        );
    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'ERROR: ' + error.message
        });
    }
};

module.exports = {
    searchByCed,
    crearHistoria,
    crearFormulario,
    crearPaciente
} 