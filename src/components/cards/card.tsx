'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { percent_format } from '@/utils/percent_format';
import { TriangleDownIcon } from '@radix-ui/react-icons';

type CardDetailProps = {
  title: string;
  content: string | number;
  additional?: string | number;
  percentage?: number;
};

export function CardDetail({
  title = 'Teste',
  content,
  additional,
  percentage,
}: CardDetailProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="inline-flex">
        {content}
        {additional && ' / ' + additional}

        {percentage && (
          <div
            className={`inline-flex items-center gap-1 ml-2 text-xs ${
              percentage >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            <TriangleDownIcon className="text-xs" />
            {percent_format(Math.abs(percentage))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
