import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailAnimalPage } from './detail-animal.page';

describe('DetailAnimalPage', () => {
  let component: DetailAnimalPage;
  let fixture: ComponentFixture<DetailAnimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
