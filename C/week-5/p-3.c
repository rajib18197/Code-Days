#include <stdio.h>

int main(){
    int num, factorial = 1;
    
    do{
        printf("Enter a non-negative integer: ");
        scanf("%d", &num);
    }while(num < 0);

    for(int i = 1; i <= num; i++){
        factorial = factorial * i;
    }

    printf("Factorial of %d is: %d", num, factorial);
    return 0;
}