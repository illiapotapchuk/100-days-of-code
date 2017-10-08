//  https://www.hackerrank.com/challenges/chocolate-feast

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
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var c = parseInt(n_temp[1]);
        var m = parseInt(n_temp[2]);

        var numberOfWraps = parseInt(n/c);
        var eatenChocolates = numberOfWraps;
        var boughtWithWraps;
        while(numberOfWraps >= m) {
            boughtWithWraps = parseInt(numberOfWraps/m);
            eatenChocolates += boughtWithWraps;
            numberOfWraps = numberOfWraps%m + boughtWithWraps;
        }

        console.log(eatenChocolates);
    }

}
