
login();

let users={};
let schedule={};
let servicios={
    masajes:45000,
    peluqueria:30000,
    unas:20000  
}
let emplo
yees={
    "Juan":{
        servicio:"masajes",
        dia:"martes",
        horaInicio:9,
        horaFin:12
    },
    "Pedro":{
        servicio:"peliqueria",
        dia:"miercoles",
        horaInicio:9,
        horaFin:12
    }
}

function login() {
    let name;
    let option;
    let id;
    let password;
    do {
        option=parseInt(prompt("Ingrese la opcion \n 1. Iniciar Sesion \n 2. Registrar usuario \n 3. Salir"));
        switch(option){
            case 1:
                id=prompt("Ingrese Cedula");
                password=prompt("Ingrese Contraseña");
                if(validateLogin(id,password)){
                    program(id);
                }   
                break;
            case 2:
                id=prompt("Ingrese Cedula");
                name=prompt("Ingrese Nombre");
                password=prompt("Ingrese Contraseña");
                registerUser(id,password,name);
                break;
            case 3:
                alert("Gracias por usar la aplicacion");
                break;
            default:
                alert("Seleccione una opcion valida");
            break;

        }
    } while (option!=3);
}
function validateLogin(id,password) {

    if (users[id]) {
        if (users[id][contrasena]==password) {
            return true;
        }else{
            alert("Contraseña incorrecta");
        }
    }else{
        alert("Usuario no existe");
    }
    return false;
}

function program(id) {
    let option = parseInt(prompt("1.Agendar cita"));
    let dia;
    let hora;
    let servicio;
    let empleado;
    do {
        switch (option) {
            case 1:
                selectionService(id);
                scheduleAppointment(id);
                break;
            case 2:

                break;
            default:

                break;
        }

    } while (option!=3);
}
function selectionService(id) {
    let option= parseInt(prompt("1. Masajes  $45000 \n 2. Peluqueria $30000\n 3. uñas $20000"));
    do {
        switch (option) {
            case 1:
                selectEmployee(id,"masajes");
                break;
            case 2:
                selectEmployee(id,"peluqueria");
                break;
            case 3:
                selectEmployee(id,"unas");
                break;
            default:
                break;
        }
    } while (condition);
    
}

function selectEmployee(id,servicio) {
    let names="";
    for (const key in employees) {
            if (employees[key].servicio==servicio) {
                names+=key +" "+employees[key].servicio +"\n";
            }
    }
    let name=prompt(`${names} Ingrese el nombre`);

}

function registerUser(id,password,name) {  
    let user={
        nombre:name,
        contrasena:password,
        masajes:null,
        peluqueria:null,
        unas:null
    };
    users[id]=user;
    alert("Usuario Registrado");
}