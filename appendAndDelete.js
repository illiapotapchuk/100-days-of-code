//  https://www.hackerrank.com/challenges/append-and-delete/problem

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
    var s = readLine();
    var t = readLine();
    var k = parseInt(readLine());

    var stringAppDel = function(s,t,k) {  
        if (s===t || k >= s.length + t.length) return "Yes";
        
        var i = 0;
        while(s[i] === t[i]) i++;
        
        var h = k - (s.length + t.length - 2*i);
        return h < 0 || h%2 ? "No" : "Yes";
    }
    
    
    console.log(stringAppDel(s,t,k));
}