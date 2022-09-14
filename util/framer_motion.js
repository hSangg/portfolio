export const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export const textAnimate_1 = {
  offscreen: { x: 200, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export const imgAnimate = {
  offscreen: { scale: 0, opacity: 0 },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export const imgAnimate_1 = {
  offscreen: { rotate: 40, opacity: 0 },
  onscreen: {
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
