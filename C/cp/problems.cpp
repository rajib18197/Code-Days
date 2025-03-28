#include <bits/stdc++.h>
using namespace std;

int main(){
    // int n, num;
    // vector<int>v;
    // cin >> n;
    // int a = n;
    // while(n > 1){
    //     cin >> num;
    //     v.push_back(num);
    //     n--;
    // }
    // int sum = 0;
    // for(int i = 0; i < static_cast<int>(v.size()); i++){
    //     sum += v[i];
    // }
    // int totalSum = 0;
    // for(int i = 1; i <= a; i++){
    //     totalSum += i;
    // }

    // cout << totalSum - sum << endl;

    long long n;
    cin >> n;
    cout << n << " ";
    while(n != 1){
        if(n % 2 == 0){
            n /= 2;
        }else{
            n *= 3;
            n += 1;
        }
        cout << n << " ";
    }
}

