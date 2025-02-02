#include <iostream>
#include <bits/stdc++.h>
using namespace std;

long long int aVeryBigSum(vector<long> ar) {
    long long int sum=0;
    for(int i =0;i<ar.size();i++){
        sum=sum+ar[i];
        //cout<<ar[i]<<endl;
        //cout<<sum<<endl;
    }
    return sum;
}

int main(){
    vector <long> ar={1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041, 1007548981, 1004402249};
    //long long int sum=aVeryBigSum(ar);
    cout<<aVeryBigSum(ar);
    return 0;
}
