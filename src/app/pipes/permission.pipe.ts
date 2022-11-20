import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'permission'
})
export class PermissionPipe implements PipeTransform {
  transform(arg: number) {
    return arg * 10;
  }
}
