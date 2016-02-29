$(document).ready(function () {



    function getResults(searchTerm) {

        console.log(searchTerm);
        SC.initialize({
            client_id: '51a71b48d81e4d94fdc07f3bfc3cf431'
        });



        SC.get('/tracks', {
            genres: searchTerm,


        }).then(function (tracks) {
            displaySearchResults(tracks);

        });
    }

    function getResults(bpmTerm) {
        console.log(bpmTerm);

        SC.initialize({
            client_id: '51a71b48d81e4d94fdc07f3bfc3cf431'
        });



        SC.get('/tracks', {

            bpm: {
                from: 'bpmTerm'
            }


        }).then(function (tracks) {
            displaySearchResults(tracks);

        });
    }

    function displaySearchResults(tracks) {
        var html = "";
        $.each(tracks, function (index, track) {
            console.log(track);
            html = html + "<li><h1>" + track.title + "</h1><div id='track-info'><img src='" + track.artwork_url + "'/><h3>BPM: " + track.bpm + "</h3><p>Favorited: " + track.favoritings_count + "</p><p>Playback Count: " + track.playback_count + "</p><p>" + track.description + "</p><a href ='" + track.perma_link + "' target ='_blank'>Listen Here!</a></div></li>";


        });
        $('#track-list ul').append(html);
    }
    $("#sc-search").submit(function (event) {
        event.preventDefault();

        getResults($('#sc-terms').val());
        getResults($('#bpm').val());
    });
});
