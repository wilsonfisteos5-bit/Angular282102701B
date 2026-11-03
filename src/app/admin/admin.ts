import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Content } from '../content/content';

@Component({
  imports: [NgOptimizedImage, Header, Sidebar, Content],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {}
