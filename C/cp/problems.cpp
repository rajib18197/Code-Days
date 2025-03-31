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

    // int n, num;
    // cin >> n;
    // vector<int> v;
    // vector<int> v_copy;

    // for(int i = 0; i < n; i++){
    //   cin >> num;
    //   v.push_back(num);
    // }
    // v_copy = v;
    // sort(v_copy.begin(), v_copy.end());
    // long long totalSum = 0;


    // map<int, long long> ansMap;
    // totalSum = 0;
    // for(int i = 0; i < n; i++){
    //   auto it = ansMap.find(v_copy[i]);
    //   if(it != ansMap.end()){
    //     totalSum += v_copy[i];
    //     it->second = totalSum;
    //   }else{
    //     totalSum += v_copy[i];
    //     ansMap.insert({v_copy[i], totalSum});
    //   }
    // }

    // vector<long long> ans;

    // for(int i = 0; i < n; i++){
    //   auto it = ansMap.find(v[i]);
    //   ans.push_back(totalSum - it->second);
    // }

    // for(int i = 0; i < n; i++){
    //   cout << ans[i] << " ";
    // }

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
    // vector<long long> ans;
    // ans.push_back(v[0]);
    // for(int i = 1; i < n; i++){
    //     long long sub = v[i] - v[i - 1];
    //     ans.push_back(sub);
    // }

    // for(int i = 0; i < n; i++){
    //     cout << ans[i] << " ";
    // }

    // int t;
    // cin >> t;
    // while(t--){
    //     int n, k, num;
    //     cin >> n >> k;
    //     vector<int> v;

    //     for(int i = 0; i < n; i++){
    //     cin >> num;
    //     v.push_back(num);
    //     }
    //     int hasNumExist = false; 
    //     for(int i = 0; i < n; i++){
    //         if(v[i] == k){
    //             hasNumExist = true;
    //             break;
    //         }
    //     }

    //     if(hasNumExist){
    //         cout << "YES" << endl;
    //     }else{
    //         cout << "NO" << endl;
    //     }
    // }

    // int n, num;
    // cin >> n;
    // int arr[n * 4];
    // int hash[n] = {0};
    // int ans;
    // for(int i = 0; i < (n * 4) - 1; i++){
    //     cin >> num;
    //     arr[i] = num;
    //     if(hash[arr[i] - 1] == 0){
    //         hash[arr[i] - 1] = 1;
    //     }else{
    //         hash[arr[i] - 1] = hash[arr[i] - 1] + 1;
    //     }
    // }

    // for(int i = 0; i < n; i++){
    //     if(hash[i] != (n * 4) / n){
    //         ans = i + 1;
    //         break;
    //     }
    // }

    // cout << ans;

    // int n, p, q, r, s, num;
    // cin >> n >> p >> q >> r >> s;
    // int arr[n];
    // for(int i = 0; i < n; i++){
    //     cin >> num;
    //     arr[i] = num;
    // }

    // int i = p - 1, j = r - 1;
    // while(i < q && j < s){
    //     int temp = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = temp;
    //     i++;
    //     j++;
    // }
    // for(int i = 0; i < n; i++){
    //     cout << arr[i] << " ";
    // }

    // int n, m;
    // cin >> n >> m;
    // int a = -1, b = -1;
    // int i = n;
    // while(true){
    //     if(a == -1){
    //         int digit = i;
    //         int sum = 0;
    //         while(digit > 0){
    //             int rem = digit % 10;
    //             sum += rem;
    //             digit = digit / 10;
    //         }
    //         if(sum >= n){
    //             a = sum;
    //         }
    //     }else if(b == -1){
    //         int digit = i;
    //         int sum = 0;
    //         while(digit > 0){
    //             int rem = digit % 10;
    //             sum += rem;
    //             digit = digit / 10;
    //         }
    //         if(sum >= 0){
    //             b = sum;
    //         }
    //     }else{
    //         int digit = a + b;
    //         int sum = 0;
    //         while(digit > 0){
    //             int rem = digit % 10;
    //             sum += rem;
    //             digit = digit / 10;
    //         }

    //         if(sum <= m){
    //             cout << sum << endl; 
    //             cout << a << endl; 
    //             cout << b << endl; 
    //             break;
    //         }else{
    //             a = -1;
    //             b = -1;
    //         }
    //     }
    //     i++;
    // }

    int n, m;
    cin >> n >> m;
    string a = "4" + string(2229, '9');  
    string b = to_string(n - 1) + string(2228, '0') + "1";
    cout << a << endl;
    cout << b << endl;
   
    return 0;
}
