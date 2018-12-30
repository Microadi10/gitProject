import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserInfoComponent } from './git-user-info.component';

describe('GitUserInfoComponent', () => {
  let component: GitUserInfoComponent;
  let fixture: ComponentFixture<GitUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  