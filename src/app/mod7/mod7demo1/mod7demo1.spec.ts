import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod7demo1 } from './mod7demo1';

describe('Mod7demo1', () => {
  let component: Mod7demo1;
  let fixture: ComponentFixture<Mod7demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod7demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod7demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
