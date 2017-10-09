//  https://www.hackerrank.com/challenges/fair-rations/problem


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
    var N = parseInt(readLine());
    B = readLine().split(' ');
    B = B.map(Number);


    var bread = function(a) {
        if(a.length === 1) {
            return a[0]%2 === 0 ? 0 : 1;
        } else if(a.length === 0) {
            return 0;
        }

        var count = 0;

        for(var i = 0; i < a.length-1; i++) {
            if(a[i]%2 > 0) {
                a[i]++;
                a[i+1]++;
                count += 2;
            }
        }

        if( a[a.length-1]%2 > 0) {
            return "NO";
        } else {
            return count;
        }
    }

    console.log(bread(B));
}
