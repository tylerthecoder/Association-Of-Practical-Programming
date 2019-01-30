import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { filter, take } from 'rxjs/operators';
interface IMessage {
  board: string;
  text: string;
}

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {
  @Input() board !: string;

  public $messages = this.socket.fromEvent<IMessage[]>('allMessages');
  public $newMessage = this.socket.fromEvent<IMessage>('message');

  public text !: string;
  private messages: string[] = [];

  constructor(
    private socket: Socket,
  ) { }

  ngOnInit() {
    this.$messages.subscribe(messages => {
      console.log(this.board, messages);
      this.messages = messages.filter(message => message.board === this.board).slice(0).map(message => message.text);
    });

    this.$newMessage.pipe(
      filter(message => message.board === this.board)
    ).subscribe(message => {
      this.messages.push(message.text);
    });

    this.getAllMessage();
  }

  sendMessage() {
    this.socket.emit('newMessage', {
      board: this.board,
      text: this.text,
    });
    this.text = '';
  }

  getAllMessage() {
    this.socket.emit('getAllMessages', this.board);
  }

}
