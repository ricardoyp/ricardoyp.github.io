function agregarComentario() {

    let comentario = document.getElementById("comentario").value;

    if (comentario !== "") {
        
        let nuevoComentario = document.createElement('li');
        nuevoComentario.textContent = comentario;
        document.getElementById('comentarios').appendChild(nuevoComentario);
        document.getElementById("comentario").value = "";

    } else {
        alert("No puedes publicar un comentario sin texto");
    }

}