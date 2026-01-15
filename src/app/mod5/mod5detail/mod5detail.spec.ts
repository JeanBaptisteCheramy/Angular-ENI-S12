import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod5detail } from './mod5detail';

describe('Mod5detail', () => {
  let component: Mod5detail;
  let fixture: ComponentFixture<Mod5detail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod5detail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod5detail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
