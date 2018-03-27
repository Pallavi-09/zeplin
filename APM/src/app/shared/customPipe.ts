import { Pipe,PipeTransform } from '@angular/core';


@Pipe({
    name : "convertSpace"
})
export class convertSpaceToDash implements PipeTransform{
    transform(x:string,y:string):string{
        return  x.replace(y,'-');
    }
}