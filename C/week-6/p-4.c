#include <stdio.h>

int main(){

    int n;
    printf("Enter n: ");
    scanf("%d", &n);
    printf("Fibonacci Series of %d are: ", n);

    int a = 0, b = 1, temp, count = 0;

    for(int i = 0; i < n; i++){
        printf("%d ", a);
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return 0;
}