#include <bits/stdc++.h>
using namespace std;

int main(){
    // int n, d;
    // cin >> n >> d;
    // char str[n][d];

    // for(int i = 1; i <= n; i++){
    //     for(int j = 1; j <= d; j++){
    //         cin >> str[i - 1][j - 1];
    //     }
    // }
    
    // map<int, int> count;

    // for(int i = 1; i <= n; i++){
    //     for(int j = 1; j <= d; j++){
    //         if(str[i - 1][j - 1] == 'o'){
    //            auto it = count.find(j);
    //            if(it != count.end()){
    //             it->second = it->second + 1;
    //            }else{
    //             count.insert({j, 1});
    //            } 
    //         }
    //     }
    // }


    // int mx = 0;
    // int c = 0;
    // for(int i = 1; i <= d; i++){
    //     auto it = count.find(i);
    //     if(it != count.end() && it->second >= n){
    //         c++;
    //         mx = max(mx, c);
    //     }else{
    //         c = 0;
    //     }
    // }

    // cout << mx << endl;


    // int n, m;
    // cin >> n >> m;
    // int arr[m][n];

    // for(int i = 0; i < m; i++){
    //     for(int j = 0; j < n; j++){
    //         cin >> arr[i][j];
    //     }
    // }

    //  for(int i = 0; i < m; i++){
    //     for(int j = 0; j < n; j++){
    //         cout << arr[i][j] << " ";
    //     }
    //     cout << endl;
    // }
    
    // map<pair<int, int>, int> mapArr;
    // for(int k = 0; k < m; k++){
    //     for(int i = 0; i < n; i++){
    //         for(int j = i + 1; j < n; j++){
    //             pair<int, int> temp = {arr[k][i], arr[k][j]};
    //             mapArr[temp] = 0;
    //         }
    //         cout << endl;
    //     }
    // }

    //  for(int i = 0; i < m; i++){
    //     for(int j = 0; j < n - 1; j++){
    //         auto p = mapArr.find({arr[i][j], arr[i][j + 1]});
    //         p->second = p->second + 1;
    //     }
    //     cout << endl;
    // }

    // map<pair<int, int>, int> count;

    // for(auto it: mapArr){
    //     cout << "(" << it.first.first << ", " << it.first.second << "): " << it.second << endl;
    //     if(it.second == 0){
    //         auto opposite = mapArr.find({it.first.second, it.first.first});

    //         if(opposite != mapArr.end()){
    //             if(opposite->second == 0){
    //                 auto format_1 = count.find({it.first.first, it.first.second});
    //                 auto format_2 = count.find({it.first.second, it.first.first});
    //                 if(format_1 != count.end() || format_2 != count.end()) {
                        
    //                 }else{
    //                     int sum = it.first.first + it.first.second;
    //                     count.insert({{it.first.first, it.first.second}, sum}); 
    //                 }
    //             }
    //         }else{
    //              int sum = it.first.first + it.first.second;
    //              count.insert({{it.first.first, it.first.second}, sum}); 
    //         }
    //     }
    // }
    // cout << "zero: " << endl;
    // for(auto it: mapArr){
    //     if(it.second == 0){
    //         auto opposite = mapArr.find({it.first.second, it.first.first});

    //         if(opposite->second == 0){
    //             cout << "(" << it.first.first << ", " << it.first.second << "): " << it.second << endl;
    //         }
    //     }
    // }
    // cout << endl;
    // cout << "Answer: " << endl;
    // for(auto it: count){
    //     cout << it.first.first << " " << it.first.second << " " << it.second << endl;
    // }
    // cout << "count is: " << count.size() << endl;

   
    // Problem -----

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