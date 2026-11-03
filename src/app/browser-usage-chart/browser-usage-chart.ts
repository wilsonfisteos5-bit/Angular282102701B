import { AfterViewInit, Component, ElementRef, input, OnDestroy, viewChild } from '@angular/core';
import {
  ArcElement,
  Chart,
  DoughnutController,
  Tooltip,
} from 'chart.js';

Chart.register(ArcElement, DoughnutController, Tooltip);

@Component({
  selector: 'app-browser-usage-chart',
  template: `
    <div class="chart-layout">
      <div class="chart-canvas">
        <canvas
          #chart
          role="img"
          aria-label="Donut chart showing Chrome 28%, Edge 20%, FireFox 15%, Safari 22%, Opera 11%, and IE 4%"
        ></canvas>
      </div>
      <ul class="chart-legend" aria-label="Browser usage legend">
        <li><span class="legend-dot legend-dot--chrome"></span>Chrome</li>
        <li><span class="legend-dot legend-dot--edge"></span>Edge</li>
        <li><span class="legend-dot legend-dot--firefox"></span>FireFox</li>
        <li><span class="legend-dot legend-dot--safari"></span>Safari</li>
        <li><span class="legend-dot legend-dot--opera"></span>Opera</li>
        <li><span class="legend-dot legend-dot--ie"></span>IE</li>
      </ul>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        container-type: inline-size;
      }

      .chart-layout {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 104px;
        align-items: center;
        gap: 1rem;
        height: 420px;
      }

      .chart-canvas {
        position: relative;
        width: 100%;
        height: 100%;
        min-width: 0;
      }

      canvas {
        display: block;
      }

      .chart-legend {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin: 0;
        padding: 0;
        color: var(--browser-usage-legend-color, #ced4da);
        font-size: 0.9rem;
        list-style: none;
      }

      .chart-legend li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        white-space: nowrap;
      }

      .legend-dot {
        width: 10px;
        height: 10px;
        flex: 0 0 10px;
        border-radius: 50%;
      }

      .legend-dot--chrome { background: #0d6efd; }
      .legend-dot--edge { background: #20c997; }
      .legend-dot--firefox { background: #ffc107; }
      .legend-dot--safari { background: #d63384; }
      .legend-dot--opera { background: #6f42c1; }
      .legend-dot--ie { background: #adb5bd; }

      @container (max-width: 360px) {
        .chart-layout {
          display: flex;
          height: auto;
          flex-direction: column;
          gap: 1rem;
        }

        .chart-canvas {
          width: 100%;
          max-width: 320px;
          height: auto;
          aspect-ratio: 1;
        }

        .chart-legend {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem 0.25rem;
          font-size: 0.8rem;
        }
      }
    `,
  ],
})
export class BrowserUsageChart implements AfterViewInit, OnDestroy {
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('chart');
  private chart?: Chart<'doughnut', number[], string>;
  readonly lightMode = input(false);

  ngAfterViewInit(): void {
    const lightMode = this.lightMode();

    this.chart = new Chart(this.canvas().nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Chrome', 'Edge', 'FireFox', 'Safari', 'Opera', 'IE'],
        datasets: [
          {
            data: [28, 20, 15, 22, 11, 4],
            backgroundColor: ['#0d6efd', '#20c997', '#ffc107', '#d63384', '#6f42c1', '#adb5bd'],
            borderColor: lightMode ? '#fff' : '#212529',
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
            backgroundColor: lightMode ? '#fff' : '#343a40',
            titleColor: lightMode ? '#212529' : '#f8f9fa',
            bodyColor: lightMode ? '#212529' : '#f8f9fa',
            borderColor: lightMode ? '#dee2e6' : 'rgba(255, 255, 255, 0.15)',
            borderWidth: 1,
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
