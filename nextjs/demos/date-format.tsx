import { format, formatDistanceToNow, parse, subMinutes } from 'date-fns';
import { ja } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';

const DateFormat = () => {
  const [now, setNow] = useState<Date>(new Date());
  const past = parse('2022-01-01', 'yyyy-MM-dd', new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>
        {format(now, 'yyyy/MM/dd(E) HH:mm:ss', {
          locale: ja,
        })}
      </p>
      <p>
        {format(past, 'yyyy/MM/dd')} は
        {formatDistanceToNow(past, {
          locale: ja,
          addSuffix: true,
        })}
      </p>
    </div>
  );
};

export default DateFormat;
