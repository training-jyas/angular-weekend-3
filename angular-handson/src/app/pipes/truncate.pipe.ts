import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    'name': 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, max: number) {
        const maxLength = max || 10;
        let finalVal = value;
        if (value) {
            if (value.length > maxLength) {
                finalVal = value.slice(0, maxLength) + '...';
            }
        }
        return finalVal;
    }
}
