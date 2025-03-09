#include<stdio.h>

int armstrong_number(int num){
    int a = num;
    int digits = 0;
    while(a > 0){
        digits = digits + 1;
        a = a / 10;
    }

    a = num;
    int sum = 0;
    while(a > 0){
        int remainder = a % 10;
        int cube = 1;
        for(int i = 0; i < digits; i++){
            cube = cube * remainder;
        }
        sum = sum + cube;
        a = a / 10;
    }

    // printf("%d %d\n", sum, num);

    if(sum == num){
        return 1;
    }else{
        return 0;
    }
}

void print_all_armstrong_nums(int a, int b){
    for(int i = a; i <=b; i++){
        int check_num = armstrong_number(i);
        if(check_num == 1){
            printf("%d is an armstrong number.\n", i);
        }
    }
}

int main(){
    int a, b;
    printf("input a start and a end number: ");
    scanf("%d %d", &a, &b);
    print_all_armstrong_nums(a, b);
    return 0;
}