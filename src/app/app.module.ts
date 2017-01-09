import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/**
 * =============================================================================
 * Page Import
 * */

import { BasePage } from '../pages/base/base';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { ValidateUserPage } from '../pages/validate-user/validate-user';
import { ValidateUserOtpPage } from '../pages/validate-user-otp/validate-user-otp';
import { EmergencyPage } from '../pages/emergency/emergency';
import { PanicAlertPage } from '../pages/panic-alert/panic-alert';
import { HomeDashboardPage } from '../pages/home-dashboard/home-dashboard';
import { AccidentAssistPage } from '../pages/accident-assist/accident-assist';
import { ReminderServicePage } from '../pages/reminder-service/reminder-service';
import { ViewRemindersPage } from '../pages/view-reminders/view-reminders';
import { EditReminderPage } from '../pages/edit-reminder/edit-reminder';
import { SavedScreenPage } from '../pages/saved-screen/saved-screen';
import { POIListPage } from '../pages/poi-list/poi-list';
import { POIMapPage } from '../pages/poi-map/poi-map';
import { UpdateYourDetailsPage } from '../pages/update-your-details/update-your-details';
/**
 * =============================================================================
 * Service Import
 * */


 /**
  * =============================================================================
  * Other Import
  * */



@NgModule({
  declarations: [
    MyApp,
    BasePage,
    TermsAndConditionsPage,
    ValidateUserPage,
    ValidateUserOtpPage,
    EmergencyPage,
    PanicAlertPage,
    HomeDashboardPage,
    AccidentAssistPage,
    ReminderServicePage,
    ViewRemindersPage,
    EditReminderPage,
    SavedScreenPage,
    POIListPage,
    POIMapPage,
    UpdateYourDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BasePage,
    TermsAndConditionsPage,
    ValidateUserPage,
    ValidateUserOtpPage,
    EmergencyPage,
    PanicAlertPage,
    HomeDashboardPage,
    AccidentAssistPage,
    ReminderServicePage,
    ViewRemindersPage,
    EditReminderPage,
    SavedScreenPage,
    POIListPage,
    POIMapPage,
    UpdateYourDetailsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
