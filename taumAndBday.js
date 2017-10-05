// https://www.hackerrank.com/challenges/taum-and-bday
// Will not pass all the test cases, since JS does not support 64bit integers. Don't want to write a bunch of extra code for that support.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var b_temp = readLine().split(' ');
        var b = parseInt(b_temp[0]);
        var w = parseInt(b_temp[1]);
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        
        if(z+y<x) {
            console.log((z+y)*b + y*w);
        } else if(z+x<y) {
            console.log(x*b + (z+x)*w);
        } else {
            console.log(b*x + w*y);
        }
    }

}
