import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainChattingAppRoutingModule } from './main-chatting-app-routing.module';
import { MainChattingAppComponent } from './main-chatting-app.component';
import { ChatNavComponent } from './chat-nav/chat-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LaptopAppComponent } from './laptop-app/laptop-app.component';
import { QuestionComponent } from './laptop-app/question/question.component';
import { AnswerComponent } from './laptop-app/answer/answer.component';
import { InputQuestionComponent } from './input-question/input-question.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PhoneApplicationComponent } from './phone-application/phone-application.component';
import { MobileInputFieldComponent } from './mobile-input-field/mobile-input-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainChattingAppComponent,
    ChatNavComponent,
    LaptopAppComponent,
    QuestionComponent,
    AnswerComponent,
    InputQuestionComponent,
    PhoneApplicationComponent,
    MobileInputFieldComponent,
  ],
  imports: [
    CommonModule,
    MainChattingAppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class MainChattingAppModule {}
