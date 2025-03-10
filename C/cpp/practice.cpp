#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> v(5, 2);
    vector<int> v1 = {1, 2};
    for(auto i = v1.begin(); i < v1.end(); i++){
        cout << *i << " " << endl;
    }

    for(auto it: v1){
        cout << it << endl;
    }

}