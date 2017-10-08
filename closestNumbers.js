function processData(input) {
    var a = input.split('\n')[1].split(' ').map(Number);

    var quicksort = function(a) {
        var doSort = function(a, left, right) {
            if(left < right) {
                var pivot = a[parseInt((left+right)/2)];
                var index = partition(a, left, right, pivot);
                doSort(a, left, index-1);
                doSort(a, index, right);
            }

            return a;
        }

        var partition = function(a, left, right, pivot) {
            while(left <= right) {
                while(a[left] < pivot) {
                    left++;
                }

                while(a[right] > pivot) {
                    right--;
                }

                if(left <= right) {
                    swap(a, left, right);
                    left++;
                    right--;
                }
            }

            return left;
        }

        var swap = function(a, i, j) {
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }

        return doSort(a, 0, a.length-1);
    }

    a = quicksort(a);

    var min = a[1] - a[0];
    var pairs = [a[0] + " " + a[1]];
    var diff;

    for(var i = 1; i < a.length; i++) {
        diff = a[i+1] - a[i];

        if(diff < min) {
            pairs = [a[i] + " " + a[i+1]];
            min = diff;
        } else if(diff === min) {
            pairs.push(a[i] + " " + a[i+1]);
        }
    }

    console.log(pairs.join(' '));
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
