import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CageSlideComponent } from './cage-slide/cage-slide.component';
import { MessageBoardComponent } from './message-board/message-board.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://api.tgt101.com:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CageSlideComponent,
    MessageBoardComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
