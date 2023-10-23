import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brother2Component } from './brother2.component';

describe('Brother2Component', () => {
  let component: Brother2Component;
  let fixture: ComponentFixture<Brother2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Brother2Component]
    });
    fixture = TestBed.createComponent(Brother2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
