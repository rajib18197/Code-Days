#include <bits/stdc++.h>
using namespace std;

int main(){
    int n, m;
    cin >> n >> m;
    string a = "4" + string(1229, '9');  
    string b = to_string(n - 1) + string(1228, '0') + "1";
    cout << a << endl;
    cout << b << endl;
   
    return 0;
}
