import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "SearchIn"
})
export class SearchPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        if (args) {
            let filter = args[0].toLocaleLowerCase();
            return filter ? value.filter(tas => tas.author.toLocaleLowerCase().indexOf(filter) != -1) : value;
        } else {
            return value;
        }
    }
}