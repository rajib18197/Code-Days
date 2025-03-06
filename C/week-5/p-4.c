#include <stdio.h>

int main(){

    int num;

    printf("Enter the number of terms in the Fibonacci series: ");
    scanf("%d", &num);
    printf("Fibonacci Series of %d are: ", num);
    int a = 0, b = 1, temp, count = 0;
    do{
        printf("%d ", a);
        temp = a + b;
        a = b;
        b = temp;
        count++;
    }while(count < num);

    printf("\n");

    return 0;
}