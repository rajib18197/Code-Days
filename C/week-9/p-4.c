#include<stdio.h>

int main(){
    int rows, columns;
    printf("Enter the number of rows: ");
    scanf("%d", &rows);
    printf("Enter the number of columns: ");
    scanf("%d", &columns);

    printf("Enter the elements of matrix: \n");
    int mat[rows][columns];

    for(int i = 0; i < rows; i++){
        for(int j = 0; j < columns; j++){
            scanf("%d", &mat[i][j]);
        }
    }

    int transpose[columns][rows];

    for(int i = 0; i < rows; i++){
        for(int j = 0; j < columns; j++){
            transpose[j][i] = mat[i][j];
        }
    }

    printf("Transpose of the matrix: \n");

    for(int i = 0; i < columns; i++){
        for(int j = 0; j < rows; j++){
            printf("%d ", transpose[i][j]);
        }

        printf("\n");
    }

    return 0;
}