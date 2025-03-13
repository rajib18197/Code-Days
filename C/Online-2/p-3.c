#include<stdio.h>

int check_perfect(int num){
    int divisors[num];
    int j = 0;
    for(int i = 1; i < num; i++){
        if(num % i == 0){
            divisors[j] = i;
            j++;
        }
    }

    int sum = 0;
    for(int i = 0; i < j; i++){
        sum = sum + divisors[i];
    }

    if(sum == num){
        return 1;
    }else{
        return 0;
    }
}

int main(){
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    int perfect = check_perfect(num);
    if(perfect == 1){
        printf("The number %d is a perfect number", num);
    }else{
        printf("The number %d is not a perfect number", num);
    }
    return 0;
}