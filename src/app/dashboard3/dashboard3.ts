import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserUsageChart } from '../browser-usage-chart/browser-usage-chart';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { OrderSparkline } from '../order-sparkline/order-sparkline';
import { SalesChart } from '../sales-chart/sales-chart';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  imports: [Footer, Header, RouterModule, Sidebar, SalesChart, OrderSparkline, BrowserUsageChart],
  selector: 'app-dashboard3',
  styleUrl: './dashboard3.css',
  templateUrl: './dashboard3.html',
})
export class Dashboard3 {}
