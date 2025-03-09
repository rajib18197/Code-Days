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

int main(){
    struct Student_information students[30];
    return 0;
}