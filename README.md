<h1> Juego Amigo Secreto </h1>
<p>
<a> El proyecto se compone de los siguentes archivos para realizar su ejecuvion en VSCode </a>
</p>

<p>
<img src = "https://github.com/user-attachments/assets/1805d4dd-9eae-4a4f-97d3-bbc2adb9352d" width="200px" height="150px">
</p>

# Desarrollo del Proyecto

### Al momento de estar ingresando los nombres de los amigos se muestra la lista abajo del input como se muestra en la imagen
<p align="center">
<img src = "https://github.com/user-attachments/assets/9270ef11-7161-4a67-811a-0bc05ab02527" width="700px" height="500px">
</p>

### Cuando se genera una entrada sin ningundato sale una ventana emergente donde se notifica que se tiene que ingresar un nombre valido
<p align="center">
<img src = "https://github.com/user-attachments/assets/dde311a8-992f-4b62-81e7-5b4f3b8de5c4" width="700px" height="500px">
</p>
<p align="center">
<a> Les comparto un Fragmento del codigo </a>
</p>

```
    if (nombreAmigo === '') {
          alert('Por favor, ingresa un nombre válido.');
          return;
        }
```

### Valida tambien si el nombre ingresado ya esta en la lista para no repetir el mismo nombre
<p align="center">
<img src = "https://github.com/user-attachments/assets/cdacf582-72f8-4f01-b882-be327bd925c1" width="700px" height="500px">
</p>
<p align="center">
<a> Les comparto un Fragmento del codigo </a>
</p>

```
    if (listaAmigos.includes(nombreAmigo)) {
      alert('Este nombre ya está en la lista.');
      return;
    }
```
### Al precionar le boton del sorteo se realiza una operacion random donde extrallendo un numero aleatorico para poder buscar en el index de la lista y selecionar el amigo secreto

<p align="center">
<img src = "https://github.com/user-attachments/assets/5317755e-da64-4a49-8a6c-7e4e281f2f31" width="700px" height="500px">
</p>
