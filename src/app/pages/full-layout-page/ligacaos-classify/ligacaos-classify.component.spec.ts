import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigacaosClassifyComponent } from './ligacaos-classify.component';

describe('LigacaosClassifyComponent', () => {
  let component: LigacaosClassifyComponent;
  let fixture: ComponentFixture<LigacaosClassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LigacaosClassifyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigacaosClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
