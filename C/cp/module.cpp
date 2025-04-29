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

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     string s = "is2 an3 This1 apple4";
//     vector<string> ans(10);
//     string temp;
//     int count = 0;
//     for(int i = 0; i < s.size(); i++){
//         if(s[i] == ' '){
//             cout << temp << endl;
//             int index = temp[temp.size() - 1] - '0';
//             temp.pop_back();
//             ans[index - 1] = temp;
//             temp.clear();
//             count++;
//         }else{
//             temp += s[i];
//         }
//     }
//     if(temp.size() >= 1){
//         int index = temp[temp.size() - 1] - '0';
//         temp.pop_back();
//         ans[index - 1] = temp;
//         temp.clear();
//         count++;
//     }

//     string str;
//     for(int i = 0; i < count; i++){
//         str += ans[i];
//         if(i < count - 1){
//             str += ' ';
//         }else{
//             str += '.';
//         }
//     }

//     cout << str << endl;

//     string firstName = "Jonas";
//     string job = "teacher";
//     int birthYear = 1991;
//     int year = 2037;

//     string sentence = "I'm " + firstName + ", a 30 "  + "year old " + job + '!';

//     cout << sentence << endl;
//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;
    
//     while(t--){
//         char arr[10][10];

//         for(int i = 0; i < 10; i++){
//             for(int j = 0; j < 10; j++){
//                 cin >> arr[i][j];
//             }
//         }

//         int points = 0;
//         int ans[10][10];

//         for(int i = 0; i < 5; i++){    
//             for(int j = i; j < 10 - i; j++){      
//                 ans[i][j] = i + 1;
//             }

//             for(int j = i; j < 10 - i; j++){      
//                 ans[j][i] = i + 1;
//             }

//             for(int j = i; j < 10 - i; j++){      
//                 ans[j][9 - i] = i + 1;
//             }

//             for(int j = i; j < 10 - i; j++){      
//                 ans[9 - i][j] = i + 1;
//             }
//         }

//         for(int i = 0; i < 10; i++){
//             for(int j = 0; j < 10; j++){
//                 if(arr[i][j] == 'X'){
//                     points += ans[i][j];
//                 }
//             }
//         }
//         cout << points << endl;
//     }
//     return 0;   
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;
//     while(t--){
//         char s[4];
//         cin >> s;
//         int isCorrect = 1;

//         for(int i = 0; i < 3; i++){
//             if(i == 0 && (s[i] == 'Y' || s[i] == 'y')){
//                 continue;
//             }else if(i == 1 && (s[i] == 'E' || s[i] == 'e')){
//                 continue;
//             } else if(i == 2 && (s[i] == 'S' || s[i] == 's')){
//                 continue;
//             }else{
//                 isCorrect = 0;
//                 break;
//             }
//         }

//         if(isCorrect == 1){
//             cout << "YES" << endl;
//         }else{
//             cout << "NO" << endl;
//         }
//     }
//     return 0;
// }


// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     char s[101];
//     int i;
//     for(i = 0; i < 100; i++){
//         int ch = getchar();

//         if(ch == '\n'){
//             break;
//         }

//         s[i] = ch;
//     }

//     s[i - 1] = '4';
//     s[i] = '\0';

//     cout << s << endl;
//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     char s[101];
//     int i;
//     for(i = 0; i < 100; i++){
//         int ch = getchar();

//         if(ch == '\n'){
//             break;
//         }

//         s[i] = ch;
//     }
    
//     s[i] = '\0';
    
//     char modified_s[202];
//     int k = 0;
//     for(int j = 0; j < i; j++){
//         modified_s[k] = s[j];
//         modified_s[k + 1] = 32;
//         k += 2;
//         // cout << s[j] << " ";
//     }

//     cout << modified_s << endl;

//     return 0;
// }


// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;

//     while(t--){
//         char s[4];
//         cin >> s;
        
//         int operations_needed = 0;

//         for(int i = 0; i < 3; i++){
//             if(s[i] - 97 != i){
//                 operations_needed++;
//             }
//         }

//         if(operations_needed <= 2){
//             cout << "YES" << endl;
//         }else{
//             cout << "NO" << endl;
//         }
//     }

//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;

//     while(t--){
//         char grid[3][4];
        
//         for(int row = 0; row < 3; row++){
//             for(int col = 0; col < 3; col++){
//                 cin >> grid[row][col];
//             }
//         }
        
//         char replaceChar;

//         for(int row = 0; row < 3; row++){
//             int hash[3] = {0};
            
//             for(int col = 0; col < 3; col++){
//                 hash[grid[row][col] - 65]++;
//             }

//             for(int i = 0; i < 3; i++){
//                 if(hash[i] == 0){
//                     replaceChar = 65 + i;
//                     break;
//                 }
//             }
//         }

//         cout << replaceChar << endl;
//     }
//     return 0;
// }

// #include <bits/stdc++.h>

// using namespace std;

// int main(){
//     char s[17];
//     cin >> s;
//     int isCorrect = 1;
//     for(int i = 2; i <= 16; i+= 2){
//         if(s[i - 1] != '0'){
//             isCorrect = 0;
//             break;
//         }
//     }

//     if(isCorrect == 1){
//         cout << "Yes" << endl;
//     }else{
//         cout << "No" << endl;
//     }

//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int n;
//     cin >> n;
//     int lastDigit = -1;

//     while(n > 0){
//         int rem = n % 10;
//         if(lastDigit == -1){
//             lastDigit = rem;
//         }else if(lastDigit < rem){
//             lastDigit = rem;
//         }else{
//             lastDigit = -2;
//             break;
//         }
//         n = n / 10;
//     }

//     if(lastDigit == -2){
//         cout << "No" << endl;
//     }else{
//         cout << "Yes" << endl;
//     }

//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     char n[100];
//     cin >> n;
//     int len = strlen(n);
//     int k = 0;
    
//     for(int i = 0; i < len; i++){
//         int digit = n[i] - '0';
        
//         if(digit <= 5){
//             if(digit == 0){
//                 digit = 9;
//             }else{
//                 digit = 10 - digit;
//             }
//             n[i] = '0' + digit;
//             k++;
//             break;
//         }
//     }

//     if(k == 0){
//         for(int i = len - 1; i >= 0; i--){
//             int digit = n[i] - '0';
//             n[i] = '0' + (10 - digit);
//             k++;
//             break;
//         }
//     }

//     cout << n << endl;

//     return 0;
// }


// #include <bits/stdc++.h>
// using namespace std;

// enum class Color {
//     UNCOLORED = -1,
//     COLORED_A = 0,
//     COLORED_B = 1,
// }

// bool isBipartiteGraphBFS(int startingNode, vector<vector<int>>& adj,
//                              vector<Color>& colors) {
//     queue<int> q;
//     q.push(startingNode);
//     colors[startingNode] = Color::COLORED_A;

//     while (!q.empty()) {
//         int node = q.front();
//         q.pop();

//         for (int i = 0; i < adj[node].size(); i++) {
//             int neighbourNode = adj[node][i];
//             if (colors[neighbourNode] == Color::UNCOLORED) {
//                 colors[neighbourNode] = colors[node] == Color::COLORED_B
//                                             ? Color::COLORED_A
//                                             : Color::COLORED_B;
//                 q.push(neighbourNode);
//             } else {
//                 if (colors[neighbourNode] == colors[node]) {
//                     return 0;
//                 }
//             }
//         }
//     }

//     return 1;
// }

// int main(){
//     vector<vector<int> adj = {{1,2,3},{0,2},{0,1,3},{0,2}};
//     vector<Color> colors(adj.size(), Color::UNCOLORED);
    
//     bool isBipartite = 1;

//     for(int i = 0; i < adj.size(); i++){
//         if(colors[i] == Color::UNCOLORED){
//             bool isBipartiteGraph = isBipartiteGraphBFS(i, adj, colors);
//             if(!isBipartiteGraph) {
//                 isBipartite = 0;
//                 break;
//             }
//         }
//     }

//     if(!isBipartite){
//         cout << "Graph is not bipartite" << endl;
//     }else{
//         cout << "Graph is a bipartite" << endl;
//     }
//     return 1;
// }

// #include <stdio.h>
// #include <stdlib.h>

// int main() {
//     const char *sourceString = "Manual String";
//     int length = 0;

//     // Calculate the length of the source string
//     while (sourceString[length] != '\0') {
//         length++;
//     }

//     // Allocate memory on the heap (length + 1 for the null terminator)
//     char *heapCharArray = (char *)malloc(sizeof(char) * (length + 1));

//     if (heapCharArray == NULL) {
//         fprintf(stderr, "Memory allocation failed!\n");
//         return 1;
//     }

//     // Manually copy the characters from sourceString to heapCharArray
//     for (int i = 0; i < length; i++) {
//         heapCharArray[i] = sourceString[i];
//     }

//     // Add the null terminator at the end
//     heapCharArray[length] = '\0';

//     printf("String in heap: %s\n", heapCharArray);

//     // Modify the string in the heap
//     if (length > 0) {
//         heapCharArray[0] = 'j';
//     }
//     printf("Modified string in heap: %s\n", heapCharArray);

//     // Free the allocated memory
//     free(heapCharArray);
//     heapCharArray = NULL;

//     return 0;
// }


// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;
//     cin.ignore();

//     while(t--){
//         string str;

//         getline(cin, str);

//         vector<string> arr;
//         string word;
//         for(int i = 0; i < str.length(); i++){
//             if(str[i] == 32){
//                 arr.push_back(word);
//                 word.erase();
//             }else{
//                 word += str[i];
//             }
//         }

//         string ans;
//         arr.push_back(word);
//         word.erase();

//         for(int i = 0; i < arr.size(); i++){
//             ans+= arr[i][0];
//         }

//         cout << ans << endl;
//     }
// }


// #include <bits/stdc++.h>
// using namespace std;

// int main(){
//     int t;
//     cin >> t;

//     while(t--){
//         int n;
//         cin >> n;
//         vector<int> nums;
//         map<int, int> freq;
//         int max = -9999;
//         for(int i = 0; i < n; i++){
//             for(int j = 0; j < n; j++){
//                 int a;
//                 cin >> a;
//                 if(a > max){
//                     max = a;
//                 }

//                 if(freq.find(a) != freq.end()){
//                     continue;
//                 }else{
//                     nums.push_back(a);
//                     freq.insert({a, 1});
//                 }
//             }
//         }

//         int sum = 0;

//         for(int i = 0; i < nums.size(); i++){
//             sum += nums[i];
//         }

//         int totalSum = 0;

//         for(int i = 1; i <= max; i++){
//             totalSum += i;
//         }

//         int absentNum = totalSum - sum;
//         if(absentNum == 0){
//             nums.insert(nums.begin(), max + 1);
//         }else{
//             nums.insert(nums.begin(), absentNum);   
//         }

//         for(int i = 0; i < nums.size(); i++){
//             cout << nums[i] << " ";
//         }

//         cout << endl;
//     }
// }

#include <bits/stdc++.h>
using namespace std;

int main(){
    int m;
    cin >> m;

    while(m--){
        int n;
        cin >> n;

        vector<int> arr;

        for(int i = 0; i < n; i++){
            int num;
            cin >> num;
            arr.push_back(num);
        }

        vector<int> maxElements;
        maxElements.push_back(arr[0]);

        for(int i = 1; i < n; i++){
            if(arr[i] < maxElements[i - 1]){
                maxElements.push_back(maxElements[i - 1]);
            }else{
                maxElements.push_back(arr[i]);
            }
        }

        int k = 1;
        long long prefixSum = 0;


        for(int i = n - 1; i >= 0; i--){
            if(k == 1){
                cout << maxElements[n - 1] << " ";
            }else{
                prefixSum += arr[i + 1];
                long long value = maxElements[n - k] + prefixSum;
                cout << value  << " ";
            }

            k++;
        }

        cout << endl;
    }

    return 0;
}