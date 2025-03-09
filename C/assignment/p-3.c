#include<stdio.h>
#include<string.h>

int main(){
    char your_name[100];
    printf("Enter your name: ");
    scanf("%s", &your_name);
    printf("Current word: %s\n", your_name);
    int total_length = strlen(your_name);
    int position;
    char ch;
    int count = 0;
    while(position != -1){
        printf("Enter position (0-%d) and letter to replace (or -1 to stop): ", total_length);
        scanf("%d %c", &position, &ch);
        if(position != -1){
            your_name[position] = ch;
            printf("Current word: %s\n", your_name);
            count = count + 1;
        }
    }
    printf("Congratulations!!!! You made %d word changes!", count);
    return 0;
}