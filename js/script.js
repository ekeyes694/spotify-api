$(document).ready(function () {

    $("#sc-search").submit(function (event) {
        event.preventDefault();

        var searchTerm = $('#genre').val();
        var bpmTerm = $('#bpm').val();
        searchValidation(searchTerm, bpmTerm);
    });

    function searchValidation(searchTerm, bpmTerm) {
        if ((bpmTerm == '') && (searchTerm == null)) {
            alert('Please enter something in the text box and try again!');
            $('#track-list ul').html('');
            return false;
        } else {
            getResults(searchTerm, bpmTerm);
        }
    }

    function getResults(searchTerm, bpmTerm) {
        console.log(bpmTerm);
        console.log(searchTerm);
        SC.initialize({
            client_id: '51a71b48d81e4d94fdc07f3bfc3cf431'
        });
        SC.get('/tracks', {
            genres: searchTerm,
            bpm: {
                from: bpmTerm
            }

        }).then(function (tracks) {
            displaySearchResults(tracks);

        });
    }

    function displaySearchResults(tracks) {
        var html = "";
        $.each(tracks, function (index, track) {
            console.log(track);
            html = html + "<li><h1>" + track.title + "</h1><div id='track-info'><img src='" + track.artwork_url + "'/><h3>BPM: " + track.bpm + "</h3><p>Favorited: " + track.favoritings_count + "</p><p>Playback Count: " + track.playback_count + "</p><p>" + track.description + "</p><a href ='" + track.permalink_url + "' target ='_blank'>Listen Here!</a></div></li>";
        });
        $('#track-list ul').append(html);
    }

});
