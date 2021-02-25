/* The program will imitate the steps of an ATM. The program will prompt the user to enter
his username and password. After the correct information in confirmed the program will then
prompt the user to choose which account he would like to deposit him cash into. Ather the
account is selected, the user will be asked to enter the deposit amount. The amount will
be added the to current amont and display on the screen. If any information is enter
incorrectly the program will stop and display the current placement of the code.*/


//---------------------------------------------------------------------------
// File name:   banking.cpp
// Assign ID:   xxxxxx
// Due Date:    2/24/2021
//
// Author:      Cyron Ferguson
//---------------------------------------------------------------------------




#include <iostream>
#include <iomanip>
#include <cmath>
#include <string>

using namespace std;

int main()
{


	//------------------------------------------------------------------------
//  Declare variables, ONE PER LINE, format:
//
//       data_type variable_name;  // intended use of variable.
//------------------------------------------------------------------------

	double checking = 35.00;
	double savings = 2500.00;
	string password;
	string username;
	string name = "Robert Brown";
	char account = ' ';
	int amount;
	double newchecking;
	double newsavings;


//-|----------------------------------------------------------------------
//-| 1. Welcome screen prompting the user to input Username and Passoword.
//-|----------------------------------------------------------------------

	cout << endl;

	cout << "Welcome Mr." << name << endl << endl; // Display customer's name

	cout << "***** Login *****" << endl << endl;
	cout << "***** Login Attempts (1) *****" << endl << endl;


	cout << "Please Enter Username:   ";
	getline(cin, username); // Get full username and store in username.

	cout << "Please Enter Password:   ";
	getline(cin, password); // Get full password and store in password.




	//-|----------------------------------------------------------------------
	//-| 2. If Statement that checks of the Username and Password is correct.
	//-|----------------------------------------------------------------------


	if ((username != "rbrown") && (password != "blue123"))
	{


		cout << endl << endl;
		cout << "***** Incorrect Username or Password *****" << endl << endl;
		cout << "***** Account Closed *****" << endl << endl;
		cout << "***** Account Attempts left (0) *****" << endl << endl;

		cout << "***** Transaction Details *****" << endl << endl;

		cout << "Ending Balance" << endl;
		cout << "Checkings Account:  $" << fixed << showpoint << setprecision(2) << checking << endl;
		cout << "Saving Account:     $" << fixed << showpoint << setprecision(2) << savings << endl << endl;

		cout << "Thank You! Have a nice day! See you soon!" << endl;


	}
	else if  ((username == "rbrown") && (password == "blue123"))
	{
		//After Gaining access in the bank account. Display the prompt to screen.

		cout << endl << endl;
		cout << "***** Access Granted *****" << endl << endl;

		cout << "Account Summary" << endl << endl;


		cout << "Checking Account:  $ " << "******" << endl;

		cout << "Savings Account:   $ " << "******" << endl << endl;

		// Ask the user of what account and give the choice savings or checking.

		cout << "Which account would you like to deposit cash into today? " << endl;
		cout << "Checking Account <> Enter lowercase c: " << endl;
		cout << "Savings Account <> Enter lowercase s: " << endl;
		cin >> account; //Store the letter c or s in account.
		cout << endl;



		//-|----------------------------------------------------------------------
		//-| 3. Switch state that directs the user to a specific account.
		//-|----------------------------------------------------------------------


		switch (account)
		{
		case 'c': //If Checking is chosen.


					//Access to Checking Account

			cout << "Welcome to your Checking Account " << endl;

			cout << "Checking Account:   $" << fixed << showpoint << setprecision(2) << checking << endl << endl;

			cout << "Enter the amount that you would like to deposit.  (NO COINS ACCEPTED): $";
			cin >> amount; // Store the amount of deposited cash in to amount.

			cout << endl;

			if (amount < 0)
			{
				amount = 0;
				cout << "Cash value was less than $1. Amount set to $0" << endl;

			}


			newchecking = (checking + amount); // Calculate the correct value for the added funds

			cout << endl;

			// Final output for transaction detail where the customer sees the final balances.
			cout << "***** Transaction Details *****" << endl << endl;

			cout << "Checking Account " << endl << endl;

			cout << "Initial Balance: $" << checking << endl;
			cout << "Deposit Balance: $" << fixed << showpoint << setprecision(2) << amount << endl;
			cout << "Final Balance:   $" << fixed << showpoint << setprecision(2) << newchecking << endl << endl;

			cout << "Ending Balance" << endl;
			cout << "Checkings Account: $" << fixed << showpoint << setprecision(2) << newchecking << endl;
			cout << "Saving Account:    $" << fixed << showpoint << setprecision(2) << savings << endl;

			cout << "Thank You! Have a nice day! See you soon!" << endl;

			break; //Break the current case


		case 's': //If Savings is chosen.


				 //Access to Checking Account

			cout << "Welcome to your Savings Account " << endl;

			cout << "Saving Account:   $" << fixed << showpoint << setprecision(2) << savings << endl << endl;

			cout << "Enter the amount that you would like to deposit.  (NO COINS ACCEPTED): $";
			cin >> amount; // Store the amount of deposited cash in to amount.

			cout << endl;

			if (amount < 0)
			{
				amount = 0;
				cout << "Cash value was less than $1. Amount set to $0" << endl;
			}


			newsavings = (savings + amount); // Calculate the correct value for the added funds

			cout << endl;

			// Final output for transaction detail where the customer sees the final balances.
			cout << "***** Transaction Details *****" << endl << endl;

			cout << "Savings Account " << endl << endl;

			cout << "Initial Balance: $" << fixed << showpoint << setprecision(2) << savings << endl;
			cout << "Deposit Balance: $" << fixed << showpoint << setprecision(2) << amount << endl;
			cout << "Final Balance:   $" << fixed << showpoint << setprecision(2) << newsavings << endl << endl;

			cout << "Ending Balance" << endl;
			cout << "Checkings Account:  $" << fixed << showpoint << setprecision(2) << checking << endl;
			cout << "Saving Account:     $" << fixed << showpoint << setprecision(2) << newsavings << endl << endl;

			cout << "Thank You! Have a nice day! See you soon!" << endl;

			break; //Break the current case



		default:


				cout << endl << endl;
			cout << "***** Incorrect choice of letter. *****" << endl << endl;

			cout << "***** Account Closed *****" << endl << endl;

			cout << "***** Account Attempts left (0) *****" << endl << endl;

			cout << "***** Transaction Details *****" << endl << endl;

			cout << "Ending Balance" << endl;
			cout << "Checkings Account:  $" << fixed << showpoint << setprecision(2) << checking << endl;
			cout << "Saving Account:     $" << fixed << showpoint << setprecision(2) << savings << endl << endl;

			cout << "Thank You! Have a nice day! See you soon!" << endl;
		}


	}
	else
	{

    }

	return 0;
}
