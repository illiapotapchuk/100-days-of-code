// https://www.hackerrank.com/challenges/pangrams/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    var isPangram = function(s) {
        var alphabet = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,g:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};

        for(var i = 0; i < s.length; i++) {
            if(typeof alphabet[s[i].toLowerCase()] !== "undefined") {
                alphabet[s[i].toLowerCase()]++;
            }
        }

        for(var l in alphabet) {
            if(!alphabet[l]) {
                return "not pangram";
            }
        }

        return "pangram";
    }

    console.log(isPangram(input));
});
