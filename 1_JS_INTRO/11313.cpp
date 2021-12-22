#include<iostream>
using namespace std;
int main()
{int n;
cin>>n;
double arr[n];
for(int i=0;i<n;i++){

    cin >> arr[i];
}
double x;
cin >>x;

for(int i=0;i<n;i++)
{ 
if(arr[i]==x)
{
    cout<<i;
}
else if(x<arr[i]){cout<<i-1;}
/*else
{
if(x> arr[i] && x < arr[i+1])
{cout<<i+1;}
}
}*/
}}