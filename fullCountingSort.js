//  https://www.hackerrank.com/challenges/countingsort4/problem

function processData(input) {
    var a = input.split('\n');
    var counts = Array.apply(null, Array(100)).map(String.prototype.valueOf, "0");

    for(var i = 1; i < a.length; i++) {
        if(i <= (a.length-1)/2) {
            var temp = a[i].split(' ');
            temp[1] = '-';
            a[i] = temp.join(' ');
        }

        var countStr = counts[a[i].split(' ')[0]].split(' ');
        countStr[0]++;
        countStr.push(a[i].split(' ')[1]);
        counts[a[i].split(' ')[0]] = countStr.join(' ');
    }

    var finalStr = [];

    for(var i = 0; i < counts.length; i++) {
        var temp = counts[i].split(' ');
        var curString = 1;
        while(temp[0] > 0) {
            temp[0]--;
            finalStr.push(temp[curString] + " ");
            curString++;
        }
    }

    console.log(finalStr.join(''));
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
