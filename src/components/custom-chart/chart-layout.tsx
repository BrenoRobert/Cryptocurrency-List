import { usdFormat } from '@/utils/usd_format';
import { ApexOptions } from 'apexcharts';

export const areaChartDataOptions: ApexOptions = {
  legend: {
    show: false,
  },
  theme: {
    mode: 'dark',
  },

  grid: {
    show: true,
    borderColor: '#aFaFaF',
  },

  chart: {
    type: 'line',

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },

  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },

  yaxis: {
    show: true,
    opposite: true,
    labels: {
      formatter: (val) => {
        return usdFormat(val);
      },
    },
  },

  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000',
    },
    theme: 'dark',
    x: {
      show: false,
    },
  },
};
