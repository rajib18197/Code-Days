#include<stdio.h>
#include<string.h>

int main(){
    char str[200];

    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    printf("%d\n", strlen(str));
    int numOfAlphabets = 0, numOfDigits = 0, numOfSpecialChars = 0;

    for(int i = 0; str[i] != '\0'; i++){
        if((int) str[i] >= 65 && (int) str[i] <= 90){
            numOfAlphabets++;
        }else if((int) str[i] >= 97 && (int) str[i] <= 122){
            numOfAlphabets++;
        }else if((int) str[i] >= 48 && (int) str[i] <= 57){
            numOfDigits++;
        }else if(str[i] == 32 || str[i] == 10){
            continue;
        }else{
            numOfSpecialChars++;
        }
    }

    printf("Total number of alphabets: %d\n", numOfAlphabets);
    printf("Total number of digits: %d\n", numOfDigits);
    printf("Total number of special characters: %d\n", numOfSpecialChars);
    return 0;
}