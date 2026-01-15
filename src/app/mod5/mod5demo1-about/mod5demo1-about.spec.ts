import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod5demo1About } from './mod5demo1-about';

describe('Mod5demo1About', () => {
  let component: Mod5demo1About;
  let fixture: ComponentFixture<Mod5demo1About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod5demo1About]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod5demo1About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
