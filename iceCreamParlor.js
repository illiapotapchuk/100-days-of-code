//  https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem

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
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);

        var prices = {};

        for(var i = 0; i < a.length; i++) {
            var curDiff = m-a[i];
            if(typeof prices[curDiff] !== "undefined") {
                i++;
                prices[curDiff]++;
                console.log(prices[curDiff] + " " + i);
                break;
            } else {
                prices[a[i]] = i;
            }
        }
    }

}
