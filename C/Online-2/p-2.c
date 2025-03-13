#include<stdio.h>

int main(){
    char randomLetters[100];
    int first, second, third;
    printf("Enter the letter set: ");
    scanf("%s", &randomLetters);

    int points = 0;
    char word[4];
    while(1){
        printf("Enter positions: ");
        scanf("%d %d %d", &first, &second, &third);
        if(first == -1){
            break;
        }
        word[0] = randomLetters[first];
        word[1] = randomLetters[second];
        word[2] = randomLetters[third];
        word[3] = '\0';
        printf("Word Formed: %s\n", word);
        points = points + 1;
    }

    printf("Congratulations! You have made %d words!!\n", points);
    return 0;
}