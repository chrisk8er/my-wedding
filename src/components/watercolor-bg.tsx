import Lottie, {
  InteractivityProps,
  LottieRefCurrentProps,
  useLottie,
  useLottieInteractivity,
} from 'lottie-react';
import React from 'react';
import WatercolorBackground from '../assets/watercolor-background.json';

const style = {
  height: '100%',
};

const options = {
  animationData: WatercolorBackground,
};
interface WatercolorBgProps {}

export const WatercolorBg = (props: WatercolorBgProps) => {
  const Lottie = useLottie(options, style);

  React.useEffect(() => {
    const wrapper = Lottie.animationContainerRef.current;
    const animationItem = Lottie.animationItem;
    const actions = [
      {
        visibility: [0, 0.8],
        type: 'seek',
        frames: [0, 55],
      },
    ];

    let elem = document.querySelector('#home-parallax');

    if (!wrapper || !animationItem) {
      return;
    }

    animationItem.stop();

    const scrollModeHandler = () => {
      let assignedSegment: number[] | null = null;

      const scrollHandler = () => {
        const currentPercent = getContainerVisibility(wrapper);
        // Find the first action that satisfies the current position conditions
        const action = actions.find(
          ({ visibility }) =>
            visibility &&
            currentPercent >= visibility[0] &&
            currentPercent <= visibility[1],
        );

        // Skip if no matching action was found!
        if (!action) {
          return;
        }

        if (
          action.type === 'seek' &&
          action.visibility &&
          action.frames.length === 2
        ) {
          // Seek: Go to a frame based on player scroll position action
          const frameToGo =
            action.frames[0] +
            Math.ceil(
              ((currentPercent - action.visibility[0]) /
                (action.visibility[1] - action.visibility[0])) *
                action.frames[1],
            );

          //! goToAndStop must be relative to the start of the current segment
          animationItem.goToAndStop(
            frameToGo - animationItem.firstFrame - 1,
            true,
          );
        }
      };

      if (elem) elem.addEventListener('scroll', scrollHandler);
      else document.addEventListener('scroll', scrollHandler);

      return () => {
        document.removeEventListener('scroll', scrollHandler);
      };
    };

    return scrollModeHandler();
  }, [Lottie.animationItem]);

  return Lottie.View;
};

// helpers
export function getContainerVisibility(container: Element): number {
  const { top, height } = container.getBoundingClientRect();

  const current = window.innerHeight - top;
  const max = window.innerHeight + height;
  return current / max;
}
