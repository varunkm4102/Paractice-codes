#include <iostream>
#include <string>

class Bank {
  public:
    void deposit(double amount) {
        balance += amount;
    }
    void withdraw(double amount) {
        if (amount > balance) {
            std::cout << "Insufficient funds." << std::endl;
        } else {
            balance -= amount;
        }
    }
    double get_balance() {
        return balance;
    }
    void set_balance(double amount) {
        balance = amount;
    }
    void set_name(std::string name) {
        account_holder = name;
    }
    std::string get_name() {
        return account_holder;
    }

  private:
    double balance = 0;
    std::string account_holder;
};

int main() {
    Bank account;

    std::string name;
    std::cout &#8203;`oaicite:{"index":0,"invalid_reason":"Malformed citation << \"Enter account holder name: \";\n    std::cin >>"}`&#8203; name;
    account.set_name(name);

    double balance;
    std::cout &#8203;`oaicite:{"index":1,"invalid_reason":"Malformed citation << \"Enter initial balance: \";\n    std::cin >>"}`&#8203; balance;
    account.set_balance(balance);

    while (true) {
        std::cout << "1. Check balance" << std::endl;
        std::cout << "2. Deposit" << std::endl;
        std::cout << "3. Withdraw" << std::endl;
        std::cout << "4. Exit" &#8203;`oaicite:{"index":2,"invalid_reason":"Malformed citation << std::endl;\n\n        int choice;\n        std::cin >>"}`&#8203; choice;

        switch (choice) {
            case 1:
                std::cout << "Account holder: " << account.get_name() << std::endl;
                std::cout << "Balance: $" << account.get_balance() << std::endl;
                break;
            case 2: {
                double amount;
                std::cout &#8203;`oaicite:{"index":3,"invalid_reason":"Malformed citation << \"Enter amount to deposit: $\";\n                std::cin >>"}`&#8203; amount;
                account.deposit(amount);
                std::cout << "Deposit successful. New balance: $" << account.get_balance() << std::endl;
                break;
            }
            case 3: {
                double amount;
                std::cout &#8203;`oaicite:{"index":4,"invalid_reason":"Malformed citation << \"Enter amount to withdraw: $\";\n                std::cin >>"}`&#8203; amount;
                account.withdraw(amount);
                if (amount <= account.get_balance()) {
                    std::cout << "Withdrawal successful. New balance: $" << account.get_balance() << std::endl;
                }
                break;
            }
            case 4:
                return 0;
            default:
                std::cout << "Invalid option." << std::endl;
                break;
        }
    }

    return 0;
}
