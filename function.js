$(function(){
    var name = $('input[name=nome]')
    var email = $('input[name=email]')
    var telefone = $('input[name=telefone]')
    
    

    //Função de sucesso
    function sucess(){
        name.val("")
        email.val("")
        telefone.val("")
        alert("CADASTRADO")
        $('.background').fadeOut();
    }   

    //Função aparecer formulário
    function hideForm(){
        //Ao clicar no botão faz aparecer formulário
        $('#button,.form').click(function(e){
            e.stopPropagation();
            $('.background').fadeIn();
        })
    }

    //função tirar form da tela
    function removeForm(){
        //Ao clicar no body ou no x desaparece o form
        $('body,.close').click(function(){
            $('.background').fadeOut()
        })
    }

    //Funçao de valor inválido(Borda vermelha e letra vermelha)
    function formInvalido(el1){
        el1.css('border','2px solid red').css('color','red');
        el1.focus(function(){
            el1.css('border','2px solid black').css('color','black');
            el1.val("");
        })    
    }

    //funçao de valor válido(Borda verde e letra verde)

    function formValido(el){
        el.css('border','2px solid green')
        el.focus(function(){
            el.css('border','2px solid green');
            el.focus(function(){
                el.css('border','2px solid green');
            })
            name.val();
            
            
        })
        
    }
    //Validar nome
    function nomeValidate (n) {
        var amount = n.val().split(" ").length;
        var str = n.val().split(" ");

        if(n.val() == ""){
            return false;
        }
        else if(amount >=2){
            for(var i = 0;i<amount;i++){
                if(str[i].match(/^[A-Z]{1}[a-z]{1,}$/) == null){
                    return false;
                }
                else{
                    return true
                }
            }
        }
        else{
          return false
        }
    }
    //validar emal
    function emailValidate(e){
        if(e.val() == ""){
            return false;
        }
        else if(e.val().match(/^([a-z0-9-_]{1,})+@+([a-z0-9.]){1,}$/) == null){
            return false
        }

        else{
            return true
        }
    }

    //validar telefone
    function telefoneValidate(t){
        if(t.val() == ""){
            return false
        }
        else if(t.val().match(/[0-9]{2}[0-9]{9}/) == null){
            return false
        }
        else{
            return true
        }
    }

    
    function validarTudo(){
        $('input[type=submit]').click(function(){
            if(nomeValidate(name) == false){
                formInvalido(name);
            }

            else if(emailValidate(email) == false){
                formInvalido(email)
            }

            else if(telefoneValidate(telefone) == false){
                formInvalido(telefone);
            }
          
          
            else{
                sucess()
            }
            return false
        })
        
    }

    
    
hideForm();
removeForm();
validarTudo();
// nomeValidate(name);
// emailValidate(email);
// telefoneValidate(telefone);



})


    


