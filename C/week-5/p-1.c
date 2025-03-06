#include <stdio.h>

int main(){
    int num, sum = 0;

    do{
        printf("Enter a number: ");
        scanf("%d", &num);
        if(num > 0 && num % 2 == 0){
            sum = sum + num;
        }
    }while(num > 0);

    printf("Sum of all even entered number: %d", sum);
    return 0;
}