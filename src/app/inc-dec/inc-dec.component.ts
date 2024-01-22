import { Component } from '@angular/core';

@Component({
  selector: 'app-inc-dec',
  templateUrl: './inc-dec.component.html',
  styleUrl: './inc-dec.component.css'
})
export class IncDecComponent 
{
  value = 0;

  getIncrement()
  {
    return this.value++;
  }
  getReset()
  {
    return this.value=0;
  }
  getDecrement()
  {
    return this.value--;
  }
}
