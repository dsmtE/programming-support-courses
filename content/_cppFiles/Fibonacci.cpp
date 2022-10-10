#include <iostream>

unsigned int Fibonacci(unsigned int x) {
    if(x <= 1)  {
        return x;
    }else {
        return Fibonacci(x - 1) + Fibonacci(x - 2);
    }
}

int main() {
    unsigned int x = 0;

    std::cout << "Enter the number of terms of series : ";
    std::cin >> x;

    std::cout << std::endl << "Fibonnaci Series : " << std::endl;
    for (unsigned int i = 0; i < x; i++) {
        std::cout << " " << Fibonacci(i);
    }
    std::cout << std::endl;

    return 0;
}