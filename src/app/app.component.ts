import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, of, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {  
  
  ngOnInit(): void {
  const observable1: Observable<number> = of(1, 2, 3);
  const observable2: Observable<string> = of('A', 'B', 'C');

  observable1
    .pipe(
      mergeMap((numberValue: number) => {
        const httpObservable: Observable<string> = this.simulateHttpRequest(numberValue);
        return httpObservable;
      })
    )
    .subscribe((result: string) => {
      console.log(result);
    });
}

 simulateHttpRequest(value: number): Observable<string> {
  return of(`Result for ${value}`);
}
}
