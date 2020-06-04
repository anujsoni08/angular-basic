import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow'
   }

}
