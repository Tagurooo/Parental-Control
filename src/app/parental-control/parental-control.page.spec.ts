import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentalControlPage } from './parental-control.page';

describe('ParentalControlPage', () => {
  let component: ParentalControlPage;
  let fixture: ComponentFixture<ParentalControlPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParentalControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
