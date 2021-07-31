#pragma once
#ifndef CONTAINER_H
#define CONTAINER_H

class Container {
public:
	virtual double operator[] (int s);
	virtual int size();
	virtual ~Container() {}
};

#endif // !CONTAINER_H
