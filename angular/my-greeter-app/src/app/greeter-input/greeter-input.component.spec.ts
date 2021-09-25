import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterInputComponent } from './greeter-input.component';

describe('GreeterInputComponent', () => {
  let component: GreeterInputComponent;
  let fixture: ComponentFixture<GreeterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreeterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
