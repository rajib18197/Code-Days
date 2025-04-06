// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int arr[9][9];

//     for(int i = 0; i < 9; i++){
//         for(int j = 0; j < 9; j++){
//             cin >> arr[i][j];
//         }
//     }

    
//     int isCorr = 1;

//     while(isCorr){

//         for(int i = 0; i < 9; i++){
//             int rows[9] = {0};
//             int isRight = 1;

//             for(int j = 0; j < 9; j++){
//                 if(rows[arr[i][j] - 1] == 0){
//                     rows[arr[i][j] - 1] = 1;
//                 }else{
//                     isRight = 0;
//                     break;
//                 }
//             }
//             if(isRight == 0){
//                 isCorr = 0;
//                 break;
//             }
//         }

//         if(isCorr == 0){
//             break;
//         }

//         for(int i = 0; i < 9; i++){
//             int cols[9] = {0}; 
//             int isRight = 1;

//             for(int j = 0; j < 9; j++){
//                 if(cols[arr[j][i] - 1] == 0){
//                     cols[arr[j][i] - 1] = 1;
//                 }else{
//                     isRight = 0;
//                     break;
//                 }
//             }
//             if(isRight == 0){
//                 isCorr = 0;
//                 break;
//             }
//         }

//         if(isCorr == 0){
//             break;
//         }

//         int first = 0;
//         int last = 0; 
//         int row_i = 0;
//         int col_i = 0;

//         while(row_i != 9){
//             int cells[9] = {0, 0, 0, 0, 0, 0, 0, 0, 0};
//             int isCorrect = 1;
//             for(int i = first + row_i; i < first + row_i + 3; i++){
//                 for(int j = col_i + last; j < col_i + last + 3; j++){
//                     if(cells[arr[i][j] - 1] == 0){
//                         cells[arr[i][j] - 1] = 1;
//                     }else{
//                         isCorrect = 0;
//                         break;
//                     }
//                 }
//                 if(isCorrect == 0){
//                     isCorr = 0;
//                     break;
//                 }
//             }

            
//             if(isCorr == 0){
//                 break;
//             }

//             if(col_i == 6){
//                 first = 0;
//                 row_i = row_i + 3;
//                 last = 0;
//                 col_i = 0;
//             }else{
//                 last = 0;
//                 col_i = col_i + 3;
//             }

//         }

//         if(isCorr == 1){
//             cout << "YES" << endl;
//             break;
//         }
//     }

//     if(isCorr == 0){
//         cout << "NO" << endl;
//     }

//     // int first = 0;
//     // int last = 0; 
//     // int row_i = 0;
//     // int col_i = 0;
//     // while(row_i != 9){
//     //     for(int i = first + row_i; i < first + row_i + 3; i++){
//     //         for(int j = col_i + last; j < col_i + last + 3; j++){
//     //             cout << arr[i][j] << " ";
//     //         }
//     //         cout << endl;
//     //     }

//     //     if(col_i == 6){
//     //         first = 0;
//     //         row_i = row_i + 3;
//     //         last = 0;
//     //         col_i = 0;
//     //     }else{
//     //         last = 0;
//     //         col_i = col_i + 3;
//     //     }
//     // }
//     return 0;


// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int n, t;
//     cin >> t;
//     while(t--){
//         cin >> n;
//         int result = n * 2;
//         cout << result << endl;
//     }
//     return 0;
// }


// #include <bits/stdc++.h>
// using namespace std;

// struct SegmentTree {
//     vector<long long> tree;
//     int n;

//     SegmentTree(vector<long long>& arr) {
//         n = arr.size();
//         tree.resize(4 * n);
//         build(0, 0, n - 1, arr);
//     }

//     void build(int node, int start, int end, vector<long long>& arr) {
//         if (start == end) {
//             tree[node] = arr[start];
//         } else {
//             int mid = (start + end) / 2;
//             build(2 * node + 1, start, mid, arr);
//             build(2 * node + 2, mid + 1, end, arr);
//             tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
//         }
//     }

//     long long range_sum(int node, int start, int end, int l, int r) {
//         if (r < start || end < l) return 0;
//         if (l <= start && end <= r) return tree[node];
//         int mid = (start + end) / 2;
//         return range_sum(2 * node + 1, start, mid, l, r) +
//                range_sum(2 * node + 2, mid + 1, end, l, r);
//     }

//     int count_valid_positions(long long x) {
//         int count = 0;
//         for (int l = 0; l < n; l++) {
//             int low = l, high = n - 1, pos = -1;
//             while (low <= high) {
//                 int mid = (low + high) / 2;
//                 if (range_sum(0, 0, n - 1, l, mid) >= x) {
//                     pos = mid;
//                     high = mid - 1;
//                 } else {
//                     low = mid + 1;
//                 }
//             }
//             if (pos != -1) count++;
//         }
//         return count;
//     }
// };


// int main(){
//     // int n, k;
//     // long long x;
//     // cin >> n >> k >> x;
//     // int a[n];
//     // long long b[n * k];

//     int n, k;
//     long long x;
//     cin >> n >> k >> x;

//     vector<long long> a(n);
//     vector<long long> b(n * k);

//     for(int i = 0; i < n; i++){
//         cin >> a[i];
//         b[i] = a[i];
//     }

//     for(int i = n; i < n * k; i++){
//         b[i] = b[i - n];
//     }
//     SegmentTree segTree(b);
//     cout << segTree.count_valid_positions(x) << endl;
//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;
//     while(t--){
//         int n;
//         cin >> n;
//         for(int i = 2; i <= n + 1; i++){
//             cout << i << " ";
//         }
//         cout << endl;
//     }
//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     string s;
//     cin >> s;

//     int firstIndex = 0;
//     int lastIndex = s.size() - 1;

//     int arr[26] = {0};

//     for(int i = 0; i < s.size(); i++){
//         arr[s[i] - 65]++;
//     }

//     multimap<int, char, greater<int> >mapCount;

//     for(int i = 0; i < 26; i++){
//         if(arr[i] == 0) {
//             continue;
//         }
//         char ch = i + 65;
//         mapCount.insert({arr[i], ch});
//     }

//     char palindrome[s.size() + 1];

//     for(int i = 0; i < s.size(); i++){
//         palindrome[i] = '!';
//     }

//     palindrome[s.size()] = '\0';
    
//     int count_of_one = 0;
//     int isPalidrome = 1;
//     char lastOdd;

//     for(auto it : mapCount){
//         if(count_of_one == 1 && it.first % 2 == 1){
//             isPalidrome = 0;
//             lastOdd = it.second;
//             break;
//         }

//         if(it.first == 1){
//             palindrome[firstIndex++] = it.second;
//             lastIndex--;
//             count_of_one++;
//             lastOdd = it.second;
//             continue;
//         }

//         if(it.first == 2){
//             palindrome[firstIndex++] = it.second;
//             palindrome[lastIndex--] = it.second;
//             continue;
//         }

//         if(it.first % 2 == 1){
//             count_of_one++;
//             lastOdd = it.second;
//         }

//         int first = it.first / 2;

//         while(first--){
//             palindrome[firstIndex++] = it.second;
//         }
        
//         int last = it.first / 2;

//         while(last--){
//             palindrome[lastIndex--] = it.second;
//         }
//     }
//     palindrome[s.size()] = '\0';

//     if(isPalidrome == 1){
//         for(int i = 0; i < s.size(); i++){
//             if(palindrome[i] == '!'){
//                 palindrome[i] = lastOdd;
//                 cout << palindrome[i];
//             }else{
//                 cout << palindrome[i];
//             }
//         }
//     }else{
//         cout << "NO SOLUTION";
//     }

//     cout << endl;

//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;
//     while(t--){
//         int n;
//         cin >> n;
//         string s;
//         cin >> s;

//         int arr[n];

//         for(int i = 0; i < s.size(); i++){
//             arr[i] = (s[i] - 97) + 1;
//         }

//         for(int i = 0; i < s.size(); i++){
//             cout << arr[i] << " ";
//         }
//         cout << endl;
//         int firstLargest = arr[0];
//         int secondLargest = -1;

//         for(int i = 0; i < n; i++){
//             if(arr[i] > firstLargest){
//                 secondLargest = firstLargest;
//                 firstLargest = arr[i];
//             }else if(arr[i] < firstLargest && arr[i] > secondLargest){
//                 secondLargest = arr[i];
//             }
//         }

//         cout << firstLargest << endl;
//         cout << secondLargest << endl;

//         int deletedChar = firstLargest;
//         long long num1 = 0;
//         int c = 0;

//         for(int i = 0; i < n; i++){
//             if(c == 0 && arr[i] == deletedChar){
//                 c++;
//                 continue;
//             }
//             num1 = num1 * 10 + arr[i];
//         }

//         deletedChar = secondLargest;
//         long long num2 = 0;
//         c = 0;

//         for(int i = 0; i < n; i++){
//             if(c == 0 && arr[i] == deletedChar){
//                 c++;
//                 continue;
//             }
//             num2 = num2 * 10 + arr[i];
//         }
        
//         string modified_s;

//         cout << num1 << " " << num2 << endl;
//         if(num1 < num2){
//             c = 0;
//             for(int i = 0; i < n; i++){
//                 if(c == 0 && arr[i] == firstLargest){
//                     c++;
//                     continue;
//                 }

//                 char ch = 97 + (arr[i] - 1);
//                 modified_s.push_back(ch);
//             }
//         }else{
//             c = 0;
//              for(int i = 0; i < n; i++){
//                 if(c == 0 && arr[i] == secondLargest){
//                     c++;
//                     continue;
//                 }

//                 char ch = 97 + (arr[i] -1);
//                 // cout << ch << endl;
//                 modified_s.push_back(ch);
//             }
//         }

//         cout << modified_s << endl;
//     }
//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     string s;
//     cin >> s;

//     int lowerFrequency[26] = {0};
//     int upperFrequency[26] = {0};

//     for(int i = 0; i < s.size(); i++){
//         if(s[i] >= 'a'){
//             lowerFrequency[s[i] - 'a']++;
//         }
//         if(s[i] >= 'A' && s[i] <= 'Z'){
//             upperFrequency[s[i] - 'A']++;
//         }
//     }
//     int count = 0;
//     int isOddExist = 0;
//     for(int i = 0; i < 26; i++){
//         if(lowerFrequency[i] % 2 == 0){
//             count += lowerFrequency[i];
//         }else{
//             count += lowerFrequency[i] - 1;
//             isOddExist = 1;
//         }

//         if(upperFrequency[i] % 2 == 0){
//             count += upperFrequency[i];
//         }else{
//             count += upperFrequency[i] - 1;
//             isOddExist = 1;
//         }
//     }

//     cout << count + isOddExist << endl;
    
//     return 0;
// }

#include <bits/stdc++.h>
using namespace std;

int main(){
    string s = "is2 an3 This1 apple4";
    vector<string> ans(10);
    string temp;
    int count = 0;
    for(int i = 0; i < s.size(); i++){
        if(s[i] == ' '){
            cout << temp << endl;
            int index = temp[temp.size() - 1] - '0';
            temp.pop_back();
            ans[index - 1] = temp;
            temp.clear();
            count++;
        }else{
            temp += s[i];
        }
    }
    if(temp.size() >= 1){
        int index = temp[temp.size() - 1] - '0';
        temp.pop_back();
        ans[index - 1] = temp;
        temp.clear();
        count++;
    }

    string str;
    for(int i = 0; i < count; i++){
        str += ans[i];
        if(i < count - 1){
            str += ' ';
        }else{
            str += '.';
        }
    }

    cout << str << endl;

    string firstName = "Jonas";
    string job = "teacher";
    int birthYear = 1991;
    int year = 2037;

    string sentence = "I'm " + firstName + ", a 30 "  + "year old " + job + '!';

    cout << sentence << endl;
    return 0;
}