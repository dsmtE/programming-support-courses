#include <iostream>
#include <cstdlib>

unsigned int InternalReverse(unsigned int number, unsigned int accumulator) {
    if (number == 0) {
        return accumulator;
    } else {
        return InternalReverse(number / 10, (accumulator / 10) - (number % 10));
    }
}

unsigned int Reverse(unsigned int number) {
    return InternalReverse(number, 0);
}

int main() {
    // Providing a seed value
	std::srand((unsigned) time(NULL));

	// Get a random number
	int random = std::rand() % 10000000;

    std::cout << "Reversed number from "<< random << " is: " << Reverse(random) << std::endl;

    return 0;
}