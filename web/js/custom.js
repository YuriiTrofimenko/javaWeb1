$(document).ready(function (){
    
    populateTable();
    //console.log('ready');
    /*$('form#auth').submit(function (ev){
        
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
    });*/
    
    //Final version
    $('form#add-news').submit(function (ev){
        
        //Предотвращение отправки формы
        ev.preventDefault();
        
        //console.log(ev);
        
        // Находим форму отправки заказа на странице
        var $form = $(this);
        //console.log($form);

        //Получаем значения из полей ввода формы
        var $inputs = $form.find("input, textarea");

        //Отключаем поля ввода формы на время отправки запроса
        $inputs.prop("disabled", true);
        
        $.ajax({
            url: "http://localhost:8084/WebApp1/NewsServlet",
            data: {
                'action' : 'create'
                , 'title' : $('#title').val()
                , 'content' : $('#content').val()
            },
            type: "POST",
            cache : false
        }).done(function(resp) {
            
            console.log(resp);
            //console.log(resp.data[0]);
            //console.log(resp.data[1]);
            
            //v1 - jQuery only
            //$('div#login-resp').text('Login: ' + resp.data[0]);
            //$('div#password-resp').text('Password: ' + resp.data[1]);
            
            //v2 - jQuery + Hogan
            
            /*var template = Hogan.compile(
                      "<h4>Response:</h4>"
                    + "<div>Login: {{0}}</div>"
                    + "<div>Password: {{1}}</div>");
            var output = template.render(resp.data);
            $('div#resp').html(output);
            //Делаем поля ввода формы снова активными
            */
            populateTable();
        });
        $inputs.prop("disabled", false);
    });
    
    function populateTable(){

        $('#table-container').html("<div class='progress'><div class='indeterminate'></div></div>");
        
        $.ajax({
            url: "http://localhost:8084/WebApp1/NewsServlet",
            data: {
                'action' : 'fetch-all-news'
            },
            type: "POST",
            cache : false
        }).done(function(resp) {
            
            var template = Hogan.compile(
                '<table class="table">'
                +  '<thead>'
                +    '<tr>'
                +      '<th>ID</th>'
                +       '<th>заголовок</th>'
                +       '<th>контент</th>'
                +    '</tr>'
                +  '</thead>'
                +  '<tbody>'
                +  '{{#data}}'
                + 	'<tr>'
                +           '<th scope="row">{{id}}</th>'
                +           '<td>{{title}}</td>'
                +           '<td>{{content}}</td>'
                +        '</tr>'
                +    '{{/data}}'
                +    '</tbody>'
                + '</table>'
            );
            //Заполняем шаблон данными и помещаем на веб-страницу
            $('#table-container').html(template.render(resp));
            
        });
    }
});

