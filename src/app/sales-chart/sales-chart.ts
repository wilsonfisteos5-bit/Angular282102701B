import { AfterViewInit, Component, ElementRef, input, OnDestroy, viewChild } from '@angular/core';
import {
  CategoryScale,
  Chart,
  Filler,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

Chart.register(CategoryScale, Filler, LineController, LineElement, LinearScale, PointElement, Tooltip);

@Component({
  selector: 'app-sales-chart',
  template: '<canvas #chart role="img" aria-label="Sales from January to July 2023, comparing digital goods and electronics"></canvas>',
  styles: [':host { display: block; width: 100%; height: 100%; } canvas { display: block; }'],
})
export class SalesChart implements AfterViewInit, OnDestroy {
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('chart');
  private chart?: Chart<'line', number[], string>;
  readonly lightMode = input(false);

  ngAfterViewInit(): void {
    const axisColor = this.lightMode() ? '#6c757d' : '#adb5bd';

    this.chart = new Chart(this.canvas().nativeElement, {
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
          tooltip: {
            backgroundColor: this.lightMode() ? '#fff' : '#343a40',
            titleColor: this.lightMode() ? '#212529' : '#f8f9fa',
            bodyColor: this.lightMode() ? '#212529' : '#f8f9fa',
            borderColor: this.lightMode() ? '#dee2e6' : 'rgba(255, 255, 255, 0.15)',
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: axisColor,
            },
          },
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              color: axisColor,
            },
            grid: {
              color: this.lightMode() ? 'rgba(33, 37, 41, 0.08)' : 'rgba(255, 255, 255, 0.08)',
            },
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
