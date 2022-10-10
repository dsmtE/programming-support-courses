#include <iostream>

int SumUntil(const int* list, unsigned int index) {
    int sum = list[0];

    for (unsigned int i = 1; i <= index; i++)
        sum += list[i];

    return sum;
}

int main() {
    unsigned int size = 0;

    std::cout << "Enter a number : ";
    std::cin >> size;

    int* values = new int[size];

    // Fill values
    for (unsigned int i = 0; i < size; i++)
        values[i] = 2 * i + 1;

    std::cout << "Sum of all values : " << SumUntil(values, size) << std::endl;

    unsigned int half_size = size / 2;
    std::cout << "Sum of half of values: " << SumUntil(values, half_size) << std::endl;

    delete[] values;
    return 0;
}