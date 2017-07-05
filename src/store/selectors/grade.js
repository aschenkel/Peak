export const avg = grades => {
       var sum =0
       grades.forEach(grade => 
               sum += grade
       );
       return sum /grades.length
}

export const getTopTweets = grades => {
        return{
                dumbest: indexOfSmartest(grades),
                smartest: indexOfDumbest(grades)
        }        
}

const indexOfSmartest = (arr) => {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

const indexOfDumbest = (arr) => {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    return minIndex;
}



