#include<stdio.h>
#include<string.h>

int main(){
    char str1[200];
    printf("Enter a string: ");
    fgets(str1, sizeof(str1), stdin);
    str1[strcspn(str1, "\n")] = '\0';
    int count = 0;
    for(int i = 0; str1[i] != '\0'; i++){
        count++;
    }
    char str2[100];
    int j = 0;
    for(int i = count - 1; i >= 0; i--){
        str2[j] = str1[i];
        j++;
    }
    str2[j] = '\0';

    if(strcmp(str1, str2) == 0){
        printf("The string is a palimdrome");
    }else{
        printf("The string is not a palimdrome");
    }

    return 0;
}