#include <stdio.h>

int main(){
    int n;
    printf("Enter n: ");
    scanf("%d", &n);
    int sum = 0;
    printf("Series: ");
    for(int i = 1; i <= n; i++){
        if(i != n){
            printf("%d + ", i);
        }else{
            printf("%d = ", i);
        }
        sum = sum + i;
    }
    printf("%d", sum);

    return 0;
}