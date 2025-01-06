var plusMinus = function (arr) {
    var pos = 0;
    var min = 0;
    var zero = 0;
    arr.forEach(function (element) {
        if (element < 0) {
            min++;
        }
        if (element > 0) {
            pos++;
        }
        if (element === 0) {
            zero++;
        }
    });
    console.log((pos / arr.length).toFixed(6));
    console.log((min / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
};
var minMaxSum = function (arr) {
    var maxSum = 0;
    var minSum = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        for (var j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    for (var i = 1; i <= arr.length - 1; i++) {
        maxSum += arr[i];
    }
    for (var i = 0; i < arr.length - 1; i++) {
        minSum += arr[i];
    }
    console.log(minSum, " ", maxSum);
};
minMaxSum([7, 3, 5, 9, 1]);
