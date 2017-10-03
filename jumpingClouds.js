//  https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);

    var mod = k%n;
    var e = 100;

    while(mod != 0) {
        e--;
        if(c[mod]) {
            e -= 2;
        }
        
        mod = (mod + k)%n;
    } 
    
    if(e != 0) {
        e -= c[0] ? 3 : 1;
    }
    
    console.log(e);
}
