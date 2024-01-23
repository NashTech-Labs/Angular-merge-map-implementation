import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
  });

  it('should create the app', () => {
    
    expect(component).toBeTruthy();
  });

  it('should handle merged observables', () => {
    spyOn(component, 'simulateHttpRequest').and.returnValue(of('Mocked result'));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.simulateHttpRequest).toHaveBeenCalledWith(1);
  });
});
