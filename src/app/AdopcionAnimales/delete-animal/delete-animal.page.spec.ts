import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAnimalPage } from './delete-animal.page';

describe('DeleteAnimalPage', () => {
  let component: DeleteAnimalPage;
  let fixture: ComponentFixture<DeleteAnimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
