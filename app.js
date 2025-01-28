/*
El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.

Funciones principales que se tiene que implementar (Trello)
1 - Crear un array para almacenar los nombres
2 - Implementa una función para agregar amigos
3 - Implementa una función para actualizar la lista de amigos
4 - Implementa una función para sortear los amigos
5 - Implemetar una función para mostrar el resultado del sorteo
 */

// ********** Array para almacenar los nombres **********

let listaAmigos = [];

//console.log(listaAmigos)

// ********** Función para agregar amigos **********

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
  
    //console.log(inputAmigo) // Verificar que este ingresando los datos correctos
    //console.log(nombreAmigo) // Validar que se este realizando un TRIM si el usuario coloca espacios
  
    if (nombreAmigo === '') {
      alert('Por favor, ingresa un nombre válido.');
      return;
    }
    if (listaAmigos.includes(nombreAmigo)) {
      alert('Este nombre ya está en la lista.');
      return;
    }
    listaAmigos.push(nombreAmigo);
    inputAmigo.value = '';
    actualizarListaAmigos();
  }
  
// ********** Función para actualizar la lista de amigos **********

function actualizarListaAmigos() {
  const listaAmigosElement = document.getElementById('listaAmigos');
  listaAmigosElement.innerHTML = '';

  listaAmigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}

// ********** Función para sortear un amigo al azar **********

function sortearAmigo() {
  if (listaAmigos.length === 1) {
    alert('Debes agregar al menos un nombre para realizar el sorteo.');
    return;
  }

  //console.log(listaAmigos.length) // Generar el numero de elementos agragados a la lista

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSeleccionado = listaAmigos[indiceAleatorio];

  console.log(indiceAleatorio);
  console.log(amigoSeleccionado);

  mostrarResultado(amigoSeleccionado);
}

// ********** Función para mostrar el resultado del sorteo **********

function mostrarResultado(amigo) {
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = '';

  //console.log(resultadoElement)

  const li = document.createElement('li');
  li.textContent = `El amigo secreto sorteado es: ${amigo}`;
  resultadoElement.appendChild(li);
}