#include <stdio.h>

int main(){

    int choice;
    do{
        printf("1. Print \"Hello\"\n");
        printf("2. Print \"Goodbye\"\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        if(choice == 1){
            printf("\"Hello\"\n");
        }else if(choice == 2){
            printf("\"Goodbye\"\n");
        }else if(choice == 3){
            printf("Exit");
        }
    }while(choice != 3);

    return 0;
}