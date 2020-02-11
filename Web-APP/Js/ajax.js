/*place holder for ajax loading*/
/*
$('#vanilla_ajax').append('<p id = "test">'); //jq test
$.get_vanilla({
    url: "data/data.json",
    type: 'GET',
    dataType : "json",
    success: function( result ) {
        $( "#vanilla_ajax" ).html( "<p>" + result.data + "</p>");
    }
});



//use the regular XHR technique
$('#jq_ajax').append('<p id = "test">'); //jq test
$.ajax({
    url: "data/data.json",
    type: 'GET',
    dataType : "json",
    success: function( result ) {
        $( "#jq_ajax" ).html( "<p>" + result.data + "</p>");
    }
});
*/

function get_vanilla(id, url) {
    //[1] make a new request object
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("vanilla_ajax").innerHTML = "The Ajax Post data: " + this.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(id));
}

get_vanilla('#vanilla_ajax','data/data.json');



/*
function get_jq_ajax(id,url){
    $('#jq_ajax').append('<p id = "jq_ajax">'); //jq test
    $.get_jq_ajax({
        id: "jq_ajax",
        url: "data/data.json",
        success: function( result ) {
            $( '#jq_ajax' ).html( "<p>" + result.data + "</p>");
        }
    });

}

get_jq_ajax('#jq_ajax','data/data.json');
 */
//use the $().ajax() technique
/*place holder for ajax loading*/
$('#jq_ajax').append('<p id = "test">'); //jq test
$.ajax({
    url: "data/data.json",
    type: 'GET',
    dataType : "json",
    success: function( result ) {
        $( "#jq_ajax" ).html( "<p>" +"The Jquery ajax method data: "  +result.data + "</p>");
    }
});

//How are the two techniques the same, how are they different and which will you use on the next homework if given the option?
/*
The techniques are clearly different because the Ajax post displays the data along with the curly and square brackets. In other words, it returns the entire data.
The jquery ajax returns only the numbers within the brackets, which is just returning an array of number so we essentially get a different result for both functions.



 */