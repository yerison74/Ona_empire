const products = [
    { id: 1, name: "Aretes Colgantes de Estrella y Corazón", price: 850, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907361-02nu6ypexEfv5MO66APAbaaPKpWLHA.jpg" },
    { id: 2, name: "Collar de Perlas con Dijes de Cristal", price: 1200, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907360-GVYNW3ExcFKOvT65c1OvTqLHeIUnFE.jpg" },
    { id: 3, name: "Pulsera de Cuentas Coloridas", price: 600, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907359-ZZHE36GVyWAoeiJ4wqyDUMZvRWoot4.jpg" },
    { id: 4, name: "Collar con Dije de Carita Feliz", price: 950, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907358-ZIhnWph5SWrYL0pAT8sDVfVKtXqkT9.jpg" },
    { id: 5, name: "Aretes de Perlas con Corazón", price: 750, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907357-PgFXPhHOnyoEMSibJnHz1Yb5liGG4P.jpg" },
    { id: 6, name: "Collar con Dije de Timón", price: 1100, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907351-QrG05NC4yhaRygH0N7gJ2AHwun1LeV.jpg" },
    { id: 7, name: "Collar de Gomas de Osito", price: 800, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907353-qG6oAX63IYFxq20K3sHLKieIEQs5CD.jpg" },
    { id: 8, name: "Aretes de Hongo Amarillo", price: 550, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907354-x3i2ZtL1MFKdu44JxpDRJfmegysxem.jpg" },
    { id: 9, name: "Collar de Peces en Bolsa", price: 700, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907355-yV4wjTr3KuJkJAL5h8VME0jatHVEgc.jpg" },
    { id: 10, name: "Collar de Mariposas de Colores", price: 900, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907348-553iGqr4pPc6z9gdGwSPx2TOgnsU4t.jpg" },
    { id: 11, name: "Collar de Perlas con Limones", price: 850, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907352-Tzj4RJpXKaIv9SI8QhkIIusIHg43mz.jpg" },
    { id: 12, name: "Aretes de Imperdible con Corazón", price: 600, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907350-KGYBqlaJk3ivOqGSMyc7wtCXdAEe89.jpg" },
    { id: 13, name: "Collar de Perlas Multicolor", price: 1000, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907356-8oBPQnaXTwvhdigKXuYOIScy7h5bnr.jpg" },
    { id: 14, name: "Collar de Perlas con Aguacate", price: 950, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933817065823907349-5smP3d1lmIF6IrIBxPj2p7qehcnAWC.jpg" },
];

const whatsappNumber = "+18094013219"; // Reemplaza esto con tu número de WhatsApp

function createWhatsAppLink(product) {
    const message = encodeURIComponent(`Hola, me interesa el producto "${product.name}" por RD$${product.price}. ¿Está disponible?`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
}
 
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-price">RD$${product.price.toLocaleString()}</p>
            </div>
            <a href="${createWhatsAppLink(product)}" class="whatsapp-button" target="_blank" rel="noopener noreferrer">
                Pedir por WhatsApp
            </a>
        `;
        productGrid.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);
