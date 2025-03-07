#include<stdio.h>
#include<string.h>
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

void fahrCelTable(){
    int lower = 0;
    int upper = 300;
    int incrementBy = 20;
    int fahrenheight = lower;
    int celcious;
    while(fahrenheight <= upper){
        celcious = 5 * (fahrenheight - 32) / 9;
        printf("%d\t%d\n", fahrenheight, celcious);
        fahrenheight += incrementBy; 
    }
}

void calcExtras(int bills[], int totalLength){
    int extras[totalLength];
    int totalValues[totalLength];
    for(int i = 0; i < totalLength; i++){
        if(bills[i] >= 50 && bills[i] <= 300){
            totalValues[i] = bills[i] + (0.15 * bills[i]);
            extras[i] = 0.15 * bills[i];
        }else{
            totalValues[i] = bills[i] + (0.20 * bills[i]);
            extras[i] = 0.20 * bills[i];
        }
    }

    for(int i = 0; i < totalLength; i++){
        printf("BillValue: %d, ExtraValue: %d, totalValue: %d\n", bills[i], extras[i], totalValues[i]);
    }
}

void isPalindrome(){
    char str1[100];

    printf("Enter a string: ");
    gets(str1);
    int count = 0;
    for(int i = 0; str1[i] != '\0'; i++){
        count++;
    }
    printf("%d\n", count);
    char str2[100];
    int j = 0;
    for(int i = count - 1; i >= 0; i--){
        str2[j] = str1[i];
        j++;
    }
    str2[j] = '\0';
    printf("%s %s\n", str1, str2);

    if(strcmp(str1, str2) == 0){
        printf("%s is a palimdrome", str1);
    }else{
        printf("%s is not a palimdrome", str1);
    }
}

int main(){
//    char str[100];
//    int n = input(str, 5);
//    printf("Here is %d %s\n", n, str);

//    int arr1[4] = {10, 20, 30, 40};
//    int arr2[4] = {15, 25, 35, 45};
//    int mergedArr[sizeof(arr1) / sizeof(arr1[0]) +sizeof(arr2) / sizeof(arr2[0])];

//    merge(arr1, arr2, mergedArr, 4, 4);
//    for(int i = 0; i < sizeof(mergedArr) / sizeof(mergedArr[0]); i++){
//     printf("%d ",mergedArr[i]);
//    }

    // fahrCelTable();

    // int bills[3] = {125, 555, 44};
    // int totalLength = sizeof(bills) / sizeof(bills[0]);
    // calcExtras(bills, totalLength);

    isPalindrome();
   return 0;
}

