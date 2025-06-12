import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecogComponent } from './recog.component';

describe('RecogComponent', () => {
  let component: RecogComponent;
  let fixture: ComponentFixture<RecogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
