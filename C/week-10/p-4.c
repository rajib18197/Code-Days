#include<stdio.h>
#include<string.h>

int main(){
    char str[200];
    printf("Input the string: ");
    fgets(str, sizeof(str), stdin);

    char largeWord[100];
    char draftLarge[100];
    int count1 = 0;
    for(int i = 0; i < strlen(str); i++){
        if(str[i] == ' ') {
            if(strlen(draftLarge) > strlen(largeWord)){
                strcpy(largeWord, draftLarge);
                memset(draftLarge, '\0', sizeof(draftLarge));
                largeWord[count1] = '\0';
                count1 = 0;
            }else{
               count1 = 0;
               memset(draftLarge, '\0', sizeof(draftLarge));
            }
        }else{
            draftLarge[count1] = str[i];
            count1++;
        }
    }

    printf("The largest word is: %s\n", largeWord);

    char smallWord[100];
    char draftSmall[100];
    int count2 = 0;

    for(int i = 0; i < strlen(str); i++){
        if(str[i] == ' '){
            if(strlen(draftSmall) < strlen(smallWord)){
                strcpy(smallWord, draftSmall);
                memset(draftSmall, '\0', sizeof(draftSmall));
                smallWord[count2] = '\0';
                count2 = 0;
            }else{
                if(strlen(smallWord) == 0){
                    strcpy(smallWord, draftSmall);
                }
                count2 = 0;
                memset(draftSmall, '\0', sizeof(draftSmall));
            }
        }else{
            draftSmall[count2] = str[i];
            count2++;
        }
    }

     printf("The smallest word is: %s\n", smallWord);
    return 0;
}