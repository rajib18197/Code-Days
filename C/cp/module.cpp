#include <bits/stdc++.h>
using namespace std;

int main(){
    int arr[9][9];

    for(int i = 0; i < 9; i++){
        for(int j = 0; j < 9; j++){
            cin >> arr[i][j];
        }
    }

    
    int isCorr = 1;

    while(isCorr){

        for(int i = 0; i < 9; i++){
            int rows[9] = {0};
            int isRight = 1;

            for(int j = 0; j < 9; j++){
                if(rows[arr[i][j] - 1] == 0){
                    rows[arr[i][j] - 1] = 1;
                }else{
                    isRight = 0;
                    break;
                }
            }
            if(isRight == 0){
                isCorr = 0;
                break;
            }
        }

        if(isCorr == 0){
            break;
        }

        for(int i = 0; i < 9; i++){
            int cols[9] = {0}; 
            int isRight = 1;

            for(int j = 0; j < 9; j++){
                if(cols[arr[j][i] - 1] == 0){
                    cols[arr[j][i] - 1] = 1;
                }else{
                    isRight = 0;
                    break;
                }
            }
            if(isRight == 0){
                isCorr = 0;
                break;
            }
        }

        if(isCorr == 0){
            break;
        }

        int first = 0;
        int last = 0; 
        int row_i = 0;
        int col_i = 0;

        while(row_i != 9){
            int cells[9] = {0, 0, 0, 0, 0, 0, 0, 0, 0};
            int isCorrect = 1;
            for(int i = first + row_i; i < first + row_i + 3; i++){
                for(int j = col_i + last; j < col_i + last + 3; j++){
                    if(cells[arr[i][j] - 1] == 0){
                        cells[arr[i][j] - 1] = 1;
                    }else{
                        isCorrect = 0;
                        break;
                    }
                }
                if(isCorrect == 0){
                    isCorr = 0;
                    break;
                }
            }

            
            if(isCorr == 0){
                break;
            }

            if(col_i == 6){
                first = 0;
                row_i = row_i + 3;
                last = 0;
                col_i = 0;
            }else{
                last = 0;
                col_i = col_i + 3;
            }

        }

        if(isCorr == 1){
            cout << "YES" << endl;
            break;
        }
    }

    if(isCorr == 0){
        cout << "NO" << endl;
    }

    // int first = 0;
    // int last = 0; 
    // int row_i = 0;
    // int col_i = 0;
    // while(row_i != 9){
    //     for(int i = first + row_i; i < first + row_i + 3; i++){
    //         for(int j = col_i + last; j < col_i + last + 3; j++){
    //             cout << arr[i][j] << " ";
    //         }
    //         cout << endl;
    //     }

    //     if(col_i == 6){
    //         first = 0;
    //         row_i = row_i + 3;
    //         last = 0;
    //         col_i = 0;
    //     }else{
    //         last = 0;
    //         col_i = col_i + 3;
    //     }
    // }
    return 0;


}