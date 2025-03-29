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
    int n;
    int num;
    vector<int> v;
    cin >> n;
    for(int i = 1; i <= n; i++){
        cin >> num;
        v.push_back(num);
    }

int count = 0;
for (int i = 1; i <= v.size(); i++) {
  int k = i;
  int final = i % 10;
  int isSame = true;
  while (k > 0) {
    int rem = k % 10;
    k = k / 10;

    if (final == rem) {
      final = rem;
      continue;
    } else {
      isSame = false;
      break;
    }
  }
  if (isSame == false) continue;
  for (int j = 1; j <= v[i - 1]; j++) {
    int k = j;
    int final1 = j % 10;
    int isSame = true;
    while (k > 0) {
      int rem = k % 10;
      k = k / 10;

      if (final1 == rem) {
        final1 = rem;
        continue;
      } else {
        isSame = false;
        break;
      }
    }
    if (isSame == false) continue;
    if (final == final1) {
      count++;
    }
  }
}
cout<< count << endl;

}

