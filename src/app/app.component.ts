import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';
  number1 = 0;
  number2 = 0;
  operator = '';
  result = 0;

  calculator() {
    if (this.operator === '+'){
      this.result  = this.number1 + this.number2;
    }else if (this.operator === '-'){
      this.result  = this.number1 - this.number2;
    }else if (this.operator === '*'){
      this.result  = this.number1 * this.number2;
    }else if (this.operator === '/'){
      this.result  = this.number1 / this.number2;
    }
  }
}
