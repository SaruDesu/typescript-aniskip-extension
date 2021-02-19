import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { SkipTimeButtonProps } from '../types/components/skip_time_button_types';
import Button from './Button';

const SkipButton: React.FC<SkipTimeButtonProps> = ({
  variant,
  label,
  hidden,
  onClick,
}: SkipTimeButtonProps) => {
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const fullscreenHandler = () => {
      setFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', fullscreenHandler);

    return () =>
      document.removeEventListener('fullscreenchange', fullscreenHandler);
  }, [setFullscreen]);

  return (
    <Button
      className={classnames(
        'transition-opacity',
        'font-sans',
        'text-white',
        'bg-gray-800',
        'bg-opacity-80',
        'text-blue-100',
        'py-3',
        'absolute',
        'right-11',
        'bottom-16',
        'z-10',
        'block',
        'border',
        'border-blue-100',
        'border-opacity-80',
        { 'opacity-0': hidden, 'pointer-events-none': hidden },
        `skip-button--${variant}`,
        { [`skip-button--${variant}--fullscreen`]: fullscreen }
      )}
      label={label}
      onClick={onClick}
    />
  );
};
export default SkipButton;
