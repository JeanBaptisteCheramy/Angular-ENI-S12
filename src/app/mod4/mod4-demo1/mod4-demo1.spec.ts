import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod4Demo1 } from './mod4-demo1';

describe('Mod4Demo1', () => {
  let component: Mod4Demo1;
  let fixture: ComponentFixture<Mod4Demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod4Demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod4Demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
