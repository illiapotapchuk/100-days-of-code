//  https://www.hackerrank.com/challenges/countingsort1


function processData(input) {
    input = input.split('\n');
    a = input[1].split(' ');
    var counts = Array.apply(null, Array(100)).map(Number.prototype.valueOf,0);
    
    for(var i = 0; i < a.length; i++) {
        counts[a[i]]++;
    }
    
    console.log(counts.join(' '));
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
