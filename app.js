$(document).ready(function() {

    $('#add-btn').click(function() {
        var task = $('#task-input').val().trim();

        if(task !== "") {
            $('#task-list').append(
                '<li>' +
                '<input type="checkbox"> ' +
                '<span>' + task + '</span>' +
                '<span class="delete"> X</span>' +
                '</li>'
            );
            $('#task-input').val('');
        }
    });

    $(document).on('click', '.delete', function() {
        $(this).parent().remove();
    });

    $(document).on('change', 'input[type="checkbox"]', function() {
        $(this).parent().toggleClass('completed');
    });

    $('#task-input').keypress(function(e){
        if(e.which == 13){
            $('#add-btn').click();
        }
    });

});