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

    // long long n;
    // cin >> n;
    // cout << n << " ";
    // while(n != 1){
    //     if(n % 2 == 0){
    //         n /= 2;
    //     }else{
    //         n *= 3;
    //         n += 1;
    //     }
    //     cout << n << " ";
    // }
//     int n;
//     int num;
//     vector<int> v;
//     cin >> n;
//     for(int i = 1; i <= n; i++){
//         cin >> num;
//         v.push_back(num);
//     }

// int count = 0;
// for (int i = 1; i <= v.size(); i++) {
//   int k = i;
//   int final = i % 10;
//   int isSame = true;
//   while (k > 0) {
//     int rem = k % 10;
//     k = k / 10;

//     if (final == rem) {
//       final = rem;
//       continue;
//     } else {
//       isSame = false;
//       break;
//     }
//   }
//   if (isSame == false) continue;
//   for (int j = 1; j <= v[i - 1]; j++) {
//     int k = j;
//     int final1 = j % 10;
//     int isSame = true;
//     while (k > 0) {
//       int rem = k % 10;
//       k = k / 10;

//       if (final1 == rem) {
//         final1 = rem;
//         continue;
//       } else {
//         isSame = false;
//         break;
//       }
//     }
//     if (isSame == false) continue;
//     if (final == final1) {
//       count++;
//     }
//   }
// }
// cout<< count << endl;
// int t;
// cin >> t;
// while(t--){


// int n, num;
// vector<int> v;
// cin >> n;

// for(int i = 0; i < n; i++){
//   cin >> num;
//   v.push_back(num);
// }
// int min = 0;
// for(int i = 1; i < n; i++){
//   if(v[i] < v[min]){
//     min = i;
//   }
// }
// v[min] += 1;
// int product = 1;
// for(int i = 0; i < n; i++){
//   product *= v[i];
// }

// cout << product << endl;
// }

// int n, num;
// cin >> n;
// vector<int> v;

// for(int i = 0; i < n; i++){
//   cin >> num;
//   v.push_back(num);
// }
// vector<int> ans;
// ans.push_back(v[0]);

// for(int i = 1; i < n; i++){
//   int first = v[i - 1];
//   int second = v[i];

//   if(first < second && second - first != 1){
//     for(int j = first + 1; j <= second; j++){
//       ans.push_back(j);
//     }    
//   }else if(first > second && first - second != 1){
//     for(int j = first - 1; j >= second; j--){
//       ans.push_back(j);
//     }  
//   }else{
//     ans.push_back(second);
//   }
// }


// for(int i = 0; i < ans.size(); i++){
//   cout << ans[i] << " ";
// }

int n, num;
cin >> n;
vector<int> v;
vector<int> v_copy;

for(int i = 0; i < n; i++){
  cin >> num;
  v.push_back(num);
}
v_copy = v;
sort(v_copy.begin(), v_copy.end());
long long totalSum = 0;


map<int, long long> ansMap;
totalSum = 0;
for(int i = 0; i < n; i++){
  auto it = ansMap.find(v_copy[i]);
  if(it != ansMap.end()){
    totalSum += v_copy[i];
    it->second = totalSum;
  }else{
    totalSum += v_copy[i];
    ansMap.insert({v_copy[i], totalSum});
  }
}

vector<long long> ans;

for(int i = 0; i < n; i++){
  auto it = ansMap.find(v[i]);
  ans.push_back(totalSum - it->second);
}

for(int i = 0; i < n; i++){
  cout << ans[i] << " ";
}
}

