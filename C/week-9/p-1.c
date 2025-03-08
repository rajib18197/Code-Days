#include<stdio.h>

int main(){
    int numberOfElements;
    printf("Enter the number of elements: ");
    scanf("%d", &numberOfElements);

    int nums[numberOfElements];
    printf("Enter the elements: ");
    
    for(int i = 0; i < numberOfElements; i++){
        scanf("%d", &nums[i]);
    }

    printf("\n");

    // for(int i = 0; i < numberOfElements; i++){
    //     printf("%d ", nums[i]);
    // }

    int evenNums[numberOfElements];
    int oddNums[numberOfElements];
    int even_i = 0;
    int odd_j = 0;

    for(int i = 0; i < numberOfElements; i++){
        if(nums[i] % 2 == 0){
            evenNums[even_i++] = nums[i];
        }else{
            oddNums[odd_j++] = nums[i];
        }
    }

    printf("Even numbers: ");
    for(int i = 0; i < even_i; i++){
        printf("%d ", evenNums[i]);
    }

    printf("\n");

    printf("Odd numbers: ");
    for(int j = 0; j < odd_j; j++){
        printf("%d ", oddNums[j]);
    }
    return 0;
}