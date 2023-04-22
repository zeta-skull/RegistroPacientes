var tablaPaciente = localStorage.getItem("tablaPacienteStorage");
tablaPaciente = JSON.parse(tablaPaciente);
if (tablaPaciente == null) {
    var tablaPaciente = [];
}

listar();

function listar() {
    console.log("INGRESANDO LISTADO...");

    var dataFila = '';
    if (tablaPaciente.length > 0) {
        for (const i in tablaPaciente) {
            var varPaciente = JSON.parse(tablaPaciente[i]);
            dataFila += "<tr>";
            dataFila += "<td>" + varPaciente.idPaciente + "</td>";
            dataFila += "<td>" + varPaciente.nombApellido + "</td>";
            dataFila += "<td>" + varPaciente.rut + "</td>";
            dataFila += "<td>" + varPaciente.telefono + "</td>";
            dataFila += "<td>" + varPaciente.direccion + "</td>";
            dataFila += "<td>" + varPaciente.estado + "</td>";
            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning m-1' onclick='abrirForm(" + varPaciente.idPaciente + ")'>EDITAR</button>" +
                "<button type='button' class='btn btn-danger m-1' onclick='eliminarItem(" + varPaciente.idPaciente + ")'>ELIMINAR</button>" +
                "</td>";
            dataFila += "</tr>";
        }
        document.getElementById("dataPacientes").innerHTML = dataFila;
    }
    else{
        document.getElementById("dataPacientes").innerHTML = "<tr><td colspan='7'> NO HAY PACIENTES REGISTRADOS</td></tr>";
    }
}

function abrirForm(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("pacientes-form.html");
}

function eliminarItem(idItem){
       for(const i in tablaPaciente){
        var varPaciente = JSON.parse(tablaPaciente[i]);
        if (varPaciente.idPaciente == idItem){
            tablaPaciente.splice(i,1);
            localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente));
        }
       }
       listar()
}