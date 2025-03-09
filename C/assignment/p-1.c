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
        printf("CGPA: %.2f\n", students[i].cgpa);
    }
}


void cgpa_calculate(struct Student_information students[], int n){
     for(int i = 0; i < n; i++){
        int total = students[i].attendance_marks + students[i].assignment_marks + students[i].online1_marks + students[i].quiz_marks + students[i].final_marks;

        if(total >= 80){
            students[i].cgpa = 4.00;
        }else if(total >= 70 && total <= 79){
            students[i].cgpa = 3.75;
        }else if(total >= 60 && total <= 69){
            students[i].cgpa = 3.50;
        }else if(total >= 50 && total <= 59){
            students[i].cgpa = 3.00;
        }else if(total >= 40 && total <= 49){
            students[i].cgpa = 2.75;
        }else if(total >= 33 && total <= 39){
            students[i].cgpa = 2.50;
        }else{
            students[i].cgpa = 0.00;
        }
     }
}

void highest_lowest_cgpa(struct Student_information students[], int n){
     struct Student_information highest = students[0], lowest = students[0];
     for(int i = 0; i < n; i++){
        if(students[i].cgpa > highest.cgpa){
            highest = students[i];
        }
     }
     for(int i = 0; i < n; i++){
        if(students[i].cgpa < lowest.cgpa){
            lowest = students[i];
        }
     }
     printf("Highest CGPA: %d %s\n", highest.id, highest.name);
     printf("Lowest CGPA: %d %s\n", lowest.id, lowest.name);
}


int main(){
    struct Student_information students[5] = {
        { "Shrabon", 1, 10, 20, 20, 20, 30 },
        { "Rakib", 2, 5, 10, 10, 10, 15 },
        { "Emon", 3, 10, 10, 20, 10, 20 },
        { "Mehedi", 4, 10, 20, 10, 10, 10 },
        { "mubin", 5, 10, 20, 10, 20, 10 },
        { "Rahat", 6, 10, 20, 20, 20, 30 },
        { "Shaon", 7, 10, 20, 20, 20, 30 },
        { "Himu", 8, 5, 20, 20, 20, 30 },
        { "Nabil", 9, 5, 20, 20, 20, 30 },
        { "Tayeb", 10, 10, 20, 20, 20, 30 },
        { "Moinul", 11, 10, 20, 20, 20, 30 },
        { "Sazzad", 12, 5, 20, 20, 20, 30 },
        { "Afridi", 13, 10, 20, 20, 20, 30 },
        { "Tuhin", 14, 5, 20, 20, 20, 30 },
        { "Jasim", 15, 10, 20, 20, 20, 30 },
        { "Adnan", 16, 10, 20, 20, 20, 30 },
        { "Shuvo", 17, 5, 20, 20, 20, 30 },
        { "Opu", 18, 10, 20, 20, 20, 30 },
        { "Nirob", 19, 5, 20, 20, 20, 30 },
        { "Shafin", 20, 5, 20, 20, 20, 30 },
        { "Arman", 21, 10, 20, 20, 20, 30 },
        { "Nahid", 22, 5, 20, 20, 20, 30 },
        { "Muntasir", 23, 10, 20, 20, 20, 30 },
        { "Arnob", 24, 5, 20, 20, 20, 30 },
        { "Asif", 25, 5, 20, 20, 20, 30 },
        { "Shakib", 26, 5, 20, 20, 20, 30 },
        { "Tushar", 27, 10, 20, 20, 20, 30 },
        { "Fraz", 28, 10, 20, 20, 20, 30 },
        { "Fahad", 29, 5, 20, 20, 20, 30 },
        { "Sifat", 30, 10, 20, 20, 20, 30 },
    };
    cgpa_calculate(students, 5);
    print_details(students, 5);
    highest_lowest_cgpa(students, 5);
    return 0;
}