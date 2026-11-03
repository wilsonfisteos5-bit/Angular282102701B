import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserUsageChart } from '../browser-usage-chart/browser-usage-chart';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { OrderSparkline } from '../order-sparkline/order-sparkline';
import { SalesChart } from '../sales-chart/sales-chart';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  imports: [Sidebar, Header, Footer, RouterModule, SalesChart, OrderSparkline, BrowserUsageChart],
  selector: 'app-dashboard2',
  styleUrl: './dashboard2.css',
  templateUrl: './dashboard2.html',
})
export class Dashboard2 {}
