import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonileComponent } from './testimonile.component';

describe('TestimonileComponent', () => {
  let component: TestimonileComponent;
  let fixture: ComponentFixture<TestimonileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
