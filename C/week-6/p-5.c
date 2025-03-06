#include <stdio.h>

int main(){
    int num;
    printf("Please Enter a number: ");
    scanf("%d", &num);
    int digits = 0;

    for(int i = num; i > 0; i/=10){
        digits = digits + 1;
    }

    printf("Number of Digits: %d", digits);
    return 0;
}