#include<iostream>
#include<istream>
#include<fstream>
#include<stdlib.h>
using namespace std;

void login();
void registr();
void forgot();

main(){
    int choice;
    cout<<"************ LOGIN *************";
    cout<<"1.Login";
    cout<<"\n2.Register";
    cout<<"/n3.Forgot credentials";
    cout<<"\nEnter Your Choice";
    cin>>choice;
    switch (choice)
    {
    case 1:
        login();
        break;
    case 2:
        registr();
        break;
    case 3:
        forgot();
        break;
    case 4:
        cout<<"Thanks for giving me a hope";
        break;

    default:
    cout<<"Sorry, You selected a wrong choice";
        break;
    }
}