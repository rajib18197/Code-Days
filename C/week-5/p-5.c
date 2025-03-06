#include <stdio.h>

int main(){
    int num;

    do{
        printf("Please enter a positive number: ");
        scanf("%d", &num);
        if(num < 0){
            printf("Invalid Input. The Number must be positive.\n");
        }
    }while(num < 0);

    printf("Entered by the user: %d", num);
    return 0;
}