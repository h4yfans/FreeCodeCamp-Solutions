'use strict';

function updateLinks(data) {
    var topic, desc, link, resultHtml = "";
    // 1 - Topic, 2 = Short desc, 3 = Links
    for (var idx = 0; idx < data[1].length; idx++) {
        topic = data[1][idx];
        desc = data[2][idx];
        link = data[3][idx];
        console.log(topic)
        console.log(desc)
        console.log(link)
        var content = "";
        content += "<div class='well' onClick='window.open(\""+ link +"\");'>";
        content += "\t<h4>" + topic + "</h4>";
        content += "\t<p class='wiki-link-desc'>" + desc + "</p>";
        content += "</div>";
        resultHtml += content;
    }

    console.log(resultHtml);
    $("#wiki-links").html(resultHtml);
}

function search() {
    var ENG_WIKI_API_LINK = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=",
        textToSearch = $("#input-search").val(),
        request = ENG_WIKI_API_LINK + textToSearch;

    $.ajax({
        type: "GET",
        url: request,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            updateLinks(data);
        },
        error: function (errorMessage) {}
    });

}

function handleSearch() {
    var wikiLinksElement = $("#wiki-links");
    search();

    if (wikiLinksElement.css('visibility') === 'hidden') {
        wikiLinksElement.css('visibility', 'visible');
    }
}

$(document).ready(function () {

    var KEY_ENTER_ID = 13,
        wikiLinksElement = $("#wiki-links");

    // Impl of search input clear icon
    $("#search-clear").on('click', function () {
        $("#input-search").val('');

        // hide wiki-links
        if (wikiLinksElement.css('visibility') === 'visible') {
            wikiLinksElement.css('visibility', 'hidden');
        }

        // clear wiki-links content
        wikiLinksElement.html();
    });

    // impl of the search button
    $("#search-button").on('click', function () {
        handleSearch();
    });

    // Enter key handling while input is selected
    $("#input-search").keypress(function (ev) {
        if (ev.which === KEY_ENTER_ID) {
            handleSearch();
        }
    });
});