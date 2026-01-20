# Paseando con Genarin 🌎

Una landing page moderna y responsiva para el creador de contenido colombiano "Paseando con Genarin", especializado en viajes por Colombia y el mundo.

## ✨ Características

### 🎨 Diseño y UX
- **Paleta de colores**: Tonos tierra, verdes de naturaleza y acentos con los colores de la bandera colombiana (amarillo, azul y rojo)
- **Tipografía**: Montserrat y Poppins para una experiencia de lectura óptima
- **Responsive Design**: Funciona perfectamente en desktop, tablet y móvil
- **Animaciones suaves**: Transiciones CSS3 y animaciones JavaScript

### 🌟 Aventuras Destacadas
- **Galería visual atractiva** con miniaturas de videos reales del canal
- **Videos destacados** del canal @paseandocongenarin
- **Enlaces directos a YouTube** para máxima engagement
- **Diseño moderno** con efectos hover y animaciones
- **Categorización**: Colombia vs Internacional

### 📱 Secciones Principales

1. **Hero Section**: Imagen inspiradora con título impactante y CTA al YouTube
2. **Aventuras Destacadas**: Galería visual de videos del canal real
3. **Colombia & El Mundo**: Sistema de pestañas con galerías de videos
4. **Biografía**: Historia personal con diseño storytelling
5. **Formulario de Patrocinio**: Contacto elegante para colaboraciones
6. **Footer Emotivo**: Mensaje de agradecimiento con redes sociales

### 🚀 Funcionalidades Técnicas

- **Single Page Application**: Navegación suave sin recargas
- **Validación de formularios**: JavaScript con feedback visual
- **Sistema de pestañas**: Alternar entre Colombia y viajes internacionales
- **Enlaces directos a YouTube**: Integración nativa con el canal
- **Scroll animations**: Elementos que aparecen al hacer scroll
- **SEO optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Flexbox, Grid, animaciones y responsive design
- **JavaScript (Vanilla)**: Interactividad sin frameworks externos
- **YouTube API**: Integración con miniaturas y enlaces del canal

## 📁 Estructura del Proyecto

```
paseando-con-genarin/
├── index.html          # Página principal
├── styles.css          # Estilos CSS3
├── script.js           # JavaScript funcional
├── README.md           # Documentación
└── assets/
    └── images/         # Imágenes del proyecto
```

## 🚀 Cómo Usar

### Opción 1: Servidor Local (Recomendado)
1. **Instalar Node.js**: Asegúrate de tener Node.js instalado
2. **Ejecutar servidor**: Desde la carpeta del proyecto, ejecuta:
   ```bash
   node server.js
   ```
3. **Abrir navegador**: Ve a `http://localhost:8000`

### Opción 2: Archivo Directo
1. **Descargar los archivos**: Clona o descarga todo el proyecto
2. **Abrir en navegador**: Abre `index.html` directamente en cualquier navegador moderno
3. **Navegar**: Usa el menú superior o scroll para explorar las secciones

**Nota**: El servidor local es recomendado para una experiencia completa, especialmente para probar todas las funcionalidades.

### Personalización

#### Cambiar colores:
Edita las variables CSS en `:root` dentro de `styles.css`

```css
:root {
    --primary-color: #2D5A3D;    /* Verde naturaleza */
    --secondary-color: #8B7355;  /* Tierra */
    --accent-yellow: #FFD700;    /* Amarillo colombiano */
    --accent-blue: #0033A0;      /* Azul colombiano */
    --accent-red: #CE1126;       /* Rojo colombiano */
}
```

#### Actualizar videos:
En `script.js`, modifica el objeto `departmentVideos` con tus URLs reales:

```javascript
const departmentVideos = {
    'antioquia': 'https://www.youtube.com/embed/TU_VIDEO_ID',
    'bolivar': 'https://www.youtube.com/embed/TU_VIDEO_ID',
    // ... más videos
};
```

#### Personalizar formulario:
El formulario envía datos a través de JavaScript. Para integración real, modifica la función `submitForm()` en `script.js`.

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Móvil**: < 480px

## 🌐 Navegadores Soportados

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🔧 Funcionalidades JavaScript

### Mapa Interactivo
- Click en departamentos visitados → Modal con video
- Hover effects en todos los departamentos
- Tooltips para departamentos no visitados

### Sistema de Pestañas
- Transiciones suaves entre Colombia y Mundo
- Navegación por teclado (Arrow keys)

### Formulario
- Validación en tiempo real
- Mensajes de error contextuales
- Estado de loading durante envío
- Notificaciones de éxito/error

### Accesibilidad
- Navegación por teclado completa
- Roles ARIA en modales
- Focus management
- Screen reader friendly

## 🎯 Mejores Prácticas Implementadas

- **Performance**: CSS crítico inline, lazy loading opcional
- **SEO**: Meta tags, estructura semántica, URLs limpias
- **Accesibilidad**: WCAG 2.1 AA compliant
- **Mantenibilidad**: Código comentado, variables CSS, funciones modulares

## 📈 Próximas Mejoras (Opcionales)

- [ ] Integración con Google Analytics
- [ ] Lazy loading para videos
- [ ] PWA (Progressive Web App)
- [ ] Integración con CMS para gestión de contenido
- [ ] Multiidioma (Español/Inglés)
- [ ] Dark mode toggle

## 📞 Contacto

Para colaboraciones o preguntas sobre el código:
- Email: [Tu email aquí]
- YouTube: [@genarin](https://youtube.com/@genarin)
- Instagram: [@genarin](https://instagram.com/genarin)

---

**Desarrollado con ❤️ para la comunidad de viajeros colombianos**

*¡Que tus viajes sean siempre llenos de aventuras y aprendizajes!*