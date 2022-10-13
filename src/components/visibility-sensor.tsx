import React, { PropsWithChildren } from 'react';
import VSensor from 'react-visibility-sensor';

interface VisibilitySensorProps {
  once?: boolean;
  children: Function;
}

export const VisibilitySensor = React.forwardRef<
  typeof VSensor,
  VisibilitySensorProps
>(({ once = false, children, ...theRest }, ref) => {
  const [active, setActive] = React.useState(true);

  return (
    <VSensor
      ref={ref}
      active={active}
      onChange={(isVisible: boolean) => once && isVisible && setActive(false)}
      {...theRest}
    >
      {children}
    </VSensor>
  );
});
