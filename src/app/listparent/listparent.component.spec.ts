import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListparentComponent } from './listparent.component';

describe('ListparentComponent', () => {
  let component: ListparentComponent;
  let fixture: ComponentFixture<ListparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
