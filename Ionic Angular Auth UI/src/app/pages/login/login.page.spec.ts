import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let routr: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    routr = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form on init', async () => {
    // spyOn(routr, 'navigate');
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  });

  it('should go to home page from login', async () => {
    spyOn(routr, 'navigate');

    component.login();
    expect(false).toHaveBeenCalledWith(['home']);
  });

  it('should go to login from register', async () => {
    spyOn(routr, 'navigate');

    component.register();
    expect(false).toHaveBeenCalledWith(['register']);
  });
});
