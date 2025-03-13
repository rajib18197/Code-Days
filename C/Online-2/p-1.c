#include<stdio.h>

int main(){
    int maze;
    printf("Enter maze size: ");
    scanf("%d", &maze);
    printf("Enter magical power grid: \n");
    int grid[maze][maze];
    for(int i = 0; i < maze; i++){
        for(int j = 0; j < maze; j++){
            scanf("%d", &grid[i][j]);
        }
    }

    int row, col, sum = 0;
    while(1){
        printf("Enter the next position: ");
        scanf("%d %d", &row, &col);
        if(grid[row - 1][col - 1] == 0){
            printf("Oh no! A cursed trap! Harry is trapped forever...\n");
            break;
        } else if(row == maze && col == maze){
            sum = sum + grid[row - 1][col - 1];
            printf("Harry reaches the final spot with a total magical power of %d!", sum);
            break;
        } else{
            sum = sum + grid[row - 1][col - 1];
            printf("Harry steps into (%d,%d) and gains %d power!\n", row, col, grid[row - 1][col - 1]);
        }
    }
    if(grid[row - 1][col - 1] == 0){
        printf("Total Magical Power: %d\n", sum);
    }
    return 0;
}