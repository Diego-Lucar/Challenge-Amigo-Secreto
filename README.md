# 🎁 Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.

## 📋 Descripción

Esta aplicación permite a los usuarios:
- Agregar nombres de amigos a una lista
- Validar que no se repitan nombres
- Realizar un sorteo aleatorio para seleccionar un amigo secreto

## 🚀 Características

- ✅ **Validación de entrada**: No permite nombres vacíos o duplicados
- 🔄 **Actualización dinámica**: La lista se actualiza automáticamente
- 🎲 **Sorteo aleatorio**: Selección aleatoria de un participante

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño 
- **JavaScript (Vanilla)**: Lógica de la aplicación
- **Google Fonts**: Tipografías (Inter y Merriweather)

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica JavaScript
├── README.md           # Documentación del proyecto
└── assets/
    ├── amigo-secreto.png       # Imagen principal
    └── play_circle_outline.png # Ícono de sorteo
```

## 🎯 Funcionalidades

### Agregar Amigos
- Ingresa el nombre en el campo de texto
- Haz clic en "Añadir" o presiona Enter
- El nombre se agregará a la lista si es válido

### Sortear Amigo
- Haz clic en el botón "Sortear amigo"
- Se seleccionará aleatoriamente un participante
- El resultado se mostrará en pantalla

### Validaciones
- **Nombres vacíos**: No se permiten espacios en blanco
- **Nombres duplicados**: Cada participante debe ser único
- **Lista vacía**: No se puede sortear sin participantes

## 🚀 Cómo Usar

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en tu navegador web
3. **Agregar participantes**:
   - Escribe un nombre en el campo de texto
   - Haz clic en "Añadir"
   - Repite para todos los participantes
4. **Realizar sorteo**:
   - Haz clic en "Sortear amigo"
   - ¡Descubre quién es el amigo secreto seleccionado!

## 💻 Instalación

No requiere instalación. Simplemente:

```bash
# Clonar el repositorio
git clone https://github.com/Diego-Lucar/Challenge-Amigo-Secreto.git

# Navegar al directorio
cd Challenge-Amigo-Secreto

# Abrir en el navegador
# Doble clic en index.html o usar Live Server en VS Code
```

## 🔧 Desarrollo

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (recomendado: VS Code)

### Estructura del Código JavaScript

```javascript
// Variables globales
let nombreAmigos = [];        // Array para almacenar nombres
let lista = document.getElementById("listaAmigos");

// Funciones principales
agregarAmigo()     // Agrega nombres a la lista
actualizarLista()  // Actualiza la visualización
sortearAmigo()     // Realiza el sorteo aleatorio
borrarLista()      // Limpia la lista
```

## 🎨 Personalización

### Cambiar Colores
Edita el archivo `style.css` para modificar la paleta de colores:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

## 👨‍💻 Autor

**Diego Lucar**
- GitHub: [@Diego-Lucar](https://github.com/Diego-Lucar)


¡Diviértete organizando tu amigo secreto! 🎉
