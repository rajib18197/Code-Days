#include <stdio.h>

int main(){
    printf("1. Capital Letter: \n");
    printf("2. Small Letter: \n");
    printf("3. Number: \n");
    printf("Choose Your Option: ");
    int option;
    scanf("%d", &option);
    if(option == 1){
        char letters[] = {
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '\0'};
        for(int i = 0; letters[i] != '\0'; i++){
            printf("%c ", letters[i]);
        }
    }else if(option == 2){
        for(int i = 97; i <= 122; i++){
            printf("%c ", i);
        }
    }else{
        for(int i = 0; i <= 9; i++){
            printf("%d ", i);
        }
    }
    
    return 0;
}