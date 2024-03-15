function obtenerDatosYMostrar(url, filtro = null) {
  fetch(url)
      .then(response => response.json())
      .then(data => {
      
          document.getElementById('resultados').innerHTML = '';

          let datosFiltrados = data;
          if (filtro === 'sinResolver') {
              datosFiltrados = data.filter(todo => !todo.completed);
          } else if (filtro === 'resueltos') {
              datosFiltrados = data.filter(todo => todo.completed);
          }


          datosFiltrados.forEach(todo => {
              const nuevoElemento = document.createElement('p');
              nuevoElemento.textContent = `ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`;
              document.getElementById('resultados').appendChild(nuevoElemento);
          });
      })
      .catch(error => console.error('Se produjo un error al obtener los datos:', error));
}

// Lógica de las funciones para cada botón
function mostrarTodosIDs() {
  obtenerDatosYMostrar('https://jsonplaceholder.typicode.com/todos');
}

function mostrarTodosIDsYTitles() {
  obtenerDatosYMostrar('https://jsonplaceholder.typicode.com/todos');
}

function mostrarSinResolver() {
  obtenerDatosYMostrar('https://jsonplaceholder.typicode.com/todos', 'sinResolver');
}

function mostrarResueltos() {
  obtenerDatosYMostrar('https://jsonplaceholder.typicode.com/todos', 'resueltos');
}

function mostrarTodosIDsYUserIDs() {
  obtenerDatosYMostrar('https://jsonplaceholder.typicode.com/todos');
}

function mostrarResueltosIDsYUserIDs() {
  obtenerDatosYMostrar('https://jsonplaceholder.typicode.com/todos');
}

function mostrarSinResolverIDsYUserIDs() {
  obtenerDatosYMostrar('https://jsonplaceholder.typicode.com/todos');
}
