import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrMsgInvalidComponent } from './err-msg-invalid.component';

describe('ErrMsgInvalidComponent', () => {
  let component: ErrMsgInvalidComponent;
  let fixture: ComponentFixture<ErrMsgInvalidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrMsgInvalidComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrMsgInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
