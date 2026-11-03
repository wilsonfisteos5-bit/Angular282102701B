import { AfterViewInit, Component, OnDestroy, ElementRef, viewChild } from '@angular/core';
import {
  ArcElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

Chart.register(
  ArcElement,
  CategoryScale,
  DoughnutController,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  Filler,
  Legend,
  Tooltip,
);

@Component({
  imports: [],
  selector: 'app-content',
  styleUrl: './content.css',
  templateUrl: './content.html',
})
export class Content implements AfterViewInit, OnDestroy {
  private readonly salesChartCanvas = viewChild.required<ElementRef<HTMLCanvasElement>>('salesChart');
  private readonly browserUsageChartCanvas = viewChild.required<ElementRef<HTMLCanvasElement>>('browserUsageChart');
  private salesChart?: Chart<'line', number[], string>;
  private browserUsageChart?: Chart<'doughnut', number[], string>;

  ngAfterViewInit(): void {
    this.salesChart = new Chart(this.salesChartCanvas().nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan '23", "Feb '23", "Mar '23", "Apr '23", "May '23", "Jun '23", "Jul '23"],
        datasets: [
          {
            label: 'Digital Goods',
            data: [65, 58, 82, 78, 54, 56, 40],
            borderColor: '#20c997',
            backgroundColor: 'rgba(32, 201, 151, 0.18)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            label: 'Electronics',
            data: [28, 48, 42, 18, 84, 28, 90],
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13, 110, 253, 0.16)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#adb5bd',
            },
          },
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              color: '#adb5bd',
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.08)',
            },
          },
        },
      },
    });

    this.browserUsageChart = new Chart(this.browserUsageChartCanvas().nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Chrome', 'Edge', 'FireFox', 'Safari', 'Opera', 'IE'],
        datasets: [
          {
            data: [28, 20, 15, 22, 11, 4],
            backgroundColor: ['#0d6efd', '#20c997', '#ffc107', '#d63384', '#6f42c1', '#adb5bd'],
            borderColor: '#212529',
            borderWidth: 2,
            hoverOffset: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '48%',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: '#343a40',
            titleColor: '#f8f9fa',
            bodyColor: '#f8f9fa',
            borderColor: 'rgba(255, 255, 255, 0.15)',
            borderWidth: 1,
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    this.salesChart?.destroy();
    this.browserUsageChart?.destroy();
  }
}
