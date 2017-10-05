//  https://www.hackerrank.com/challenges/beautiful-triplets

function processData(input) {
    var inp = input.split('\n');
    var d = parseInt(inp[0].split(' ')[1]);
    var a = inp[1].split(' ').map(Number);
    var count = 0;
    
    for(var i = 0; i < a.length-2; i++) {
        var found = false;
        for(var j = i+1; j < a.length-1; j++) {
            if(a[j] - a[i] === d) {
                var c = a[j];
                found = true;
                break;
            }
        }
        
        if(found) {
            for(var k = j+1; k < a.length; k++) {
                if(a[k] - c === d) {
                    count++;
                    break;
                }
            }
        }   
    }
    
    console.log(count);
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
