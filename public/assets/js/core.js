
$(function() {

    queryWithOptions({
        op: 'retrieve',
        page: 1
    })

})



function queryWithOptions(options) {

    $.get('https://www.cs.kent.ac.uk/people/staff/lb514/hygiene/hygiene.php', options, function(data) {
        var obj = JSON.parse(data); // Could use jquery equivalent...

        obj.forEach(function(row, i) { // Could use jquery equivalent...
            console.log(row);
        })

    });

}