'use client';

import { ICoin } from '@/interface/ICoin';
import { CardDetail } from './card';
import { Content } from './style';
import { usdFormat } from '@/utils/usd_format';

type CardProps = {
  coin: ICoin['market_data'];
};

export function Cards({ coin }: CardProps) {
  return (
    <Content className="lg:grid sm:flex-col gap-4 content-stretch justify-stretch mt-6 items-center justify-items-center">
      <CardDetail
        title="Variação de preço em 24h"
        content={usdFormat(coin.current_price.usd)}
        percentage={coin.price_change_percentage_24h}
      />
      <CardDetail
        title="Alta / Baixa em 24h"
        content={usdFormat(coin.high_24h.usd)}
        additional={usdFormat(coin.low_24h.usd)}
      />
      <CardDetail
        title="Volume total em 24h"
        content={usdFormat(coin.total_volume.usd)}
      />
    </Content>
  );
}
