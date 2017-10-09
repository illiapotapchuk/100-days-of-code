//  https://www.hackerrank.com/challenges/picking-numbers/problem


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
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);

    var pickingNumbers = function(a) {
        a = a.sort(sortNumber);
        var count = 1, curCount;

        for(var i = 0; i < a.length - count; i++) {
            var j = i+1, curCount = 1;

            while(j < a.length && a[j] - a[i] <= 1) {
                curCount++;
                j++;
            }

            if(curCount > count) {
                count = curCount;
            }
        }

        return count;
    }

    function sortNumber(a,b) {
        return a - b;
    }

    console.log(pickingNumbers(a));

}
