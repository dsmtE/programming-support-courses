#include <iostream>

float GetRandomFloatBetween(const float low, const float high) {
    float random01 = static_cast<float>(rand()) / RAND_MAX;
    return low + random01 * high;
}

float GetPriceExclTax(const float pricePerKilogram, const float weigth) {
    return pricePerKilogram*weigth;
}

float GetTax() { return GetRandomFloatBetween(0.1f, 0.2f); }

float GetTaxThreshold() { return GetRandomFloatBetween(5.0f, 10.0f); }

float GetPricePerKilo() { return GetRandomFloatBetween(12.0f, 15.0f); }

int main() {
    // Providing a seed value
	std::srand((unsigned) time(NULL));

    float tax = 0.0f;
    float priceInclTax = 0.0f;
    float priceExclTax = 0.0f;
    float weigth = 0.0f;

    float pricePerKilogram = GetPricePerKilo();

    std::cout << "the product costs " << pricePerKilogram << "euros/kg" << std::endl;
    std::cout << "How much do you want to buy (in kg): ";
    std::cin >> weigth;
    std::cout << std::endl;

    float taxThreshold = GetTaxThreshold();

    if(priceExclTax = GetPriceExclTax(pricePerKilogram, weigth) >= taxThreshold)
        tax = GetTax()*priceExclTax;

    priceInclTax = priceExclTax + tax;
    std::cout << "You will buy " << weigth << "kg for a total of " << priceInclTax << " euros (including " << tax << " euros taxes)" << std::endl;

    return 0;
}