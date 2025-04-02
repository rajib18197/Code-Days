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


    int n, m;
    cin >> n >> m;
    int arr[m][n];

    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            cin >> arr[i][j];
        }
    }

    //  for(int i = 0; i < m; i++){
    //     for(int j = 0; j < n; j++){
    //         cout << arr[i][j] << " ";
    //     }
    //     cout << endl;
    // }
    
    map<pair<int, int>, int> mapArr;
    for(int k = 0; k < m; k++){
        for(int i = 0; i < n; i++){
            for(int j = i + 1; j < n; j++){
                pair<int, int> temp = {arr[k][i], arr[k][j]};
                mapArr[temp] = 0;
            }
            cout << endl;
        }
    }

     for(int i = 0; i < m; i++){
        for(int j = 0; j < n - 1; j++){
            auto p = mapArr.find({arr[i][j], arr[i][j + 1]});
            p->second = p->second + 1;
        }
        cout << endl;
    }

    map<pair<int, int>, int> count;

    for(auto it: mapArr){
        cout << "(" << it.first.first << ", " << it.first.second << "): " << it.second << endl;
        if(it.second == 0){
            auto opposite = mapArr.find({it.first.second, it.first.first});

            if(opposite != mapArr.end()){
                if(opposite->second == 0){
                    auto format_1 = count.find({it.first.first, it.first.second});
                    auto format_2 = count.find({it.first.second, it.first.first});
                    if(format_1 != count.end() || format_2 != count.end()) {
                        
                    }else{
                        int sum = it.first.first + it.first.second;
                        count.insert({{it.first.first, it.first.second}, sum}); 
                    }
                }
            }else{
                 int sum = it.first.first + it.first.second;
                 count.insert({{it.first.first, it.first.second}, sum}); 
            }
        }
    }
    cout << "zero: " << endl;
    for(auto it: mapArr){
        if(it.second == 0){
            auto opposite = mapArr.find({it.first.second, it.first.first});

            if(opposite->second == 0){
                cout << "(" << it.first.first << ", " << it.first.second << "): " << it.second << endl;
            }
        }
    }
    cout << endl;
    cout << "Answer: " << endl;
    for(auto it: count){
        cout << it.first.first << " " << it.first.second << " " << it.second << endl;
    }
    cout << "count is: " << count.size() << endl;

   
    return 0;

}