#include<iostream>
#include<vector>
#include<stack>
using namespace std;

class TwoStack{
    public:
        int *arr;
        int size;
        int top1, top2;
        TwoStack(int n){
            arr = new int(n);
            size = n;
            top1 = -1;
            top2 = n;
        }

        void push1(int value){
            if(top1 + 1 == top2){
                return;
            }

            arr[++top1] = value;
        }

        void push2(int value){
            if(top2 - 1 == top1){
                return;
            }

            arr[--top2] = value;
        }

        int remove1(){
            if(top1 == -1){
                return -1;
            }
            int element = arr[top1];
            arr[top1--] = -1;
            return element;
        }

        int remove2(){
            if(top2 == size){
                return -1;
            }

            int element = arr[top2];
            arr[top2++] = -1;
            return element;
        }

        void display(){
            for(int i = 0; i < size; i++){
                cout << arr[i] << endl;
            }
        }
};

class Node{
    public:
        int index;
        Node *next;
        Node(int value){
            index = value;
            next = NULL;   
        }
};

class NStack{
    public:
        int *arr;
        stack<int> st;
        Node **top;
        int length;
        NStack(int len, int n){
            arr = new int(length);
            top = new Node*[n];
            length = len;

            for(int i = 0; i < length; i++){
                st.push(i);
            }

            for(int i = 0; i < n; i++ ){
                top[i] = NULL;
            }
        }

        int push(int value, int stackNumber){
            if(st.empty()){
                return 0;
            }
            arr[st.top()] = value;
            Node *temp = new Node(st.top());
            st.pop();
            temp->next = top[stackNumber];
            top[stackNumber] = temp;  
            return 1;
        }

        int remove(int stackNumber){
            if(top[stackNumber] == NULL){
                return -1;
            }
            st.push(top[stackNumber]->index);
            int element = arr[top[stackNumber]->index];
            top[stackNumber] = top[stackNumber]->next;
            return element;
        }

        void display(){
            for(int i = 0; i < length; i++){
                cout << arr[i] << endl;
            }
        }
};

int main(){
    NStack data(10, 3);
    cout << data.push(10, 0) << endl;
    cout << data.push(20, 1) << endl;
    cout << data.push(300, 2) << endl;
    cout << data.push(1000, 0) << endl;
    cout << data.push(30, 2) << endl;
    cout << data.push(200, 1) << endl;
    cout << data.push(3000, 2) << endl;
    cout << data.push(2000, 1) << endl;
    cout << data.push(2000, 1) << endl;
    cout << data.push(1, 0) << endl;
    cout << "Removal Start: " << endl;
    cout << data.remove(0) << endl;
    cout << data.remove(0) << endl;
    // TwoStack stack(5);
    // stack.push1(10);
    // stack.push1(20);
    // stack.push2(30);
    // stack.push2(40);
    // stack.push2(50);

    // cout << stack.remove1() << endl;
    // cout << stack.remove2() << endl;
    // cout << "State of arr: \n";
    // stack.display();
    // vector<int> v(5, 2);
    // vector<int> v1 = {1, 2};
    // for(auto i = v1.begin(); i < v1.end(); i++){
    //     cout << *i << " " << endl;
    // }

    // for(auto it: v1){
    //     cout << it << endl;
    // }

    // int a = 10;
    // int *ptr = &a;
    // int &aref = a;

    // cout << &a << endl; // 0x978fbff73c
    // cout << &aref << endl; // 0x978fbff73c
    // cout << &ptr << endl;
    // cout << ptr << endl;

    // cout << a << " " << *ptr << " " << aref << endl;

    // char ch[6] = "world";
    // string str = "study";
    // cout << ch << " " << str << str.size() << endl;

    // int age = 24;
    // int oldAge = age;
    // cout << &age << " " << &oldAge << endl;
    // age = 25;
    // cout << &age << " " << &oldAge << " " << age << " " << oldAge << endl;
}