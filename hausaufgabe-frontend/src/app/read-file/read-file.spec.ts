import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFile } from './read-file';

describe('ReadFile', () => {
  let component: ReadFile;
  let fixture: ComponentFixture<ReadFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadFile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
