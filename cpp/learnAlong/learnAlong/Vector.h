#pragma once
#ifndef VECTOR_H
#define VECTOR_H

#include "Container.h"

double read_and_sum(int s);

class Vector {
public:
	Vector(int s);
	Vector(std::initializer_list<double> lst);
	double& operator[](int i);
	int size();
	~Vector();
private:
	double* elem;
	int sz;
};


#endif // !VECTOR_H
