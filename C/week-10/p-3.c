#include<stdio.h>
#include<string.h>

int main(){
    char str[200];
    int start, len;
    printf("Enter the string: ");
    fgets(str, sizeof(str), stdin);
    printf("Enter the position to start extraction: ");
    scanf("%d", &start);
    printf("Enter the length of the substring : ");
    scanf("%d", &len);

    char subStr[len];
    for(int i = 0; i < len; i++){
        subStr[i] = str[start + i];
    }

    printf("The substring retrieval from the string is: ");
    for(int i = 0; i < len; i++){
        printf("%c", subStr[i]);
    }
    return 0;
}