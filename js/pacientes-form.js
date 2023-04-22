cargarPagina();

function guardar() {

    Swal.fire({
        title: 'GUARDAR',
        html: 'DESEA GUARDAR LOS CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if (result.isConfirmed) {
                console.log("GUARDANDO INFORMACION EN REGISTRO...");
                var objPaciente = JSON.stringify({
                    idPaciente: (idForm > 0) ? idForm : (tablaPaciente.length + 1),
                    nombApellido: document.getElementById("txtNombApellido").value,
                    rut: document.getElementById("txtRut").value,
                    telefono: document.getElementById("txtTelefono").value,
                    direccion: document.getElementById("txtDireccion").value,
                    estado: document.getElementById("cboEstado").value
                });
                console.log(objPaciente);

                //* EDICION DE PACIENTES*//
                if (idForm > 0) {
                    for (const i in tablaPaciente) {
                        var varPaciente = JSON.parse(tablaPaciente[i]);
                        if (varPaciente.idPaciente == idForm) {
                            tablaPaciente[i] = objPaciente;
                            break;
                        }
                    }

                } else {
                    tablaPaciente.push(objPaciente);
                }


                //* REGISTRO Y PERSISTENCIA DE NUEVOS PACIENTES EN LOCALSTORAGE*//
                localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente));
                Swal.fire('CAMBIOS GUARDADOS', '', 'success').then(
                    (result) => {
                        window.location.replace("pacientes.html");
                    }
                );


            } else if (result.isDenied){
                Swal.fire('CAMBIOS NO GUARDADOS', '', 'info');
            }
        }
    );


}