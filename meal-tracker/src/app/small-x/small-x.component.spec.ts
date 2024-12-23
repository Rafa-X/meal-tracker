import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallXComponent } from './small-x.component';

describe('SmallXComponent', () => {
  let component: SmallXComponent;
  let fixture: ComponentFixture<SmallXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
