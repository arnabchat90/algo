using namespace std;
#include <iostream>
#include "Vector.h";


//constructors and destructors
Vector::Vector(int s) : elem{ new double(s) }, sz{ s } {};
Vector::Vector(std::initializer_list<double> lst) : elem{ new double(lst.size()) }, sz{ static_cast<int>(lst.size()) } {
	copy(lst.begin(), lst.end(), elem);
}
Vector::~Vector() { delete[] elem; }

double& Vector::operator[](int i) {
	if (i < 0 || size() < i) throw out_of_range{ "Vector::operator[]" };
	return elem[i];
}

int Vector::size() {
	return sz;
}


double read_and_sum(int s) {
	Vector v(s);
	Vector v1 = { 1,2,3,4,5 };
	cout << v1[2];
	for (auto i = 0; i < s; i++) {
		cin >> v[i];
	}
	double sum = 0;
	for (auto i = 0; i < s; i++) {
		sum += v[i];
	}
	return sum;
}