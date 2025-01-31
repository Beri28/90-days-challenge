const gradingStudents =(grades:number[]):number[]=>{
    for(let i=0;i<grades.length;i++){
        if(grades[i]>=38 && grades[i]%5>=3){
            grades[i]=grades[i]+(5-grades[i]%5)
        }
    }
    console.log(grades)
    return grades
}
gradingStudents([73,67,38,33])