#include <stdio.h>

int main(){
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    int reversed = 0;
    do{ 
        int remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = num / 10;
    }while(num > 0);

    printf("Reversed number: %d", reversed);
    return 0;
}