#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(){
    char str[200];
    printf("Enter the string: ");
    fgets(str, sizeof(str), stdin);

    int countFrequency[26] = {0};

    for(int i = 0; i < strlen(str); i++){
        if(str[i] == ' ') continue;
        str[i] = tolower(str[i]);
        countFrequency[str[i] - 97]++;
    }

    int max = countFrequency[0];
    int ch = 0;

    for(int i = 0; i < 26; i++){
        if(countFrequency[i] > max){
            max = countFrequency[i];
            ch = i;
        }
    }

    int characterAscii = ch + 97;
    printf("The highest frequency character is \'%c\'\n", characterAscii);
    printf("The frequency of \'%c\': %d\n", characterAscii, max);
    return 0;
}