import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild} from '@angular/core';
import {AF} from '../providers/af';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

declare function require(name:string);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewChecked {
  public newMessage: string;
  public messages: FirebaseListObservable<any>;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log('Scroll to bottom failed yo!');
    }
  }

  constructor(public afService: AF) {
    this.messages = this.afService.messages;
  }

  ngOnInit() {
  }

  isYou(email) {
    return email !== this.afService.email;
  }

  isMe(email) {
    return email === this.afService.email;
  }

  sendMessage() {
    if (this.newMessage.trim() === '' || this.newMessage === null) {
      return;
    }

    const tieqViet = require('tieq-viet');

    this.afService.sendMessage(tieqViet.encode(this.newMessage));
    this.newMessage = null;
  }
}
