//  https://www.hackerrank.com/challenges/cut-the-sticks

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
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var merge = function(left, right) {
        var r = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                r.push(left.shift());
            } else {
                r.push(right.shift());
            }
        }

        while(left.length) {
            r.push(left.shift());
        }

        while(right.length) {
            r.push(right.shift());
        }

        return r;
    }

    var mergeSort = function(a) {
        if(a.length < 2)
            return a;

        var middle = Math.floor(a.length/2);
        var left = a.slice(0, middle);
        var right = a.slice(middle, a.length);

        return merge( mergeSort( left ), mergeSort( right ) );
    }

    var a = mergeSort(arr);

    var sum = 0;
    var count = 0;

    for( var i = 0; i < a.length-1; i++ ) {
        if(a[a.length-1] <= 0) 
            break;			

        if(a[i] > 0) {
            sum += a[i];
            a[a.length-1] -= a[i];
            count++;
            console.log(a.length-i);
        }

        if(i+1 != a.length-1)
            a[i+1] -= sum;

    }

    if(a[a.length-1] > 0) {
        count++;
        console.log(1);
    }
}
