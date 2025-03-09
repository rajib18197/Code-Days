#include<stdio.h>

struct Student_information{
    char name[100];
    int id;
    int attendance_marks;
    int assignment_marks;
    int online1_marks;
    int quiz_marks;
    int final_marks;
    float cgpa;
};

void print_details(struct Student_information students[], int n){
    for(int i = 0; i < n; i++){
        printf("Student No - %d: \n", i + 1);
        printf("Name: %s , ", students[i].name);
        printf("Id: %d , ", students[i].id);
        printf("Attendance Marks: %d%c , ", students[i].attendance_marks, '%');
        printf("Assignment Marks: %d%c , ", students[i].assignment_marks, '%');
        printf("Online1 Marks: %d%c , ", students[i].online1_marks, '%');
        printf("Quiz Marks: %d%c , ", students[i].quiz_marks, '%');
        printf("Final Marks: %d%c , ", students[i].final_marks, '%');
        printf("CGPA: %.1f\n", students[i].cgpa);
    }
}






int main(){
    struct Student_information students[30] = {
        { "Shrabon", 1, 10, 20, 20, 20, 30 },
        { "Shrabon", 2, 10, 20, 20, 20, 30 },
        { "Shrabon", 3, 10, 20, 20, 20, 30 },
        { "Shrabon", 4, 10, 20, 20, 20, 30 },
        { "Shrabon", 5, 10, 20, 20, 20, 30 },
        { "Shrabon", 6, 10, 20, 20, 20, 30 },
        { "Shrabon", 7, 10, 20, 20, 20, 30 },
        { "Shrabon", 8, 10, 20, 20, 20, 30 },
        { "Shrabon", 9, 10, 20, 20, 20, 30 },
        { "Shrabon", 10, 10, 20, 20, 20, 30 },
        { "Shrabon", 11, 10, 20, 20, 20, 30 },
        { "Shrabon", 12, 10, 20, 20, 20, 30 },
        { "Shrabon", 13, 10, 20, 20, 20, 30 },
        { "Shrabon", 14, 10, 20, 20, 20, 30 },
        { "Shrabon", 15, 10, 20, 20, 20, 30 },
        { "Shrabon", 16, 10, 20, 20, 20, 30 },
        { "Shrabon", 17, 10, 20, 20, 20, 30 },
        { "Shrabon", 18, 10, 20, 20, 20, 30 },
        { "Shrabon", 19, 10, 20, 20, 20, 30 },
        { "Shrabon", 20, 10, 20, 20, 20, 30 },
        { "Shrabon", 21, 10, 20, 20, 20, 30 },
        { "Shrabon", 22, 10, 20, 20, 20, 30 },
        { "Shrabon", 23, 10, 20, 20, 20, 30 },
        { "Shrabon", 24, 10, 20, 20, 20, 30 },
        { "Shrabon", 25, 10, 20, 20, 20, 30 },
        { "Shrabon", 26, 10, 20, 20, 20, 30 },
        { "Shrabon", 27, 10, 20, 20, 20, 30 },
        { "Shrabon", 28, 10, 20, 20, 20, 30 },
        { "Shrabon", 29, 10, 20, 20, 20, 30 },
        { "Shrabon", 30, 10, 20, 20, 20, 30 },
    };

    print_details(students, 30);
    return 0;
}