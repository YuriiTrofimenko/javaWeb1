$(document).ready(function (){
    
    //console.log('ready');
    $('form#auth').submit(function (ev){
        
        //Предотвращение отправки формы
        ev.preventDefault();
        
        // Находим форму отправки заказа на странице
        var $form = $(this);

        //Получаем значения из полей ввода формы
        var $inputs = $form.find("input");

        //Подготавливаем данные к отправке
        var serializedData = $form.serialize();

        //Отключаем поля ввода формы на время отправки запроса
        $inputs.prop("disabled", true);
        
        $.ajax({
            url: "http://localhost:8084/WebApp1/IndexServlet",
            data: serializedData,
            type: "POST",
            cache : false
        }).done(function(resp) {
            
            //console.log(resp);
            //console.log(resp.data[0]);
            //console.log(resp.data[1]);
            
            //v1 - jQuery only
            //$('div#login-resp').text('Login: ' + resp.data[0]);
            //$('div#password-resp').text('Password: ' + resp.data[1]);
            
            //v2 - jQuery + Hogan
            
            var template = Hogan.compile(
                      "<h4>Response:</h4>"
                    + "<div>Login: {{0}}</div>"
                    + "<div>Password: {{1}}</div>");
            var output = template.render(resp.data);
            $('div#resp').html(output);
            //Делаем поля ввода формы снова активными
            $inputs.prop("disabled", false);
        });
    });
});

