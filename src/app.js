

(function () {
/*
    function get_snap() {

    }*/



    var config = {
        apiKey: "AIzaSyAUVdiBQHOSYDHLl1R7WXJvv-DcMyvygxk",
        authDomain: "poojab26-firebase.firebaseapp.com",
        databaseURL: "https://poojab26-firebase.firebaseio.com",
        projectId: "poojab26-firebase",
        storageBucket: "poojab26-firebase.appspot.com",
        messagingSenderId: "164631083677"
    };
    firebase.initializeApp(config);

    var flag=0;

    var count=0;
    var time_arr1,time_arr2,time_arr3;
    var max=count;

    var s1,s2,s3;
    var another1 = firebase.database().ref("fir/record-1");

    var another = firebase.database().ref("fir/record-2");

    var another2 = firebase.database().ref("fir/record-3");

    do {
        another1.on("value", function (snapshot) {
            time_arr1 = snapshot.child("report_timestamp").val();
            s1 = snapshot.val();
            console.log(time_arr1);
            console.log(s1);
        });

        another.on("value", function (snapshot) {
            time_arr2 = snapshot.child("report_timestamp").val();
            s2 = snapshot.val();
            console.log(time_arr2);
        });

        another2.on("value", function (snapshot) {
            time_arr3 = snapshot.child("report_timestamp").val();
            s3 = snapshot.val();
            console.log(time_arr3);
        });
    }
    while (s1!==null&&s2!==null&&s3!==null) {
        if (time_arr1 === time_arr2) {
            const rootRef = firebase.database().ref('fir');
            const storesRef = rootRef.child('record-2');
            const newStoreRef = storesRef.push();

            newStoreRef.set({
                'block_numb': '2'
            });


        }
    }
    // if(time_arr2==time_arr3){
    //     var rootRef = firebase.database().ref();
    //     var storesRef = rootRef.child('fir/block-2');
    //     var newStoreRef = storesRef.push();
    //     newStoreRef.set(s1);
    // }

}());