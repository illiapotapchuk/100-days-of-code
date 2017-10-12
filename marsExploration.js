//  https://www.hackerrank.com/challenges/mars-exploration

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
    var S = readLine();

    var sosFinder = function(s) {
        var num = 0;

        for(var i = 0; i < s.length; i+=3) {
            if(s[i] !== 'S') {
                num++;
            }

            if(s[i+1] !== 'O') {
                num++;
            }

            if(s[i+2] !== 'S') {
                num++;
            }
        }

        return num;
    }

    console.log(sosFinder(S));
}
