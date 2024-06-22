import { Component, inject } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  readonly messageService = inject(MessageService);

  messages: string[] = [];


  clearMessages(){
    this.messageService.clearMessages();
  }

}
