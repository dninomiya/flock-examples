import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>();
  const isDark = theme === 'dark';

  useEffect(() => {
    setChecked(theme === 'dark');
  }, [theme]);

  if (checked === undefined) {
    return null;
  }

  return (
    <div>
      <Switch.Group as="div" className="flex items-center">
        <Switch
          checked={isDark}
          onChange={(status) => {
            setTheme(status ? 'dark' : 'light');
          }}
          className={classNames(
            isDark ? 'bg-indigo-600' : 'bg-gray-400',
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              isDark ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium cursor-pointer">
            ダークモード
          </span>
        </Switch.Label>
      </Switch.Group>
      <div className="p-10 mt-6 rounded-xl shadow dark:bg-slate-800 bg-slate-100">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nihil
          officiis itaque fuga laudantium, fugiat asperiores? Voluptatibus
          facere doloremque dicta quo similique, dolores quisquam quos
          perspiciatis ratione mollitia quibusdam quod.
        </p>
      </div>
    </div>
  );
}
