// #include <bits/stdc++.h>
// using namespace std;

// int main(){
// 	int t;
// 	cin >> t;
// 	while(t--){
// 		int n;
// 		cin >> n;
		
// 		int identical = ceil((double) n / 2);

// 		for(int i = n; i >= 1; i--){
// 			if(i == identical){
// 				cout << 1 << " ";
// 			}else if(i == 1){
// 				cout << identical << " ";
// 			}else{
// 				cout << i << " ";
// 			}
// 		}

// 		cout << '\n';
// 	}

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// const int N = 1e5 + 9;
// int arr[N];
// long long prefix_sum[N];
// long long prefix_sum_sorted[N];

// int main(){
// 	int n;
// 	cin >> n;
// 	for(int i = 1; i <= n; i++){
// 		cin >> arr[i];
// 	}

// 	for(int i = 1; i <= n; i++){
// 		prefix_sum[i] = prefix_sum[i - 1] + arr[i];
// 	}

// 	sort(arr, arr + n + 1);

// 	for(int i = 1; i <= n; i++){
// 		prefix_sum_sorted[i] = prefix_sum_sorted[i - 1] + arr[i];	
// 	}

// 	int m;
// 	cin >> m;
// 	while(m--){
// 		int type, l, r;
// 		cin >> type >> l >> r;
 
// 		if(type == 1){ 
// 			long long sum = prefix_sum[r] - prefix_sum[l - 1];
// 			cout << sum << '\n';
// 		}else if(type == 2){
// 			long long sum = prefix_sum_sorted[r] - prefix_sum_sorted[l - 1];
// 			cout << sum << '\n';
// 		}
// 	}
// 	return 0;
// }
 
#include <bits/stdc++.h>
using namespace std;

int main(){
	int N, K;
	cin >> N >> K;
	int count = 0;
	while(N != 0){
		count++;
		N /= K;
	}

	cout << count << '\n';
	
	return 0;
}