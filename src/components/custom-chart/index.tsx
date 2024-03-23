'use client';

import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { areaChartDataOptions } from './chart-layout';
import { setCoinMarketData } from '@/utils/set_coin_market_data';
import { ApexOptions } from 'apexcharts';

type CustomCharProps = {
  data: number[];
};

export const CustomChart = ({ data }: CustomCharProps) => {
  const [updateChartData, setUpdateChartData] = useState<ApexOptions['series']>(
    []
  );

  useEffect(() => {
    const dataCoin = setCoinMarketData(data);

    setUpdateChartData(dataCoin);
  }, [data]);

  return (
    <Chart
      options={areaChartDataOptions}
      series={updateChartData}
      type="area"
      width={'100%'}
      height={'100%'}
    />
  );
};
