import { Component, input } from '@angular/core';

const ORDER_TRENDS = [
  'M2 23 L20 12 L38 20 L56 6 L74 15 L92 24 L110 18 L128 27 L146 20 L164 28 L178 17',
  'M2 24 L20 12 L38 21 L56 16 L74 7 L92 15 L110 9 L128 12 L146 17 L164 10 L178 14',
  'M2 25 L20 14 L38 22 L56 10 L74 18 L92 24 L110 17 L128 15 L146 10 L164 22 L178 9',
  'M2 22 L20 15 L38 23 L56 11 L74 19 L92 21 L110 25 L128 22 L146 18 L164 23 L178 14',
  'M2 24 L20 6 L38 15 L56 5 L74 13 L92 19 L110 14 L128 23 L146 18 L164 13 L178 10',
  'M2 23 L20 15 L38 22 L56 5 L74 17 L92 20 L110 21 L128 14 L146 19 L164 22 L178 15',
  'M2 24 L20 11 L38 21 L56 15 L74 5 L92 14 L110 8 L128 12 L146 17 L164 10 L178 6',
] as const;

@Component({
  selector: 'app-order-sparkline',
  template: `
    <svg viewBox="0 0 180 30" preserveAspectRatio="none" aria-hidden="true">
      <path [attr.d]="trends[index()]" />
    </svg>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 180px;
        height: 30px;
      }

      svg {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      path {
        fill: none;
        stroke: #0d6efd;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
      }
    `,
  ],
  host: {
    role: 'img',
    'aria-label': 'Popularity trend',
  },
})
export class OrderSparkline {
  readonly index = input.required<number>();
  protected readonly trends = ORDER_TRENDS;
}
