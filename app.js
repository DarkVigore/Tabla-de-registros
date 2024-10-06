// Lista de usuarios inicial
let users = [
    { nombre: 'Pepe', apellido: 'Rodriguez', direccion: 'cra 20', cedula: '112233', pais: 'Colombia', ciudad: 'Barranquilla', correo: 'pepe@gmail.com', telefono: '3012569654' },
    { nombre: 'Marco', apellido: 'Perez', direccion: 'cra 30', cedula: '125423', pais: 'Colombia', ciudad: 'Bogota', correo: 'marko@gmail.com', telefono: '3004522365' },
    { nombre: 'Julieta', apellido: 'Arias', direccion: 'cra 40', cedula: '145874', pais: 'Colombia', ciudad: 'Cali', correo: 'julieta@gmail.com', telefono: '3044568956' }
];

let cuerpotabla = document.getElementById('cuerpo-tabla');

// Función para listar usuarios en la tabla
const listar = () => {
    let usuarios = '';
    for (let i = 0; i < users.length; i++) {
        usuarios += `<tr>
                        <th scope="row">${i + 1}</th>
                        <td>${users[i].nombre}</td>
                        <td>${users[i].apellido}</td>
                        <td>${users[i].direccion}</td>
                        <td>${users[i].cedula}</td>
                        <td>${users[i].pais}</td>
                        <td>${users[i].ciudad}</td>
                        <td>${users[i].correo}</td>
                        <td>${users[i].telefono}</td>
                    </tr>`;
    }
    cuerpotabla.innerHTML = usuarios;
};

// Función para registrar un nuevo usuario
const register = () => {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const cedula = document.getElementById('cedula').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;

    // Validar que todos los campos estén completos
    if (!nombre) return alert('Falta Nombre');
    if (!apellido) return alert('Falta Apellido');
    if (!direccion) return alert('Falta Dirección');
    if (!cedula) return alert('Falta Cédula');
    if (!pais) return alert('Falta País');
    if (!ciudad) return alert('Falta Ciudad');
    if (!correo) return alert('Falta Correo');
    if (!telefono) return alert('Falta Teléfono');

    // Verificar si la cédula ya está registrada
    const cedulaExistente = users.some(user => user.cedula === cedula);
    if (cedulaExistente) {
        return alert('La cédula ya está registrada. Por favor, ingrese una cédula diferente.');
    }

    // Crear un nuevo usuario
    const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        cedula: cedula,
        pais: pais,
        ciudad: ciudad,
        correo: correo,
        telefono: telefono
    };

    // Agregar el nuevo usuario a la lista de usuarios
    users.push(nuevoUsuario);

    // Listar todos los usuarios nuevamente
    listar();

    // Limpiar los campos después de registrar el usuario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('cedula').value = '';
    document.getElementById('pais').value = '';
    document.getElementById('ciudad').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value = '';

    alert('Usuario registrado con éxito.');
};


