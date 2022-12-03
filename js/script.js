if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Registro exitoso', reg))
        .catch(err => console.log('Error al tratar de registrar Service Worker', err))
}