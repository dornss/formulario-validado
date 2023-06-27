$('#form-contato').submit(function(){
    let nome = $('#nome');
    let email = $('#email');
    let mensagem = $('#mensagem');
    let erro = $('.alert');
    let campo = $('#campo-erro')

    //removendo o elemento da tela sempre que tentar submeter o formulário
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid')
    
    //valida o campo nome
    if(nome.val() == ''){
        erro.removeClass('d-none');
        campo.html('nome'); //nome do campo que não foi preenchido!
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    //valida o campo e-mail
    if(email.val() == ''){
        erro.removeClass('d-none');
        campo.html('e-mail'); //nome do campo que não foi preenchido!
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    if(mensagem.val() == ''){
        erro.removeClass('d-none');
        campo.html('mensagem'); //nome do campo que não foi preenchido!
        mensagem.focus();
        mensagem.addClass('is-invalid');
        return false;
    }

    //valida o campo mensagem   

    //se tudo certo, pode enviar os dados!
    return true;
});