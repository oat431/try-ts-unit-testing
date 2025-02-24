import { Injectable } from '@nestjs/common';

@Injectable()
export class MathsampleService {
    checkPrimeNumber(n: number): boolean {
        if (n <= 1) {
            return false;
        }

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    isEven(n: number): boolean {
        return n % 2 === 0;
    }
}
