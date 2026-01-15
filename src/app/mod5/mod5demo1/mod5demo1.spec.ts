import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod5demo1 } from './mod5demo1';

describe('Mod5demo1', () => {
  let component: Mod5demo1;
  let fixture: ComponentFixture<Mod5demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod5demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod5demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
