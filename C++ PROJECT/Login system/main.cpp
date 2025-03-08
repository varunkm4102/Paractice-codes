#include <iostream>
#include <fstream>
#include <string>

using namespace std;

bool IsLoggedIn()
{
    string username, password, un, pw;

    cout << "Enter Your username";
    cin >> username;
    cout << "Enter Your password";
    cin >> password;

    ifstream read("c:LOGIN SYSTEM//" + username + ".txt");

    getline(read, un);
    getline(read, pw);

    if (un == username && pw == password)
    {
        return true;
    }
    else
    {
        return false;
    }
}

int main()
{
    int choice;
    cout << "1:Register\n2:login\nYour choice: ";
    cin >> choice;

    if (choice == 1)
    {
        string username, password;

        cout << "select a username: ";
        cin >> username;
        cout << "select a password: ";
        cin >> password;
        ofstream file;
        file.open("c:LOGIN SYSTEM" + username + ".txt");
        file.close();

        main();
    }
    else if (choice == 2)
    {
        bool status = IsLoggedIn();

        if (!status)
        {
            cout << "False Login!" << endl;
            system("PAUSE");
            return 0;
        }
        else
        {
            cout << "Successful logged in!" << endl;
            system("PAUSE");
            return 1;
        }
    }
}