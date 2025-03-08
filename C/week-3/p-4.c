#include<stdio.h>

int main(){
    int A;
    float B;
    printf("Enter, A = ");
    scanf("%d", &A);
    printf("Enter, B = ");
    scanf("%f", &B);

    printf("Addition: %d + %.2f\t= %.2f\n", A, B, A + B);
    printf("Subtraction: %d - %.2f\t= %.2f\n", A, B, A - B);
    printf("Multiplication: %d * %.2f\t= %.2f\n", A, B, A * B);
    printf("Division: %d / %.2f\t= %.2f\n", A, B, A / B);

    return 0;
}