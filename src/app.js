(function () {
    var config = {
        apiKey: "AIzaSyA5_tHWBXwWacE-ec0FVWn5VE_t7rC4w6o",
        authDomain: "hackathon-firebase-99.firebaseapp.com",
        databaseURL: "https://hackathon-firebase-99.firebaseio.com",
        projectId: "hackathon-firebase-99",
        storageBucket: "hackathon-firebase-99.appspot.com",
        messagingSenderId: "937205230131"
    };
    firebase.initializeApp(config);
    const preObject= document.getElementById("object");
    const dbRefObject=firebase.database().ref().child('object');
    dbRefObject.on('value', snap => console.log(snap.val()));



for(var i=1;i<=2;i++) {
        console.log("hey");
    return firebase.database().ref('block-'+i).once('value').then(function (snapshot) {
        var a_name = (snapshot.val() && snapshot.val().a_name) || 'Anonymous';
        console.log("block-"+i)
        console.log(a_name);
        // var c_name = (snapshot.val() && snapshot.val().c_name) || 'Anonymous';
        //
        // var c_address = (snapshot.val() && snapshot.val().c_address) || 'Anonymous';
        // console.log(c_address);
        var desc = (snapshot.val() && snapshot.val().desc) || 'Anonymous';
        console.log(desc);
        // var offence_location = (snapshot.val() && snapshot.val().offence_location) || 'Anonymous';
        // var offence_timestamp = (snapshot.val() && snapshot.val().offence_timestamp) || 'Anonymous';
        // var offence_location = (snapshot.val() && snapshot.val().sections) || 'Anonymous';
        // var sections = (snapshot.val() && snapshot.val().sections) || 'Anonymous';

    });

}

}());