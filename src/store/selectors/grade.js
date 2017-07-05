export const avg = grades => {
       var sum =0
       grades.forEach(grade => 
               sum += grade
       );
       return sum /grades.length
}


