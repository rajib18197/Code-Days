#include<stdio.h>

int main(){
    int numsOfArr1, numsOfArr2;
    printf("Enter the number of elements in the first array: ");
    scanf("%d", &numsOfArr1);
    printf("Enter the elements of the first array in descending order: ");
    int arr1[numsOfArr1];
    for(int i = 0; i < numsOfArr1; i++){
        scanf("%d", &arr1[i]);
    }
    
    printf("Enter the number of elements in the second array: ");
    scanf("%d", &numsOfArr2);
    printf("Enter the elements of the second array in descending order: ");
    int arr2[numsOfArr2];
    for(int i = 0; i < numsOfArr2; i++){
        scanf("%d", &arr2[i]);
    }

    int mergedArr[numsOfArr1 + numsOfArr2];

    int i = 0;
    int j = 0;
    int k = 0;

    while(i < numsOfArr1 && j < numsOfArr2){
        if(arr1[i] > arr2[j]){
            mergedArr[k] = arr1[i];
            k++;
            i++;
        }else{
            mergedArr[k] = arr2[j];
            k++;
            j++;
        }
    }

    if(i < numsOfArr1){
        mergedArr[k] = arr1[i];
        k++;
        i++;
    }

    if(j < numsOfArr2){
        mergedArr[k] = arr2[j];
        k++;
        j++;
    }

    printf("Merged array in descending order: ");

    for(int i = 0; i < numsOfArr1 + numsOfArr2; i++){
        printf("%d ", mergedArr[i]);
    }

    printf("\n");
    return 0;
}