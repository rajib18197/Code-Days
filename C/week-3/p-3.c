#include<stdio.h>

int main(){
    int principalAmount, time;
    float interestRate;

    printf("Enter principal amount: ");
    scanf("%d", &principalAmount);
    printf("Enter rate of interest: ");
    scanf("%f", &interestRate);
    printf("Enter time period (in years): ");
    scanf("%d", &time);

    printf("Simple Interest is: %.2f", (principalAmount * interestRate * time) / 100);
    
    return 0;
}