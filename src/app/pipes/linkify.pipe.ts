import { Pipe, PipeTransform } from "@angular/core";
import linkifystr from 'linkifyjs/string'

@Pipe({ name: 'linkifystr' })

export class LinkifystrPipe implements PipeTransform {
    transform(str: string): string{
        debugger
        return str ? linkifystr(str, {target: '_system'}) : str
    }
}