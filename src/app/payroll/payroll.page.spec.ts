import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PayrollPage } from './payroll.page';

describe('PayrollPage', () => {
  let component: PayrollPage;
  let fixture: ComponentFixture<PayrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PayrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
