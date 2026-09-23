window.addEventListener('load', async () => {
    
    const contenedor = document.querySelector('#contenedor-tarjetas');

    try {
        const respuesta = await fetch('productos.json');
        
        const productos = await respuesta.json();

        productos.forEach(producto => {
         
            const tarjeta = document.createElement('div');
            
            tarjeta.classList.add('tarjeta'); 
            
            tarjeta.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p class="precio">$${producto.precio}</p>
            `;
            
            contenedor.appendChild(tarjeta);
        });

    } catch (error) {
        console.error("Error al cargar los productos:", error);
        contenedor.innerHTML = "<p>Ocurrió un error cargando el catálogo.</p>";
    }
});