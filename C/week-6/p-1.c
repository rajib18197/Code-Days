#include <stdio.h>

int main(){
    int n;
    printf("Enter N: ");
    scanf("%d", &n);
    int count = 0;
    for(int i = 1; count < n; i++){
        if(i % 2 == 1){
            printf("%d ", i);
            count++;
        }
    }

    return 0;
}