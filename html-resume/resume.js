var xhr = $.getJSON('resume_contents.json');

var tableRows = function(data, headerFun, dataFun) {
    rows = []
    for (key in data) {
        var tr = $('<tr>');
        tr.append($('<th>').html(headerFun(data)));
        tr.append($('<td>').html(dataFun(data)));
        rows.add(tr);
    }
    return rows
}

var splitTables = function(data, rowFun) {
    elements = [];

    var split = splitData(data);

    for (idx in split) {
        var table = $('<table>').addClass('halftable');
        table.append(rowFun(split[idx]))
    }

}

var splitData = function(data) {
    var keys = Object.keys(data);
    var half = Math.ceil(keys.length / 2);

    var makeHalf = function(partKeys, data){
        var part = {};
        for (idx in partKeys) {
            part[partKeys[idx]] = data[partKeys[idx]];
        }
        return part;
    }

    var left = keys.splice(0, half);
    var right = keys.splice(0, half);

    return [makeHalf(left, data), makeHalf(right, data)]
}

var renderPeriods = function(data, element) {
    for (period in data['periods']) {
        var options = {year: "numeric", month: "short"};
        var start = new Date(period.start);
        var end = new Date(period.end);
        element.append(
            $('<p>').html(
                start.toLocaleDateString('en-US', options).toLowerCase() +
                ' - ' + 
                end.toLocaleDateString('en-US', options).toLowerCase()
            ).addClass('period')
        );
    }
    return element;
}

var renderField = function(data, element, fieldname) {
    element.append(data[fieldname]);
    return element;
}





xhr.done(function(data){
    resume = data;

    $('#paper').append($('<hr>'));
    $('#paper').append($('<h1>').html('Résumé'));
    $('#paper').append($('<hr>'));

    $('#paper').append($('<h2>').html('Personal data'));

    var personalData = splitTables(data['Personal data']);

    



});
