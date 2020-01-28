$(document).ready(function () {
    let $body = $('body');
    let $div = $('<div id="divBody"></div>');
    //let $h2 = $('<h2 id="h2Text"></h2>');
    $body.append($div);
    let $ul = $('<ul></ul>');
    $body.append($ul);

    $('#btnSubmit').on('click', function () {
        alert('The document Submit button was clicked.');
    });

    $('#frmSubmit').on('click', function (e) {
        e.preventDefault();
        //    $('#divBody').append($h2.text($('#frmText').val()));
        let $ul = $('ul');
        let $li = $('<li></li>');
        $li.prop('textContent', $('#frmText').val());
        $li.on('click', function () {
            $li.css("background-color", getRandomColor());
        });
        $li.on('dblclick', function () {
            $li.remove();
        });
        $ul.append($li);
    });

    $('#frmText').on('keyup', function () {
        $('#frmSubmit').prop('disabled', $('#frmText').val().length == 0);
    });

    //$h2.mouseover( function () {
    //    $('#h2Text').css("background-color", getRandomColor());
    //});  

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
