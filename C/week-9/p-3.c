#include<stdio.h>

int main(){
    int numOfElements;
    printf("Enter the number of elements: ");
    scanf("%d", &numOfElements);
    printf("Enter the elements: ");

    int nums[numOfElements];

    for(int i = 0; i < numOfElements; i++){
        scanf("%d", &nums[i]);
    }

    if(numOfElements == 1) {
        printf("No second largest element found.");
        return 0;
    }

    int firstLargest = nums[0], secondLargest = nums[1];
    
    for(int i = 1; i < numOfElements; i++){
        if(nums[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = nums[i];
        }else if(nums[i] < firstLargest && nums[i] > secondLargest){
            secondLargest = nums[i];
        }
    }

    if(firstLargest == secondLargest){
        printf("No Second largest element found.");
    }else{
        printf("The Second largest element is: %d", secondLargest);
    }
    return 0;
}