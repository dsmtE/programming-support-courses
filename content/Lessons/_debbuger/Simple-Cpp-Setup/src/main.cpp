#include <iostream>

uint fib(const uint x) {
    if(x <= 1)  {
        return x;
    }else {
        return fib(x-1) + fib(x-2);
    }
}

int main() {
    uint x = 0;

    std::cout << "Enter the number of terms of series : ";
    std::cin >> x;

    std::cout << std::endl << "Fibonnaci Series : " << std::endl;
    for (size_t i = 0; i < static_cast<size_t>(x); i++) {
        std::cout << " " << fib(i);
    }
    std::cout << std::endl;

    return 0;
}