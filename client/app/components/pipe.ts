import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "SortIn"
})
export class SortPipe implements PipeTransform {
    transform(array: Array<string>, args: string): any {
        if (array) {
            array.sort((a: any, b: any) => {
                if (a[args] < b[args]) {
                    return -1;
                } else if (a[args] > b[args]) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return array;
        }
    }
}