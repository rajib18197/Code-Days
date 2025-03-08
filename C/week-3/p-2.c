#include<stdio.h>

int main(){
    int radius;
    printf("Enter the radius of the circle: ");
    scanf("%d", &radius);

    printf("Area of the circle: %.2f \n", 3.1416 * radius * radius);
    printf("Perimeter (circumference) of the circle: %.2f \n", 2 * 3.1416 * radius);
    
    return 0;
}