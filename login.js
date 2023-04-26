function main() {
    var user = { 
	'usuario': ['denadai','thiago'],
	'senha': ['1234','1234']
	}
    var usuario;
    
    window.alert("qual seu usuario");
    usuario = window.prompt('Enter a value for usuario');
    var senha;
    
    window.alert("entre com sua senha");
    senha = window.prompt('Enter a value for senha');
    for (i = 0; i < user.usuario.length; i++) {
        if (usuario == user.usuario[i]) {
            window.alert("seu usuario esta correto");
            if (senha == "text") {
                window.alert("sua senha esta correta");
            } else {
                window.alert("sua senha esta incorreta");
            }
        } else {
            window.alert("seu usuario esta incorreto");
            window.alert("tente novamente");
        }
    }
}