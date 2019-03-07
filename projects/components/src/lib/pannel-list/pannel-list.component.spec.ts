import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PannelListComponent } from './pannel-list.component';

describe('PannelListComponent', () => {
  let component: PannelListComponent;
  let fixture: ComponentFixture<PannelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PannelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
