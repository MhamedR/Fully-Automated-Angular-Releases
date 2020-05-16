import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullyAutomatedReleaseComponent } from './fully-automated-release.component';

describe('FullyAutomatedReleaseComponent', () => {
  let component: FullyAutomatedReleaseComponent;
  let fixture: ComponentFixture<FullyAutomatedReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullyAutomatedReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullyAutomatedReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
