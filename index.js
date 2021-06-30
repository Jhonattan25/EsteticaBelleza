let users = {};
let schedule={};

let services = {
    1: {Nombre: 'Masaje', Precio: 45000},
    2: {Nombre: 'Peluqueria', Precio: 30000},
    3: {Nombre: 'Uñas', Precio: 20000}
}

/* let servicios={
    masajes:45000,
    peluqueria:30000,
    unas:20000  
}; */
let employees = {
    1: {
        Nombre: 'Juan',
        Servicio: 1,
        Dia: "Martes",
        HoraInicio: 9,
        HoraFin: 12,
        Disponibilidad: true
    },
    2: {
        Nombre: 'Pedo',
        Servicio: 2,
        Dia: "Miercoles",
        HoraInicio: 9,
        HoraFin :12,
        Disponibilidad: true
    },
    3: {
        Nombre: 'Pepe',
        Servicio: 1,
        Dia: "Jueves",
        HoraInicio: 9,
        HoraFin: 12,
        Disponibilidad: true
    }
};
login();
function login() {
    let name;
    let option;
    let id;
    let password;
    do {
        option = parseInt(prompt('Ingrese el numero de la opción que desee: \n 1. Iniciar Sesion \n 2. Registrar usuario \n 3. Salir de la aplicación'));
        switch(option){
            case 1:
                id = prompt('Ingrese Cedula');
                password = prompt('Ingrese Contraseña');
                if(validateLogin(id, password)){
                    program(id);
                }   
                break;
            case 2:
                id = prompt('Ingrese Cedula');
                name = prompt('Ingrese Nombre');
                password = prompt('Ingrese Contraseña');
                registerUser(id, name, password);
                break;
            case 3:
                alert("Gracias por usar la aplicación");
                break;
            default:
                alert("Seleccione una opción valida");
            break;

        }
    } while (option != 3);
}

function registerUser(id, name, password) {  
    let user = {
        nombre: name,
        contrasena: password,
        masajes: null,
        peluqueria: null,
        unas: null
    };
    users[id] = user;
    alert("Usuario Registrado");
}

function validateLogin(id, password) {
    if(users[id]) {
        if (users[id]['contrasena'] === password) {
            return true;
        }else{
            alert("Contraseña incorrecta");
        }
    }else{
        alert(`El usuario con id( ${id} ) no se encuentra registrado`);
    }
    return false;
}

function program(id) {
    let option;
    let dia;
    let hora;
    let servicio;
    let empleado;
    do {
        option = parseInt(prompt(`Usuario: ${users[id]['nombre']}\nIngrese el numero de la opción que desee: \n 1. Agendar cita\n 2. Consultar cita\n 3. Cerrar sesión` ));
        switch (option) {
            case 1:
                scheduleAppointment(id);
                break;
            case 2:

                break;
            case 3:
                alert(` ${users[id]['nombre']} Adios, vuelva pronto `);
        
                break;
            default:
                alert('Seleccione una opción valida');
                break;
        }

    } while (option!=3);
}

function scheduleAppointment(id){
    let keyService = selectionService();

    if(keyService !== 0){

        selectEmployee(keyService);
    }
}

function selectionService() {
    let option;
    let message = '';

    for (const key in services) {
        message += `${key}:\n`;
        for (const key2 in services[key]) {
            message += `${key2}: ${services[key][key2]} \n`;
        }
    }

    do {
        option = parseInt(prompt(`Ingrese el numero del servicio que desee\n${message}0: Cancelar`));

        if(option != 0 && !(services[option])){
            alert('Seleccione una opción valida');
        }
    } while (option != 0 && !(services[option]));

    return option;
}

function selectEmployee(keyService) {
    let option;
    let message = '';

    for (const key in employees) {
        if(employees[key]['Servicio'] === keyService){
            message += `${key}:\n`;
            for (const key2 in employees[key]) {
                if(key2 !== 'Servicio' && key2 !== 'Disponibilidad' && employees[key]['Disponibilidad'] === true){
                    message += `${key2}: ${employees[key][key2]} \n`;
                }
            }
        }
    }
    do {
        option = parseInt(prompt(`Empleados disponibles del servicio ${services[keyService]['Nombre']}\nIngrese el numero del empleado que desee\n${message}0: Cancelar`));

        if(option != 0 && !(employees[option])){
            alert('Seleccione una opción valida');
        }
    } while (option != 0 && !(employees[option]));

    return option;
}