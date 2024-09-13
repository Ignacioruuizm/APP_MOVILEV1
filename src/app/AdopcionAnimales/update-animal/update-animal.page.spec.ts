import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAnimalPage } from './update-animal.page';

describe('UpdateAnimalPage', () => {
  let component: UpdateAnimalPage;
  let fixture: ComponentFixture<UpdateAnimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
