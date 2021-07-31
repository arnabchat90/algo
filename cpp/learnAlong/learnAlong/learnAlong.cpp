// learnAlong.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <array>
#include "Vector.h"
using namespace std;

constexpr double square(const double a) {
    return a * a;
}

int main()
{
    double t1 { 2.2 };
    array<int,6> a1 = { 1,2,3,4,5,6 };
    int a2[10];
    for (auto i = 0; i < a1.size() ; i++) {
        a2[i] = a1[i];
    }
    cout << "This is the full array " << *(&a2 + 1) - a2 << "\n";
    const int* p = &a1[4];
    constexpr double t1quare = square(17);
    cout << a1[0] << "\n";
    const double sum = read_and_sum(3);
    cout << "The sum is - " << sum;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
