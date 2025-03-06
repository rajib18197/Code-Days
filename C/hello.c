#include<stdio.h>

int input(char str[], int n){
    int ch, i = 0;

    while((ch = getchar()) != '\n'){
        if(i < n){
            str[i++] = ch;
        }
        
    }
    str[i] = '\0';
    return i;
}

void merge(int arr1[], int arr2[], int mergedArr[], int n, int m){
    int i = 0;
    int j = 0;
    int k = 0;
    while(i < n && j < m){
        if(arr1[i] < arr2[j]){
            mergedArr[k] = arr1[i];
            i++;
            k++;
        }else{
            mergedArr[k] = arr2[j];
            j++;
            k++;
        }
    }

    while(i < n){
        mergedArr[k++] = arr1[i++];
    }

    while(j < m){
        mergedArr[k++] = arr2[j++];
    }

}

int main(){
//    char str[100];
//    int n = input(str, 5);
//    printf("Here is %d %s", n, str);

   int arr1[4] = {10, 20, 30, 40};
   int arr2[4] = {15, 25, 35, 45};
   int mergedArr[sizeof(arr1) / sizeof(arr1[0]) +sizeof(arr2) / sizeof(arr2[0])];

   merge(arr1, arr2, mergedArr, 4, 4);
   for(int i = 0; i < sizeof(mergedArr) / sizeof(mergedArr[0]); i++){
    printf("%d ",mergedArr[i]);
   }
   return 0;
}

