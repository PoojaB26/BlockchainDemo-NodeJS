var config = {
    apiKey: "AIzaSyAUVdiBQHOSYDHLl1R7WXJvv-DcMyvygxk",
    authDomain: "poojab26-firebase.firebaseapp.com",
    databaseURL: "https://poojab26-firebase.firebaseio.com",
    projectId: "poojab26-firebase",
    storageBucket: "poojab26-firebase.appspot.com",
    messagingSenderId: "164631083677"
};
firebase.initializeApp(config);

var flag = 0;

var count = 0;
var time_arr1, time_arr2, time_arr3;
var max = count;
var dataArray=[];

var ref = firebase.database().ref("fir/record-"+1);
//var key;
ref.on("value",function (snapshot) {
    var data=snapshot.val();

    for (var key in data){
        data[key].key=key;
        dataArray.push(data[key]);
    }
    // JSON.stringify(snapshot.val()
document.getElementById('title').value=data.a_name;
    console.log(snapshot.val());


});



//}
// while (s1!==null&&s2!==null&&s3!==null) {
/* if (time_arr1 === time_arr2) {
     const rootRef = firebase.database().ref('fir');
     const storesRef = rootRef.child('record-3').update({
         'block_numb': '2'
     });*/
/*   var newStoreRef = storesRef.ref();
   newStoreRef.set({
       'block_numb': '2'
   });
*/

//   }

// if(time_arr2==time_arr3){
//     var rootRef = firebase.database().ref();
//     var storesRef = rootRef.child('fir/block-2');
//     var newStoreRef = storesRef.push();
//     newStoreRef.set(s1);
// }

function addBlockNumber() {
    if (time_arr1 === time_arr2) {
        const rootRef = firebase.database().ref('fir');
        const storesRef = rootRef.child('record-4').update({
            'block_numb': '2'
        });
        console.log("BLOCK NUMBER ADDED");

    }
    console.log("BLOCK NUMBER outside");

}

function addParent() {
    if (time_arr1 === time_arr2) {
        const rootRef = firebase.database().ref('fir');
        const storesRef = rootRef.child('record-4').update({
            'block_numb': '2'
        });
        console.log("BLOCK NUMBER ADDED");

    }
    console.log("BLOCK NUMBER outside");

}
/*

function getTime(callback){


    for(var i=1;i<8;i++){
        var ref = firebase.database().ref("fir/record-"+i);
        var ref1 = firebase.database().ref("fir/record-"+(i-1));
        ref1.on("value", function(snapshot) {
            var data=snapshot.val();
            var time = data.report_timestamp;
            console.log("PREV " + time);
        });



        //var key;
        ref.on("value",function (snapshot) {
            var data=snapshot.val();
            var dataArray=[];
            for (var key in data){
                data[key].key=key;
                dataArray.push(data[key]);
            }

            console.log("NEW " + data.report_timestamp);

        });


    }



    console.log("snapshot");
}



getTime(addBlockNumber);*/
