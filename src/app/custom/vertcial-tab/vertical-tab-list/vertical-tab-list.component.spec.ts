import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTabListComponent } from './vertical-tab-list.component';

describe('VerticalTabListComponent', () => {
  let component: VerticalTabListComponent;
  let fixture: ComponentFixture<VerticalTabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalTabListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
