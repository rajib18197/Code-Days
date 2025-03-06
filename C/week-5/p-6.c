#include <stdio.h>

int main(){
    int num;
    printf("Enter a number to print its multiplication table: ");
    scanf("%d", &num);
    printf("Multiplication table of %d: \n", num);

    int multiplication = 1, dividend = num, divisor = 1;
    do{
        printf("%d * %d = %d\n", dividend, divisor, dividend * divisor);
        divisor++;
    }while(divisor <= 10);

    return 0;
}