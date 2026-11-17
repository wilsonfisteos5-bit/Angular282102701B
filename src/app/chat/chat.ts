import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

type ChatMessage = {
  id: number;
  text: string;
  time: string;
  from: 'agent' | 'contact';
};

@Component({
  imports: [ReactiveFormsModule, RouterLink, Header, Sidebar, Footer],
  selector: 'app-chat',
  styleUrl: './chat.css',
  templateUrl: './chat.html',
})
export class Chat {
  protected readonly contact = {
    name: 'Olivia Bennett',
    initials: 'OB',
    status: 'Online · typing...',
  };
  protected readonly messages = signal<ChatMessage[]>([
    { id: 1, text: 'Just finished going through it. Overall really solid — the new motion primitives are great.', time: '10:40 AM', from: 'agent' },
    { id: 2, text: 'Glad you like them. Any concerns?', time: '10:40 AM', from: 'contact' },
    { id: 3, text: 'Two small things: the success state on form inputs feels light, and the focus ring is barely visible on dark theme.', time: '10:41 AM', from: 'agent' },
    { id: 4, text: "Yeah, that focus ring issue has been bugging me too. I'll bump the contrast and ping you for another look.", time: '10:42 AM', from: 'contact' },
    { id: 5, text: 'Sounds good. Otherwise, ship it!', time: '10:42 AM', from: 'agent' },
  ]);
  protected readonly messageControl = new FormControl('', { nonNullable: true });

  protected sendMessage(event: SubmitEvent): void {
    event.preventDefault();
    const text = this.messageControl.value.trim();

    if (!text) {
      return;
    }

    const time = new Intl.DateTimeFormat('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date());

    this.messages.update((messages) => [
      ...messages,
      {
        id: messages.length + 1,
        text,
        time,
        from: 'agent',
      },
    ]);
    this.messageControl.setValue('');
  }
}
