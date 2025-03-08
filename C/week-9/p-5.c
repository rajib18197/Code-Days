#include<stdio.h>

int main(){
    int n;
    printf("Enter the size of the matrix (n x n): ");
    scanf("%d", &n);
    
    int mat[n][n];
    printf("Enter the elements of the matrix: \n");

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            scanf("%d", &mat[i][j]);
        }
    }

    for(int i = 1; i < n; i++){
        for(int j = 0; j < i; j++){
            mat[i][j] = 0;
        }
    }

    printf("Upper Triangular matrix: \n");

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            printf("%d ", mat[i][j]);
        }

        printf("\n");
    }

    return 0;
}