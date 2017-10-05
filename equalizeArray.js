//  https://www.hackerrank.com/challenges/equality-in-a-array/problem

function processData(input) {
    var inp = input.split('\n');
    var a = inp[1].split(' ');
    var counts = {};
    var max = 0;
    
    for(var i = 0; i < a.length; i++) {
        if(typeof counts[a[i]] === "undefined") {
            counts[a[i]] = 1;
        } else {
            counts[a[i]]++;
        }
        
        if(counts[a[i]] > max)
            max = counts[a[i]];
    }
    
    console.log(a.length - max);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});