import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsComponentComponent } from './hero-details-component.component';

describe('HeroDetailsComponentComponent', () => {
  let component: HeroDetailsComponentComponent;
  let fixture: ComponentFixture<HeroDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
