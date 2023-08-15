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
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export const imgAnimate_1 = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export const textAnimate_2 = {
  offscreen: { scale: 1.1, opacity: 0 },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export const whileHoverItem = {
  onHover: {
    scale: 1.5,
    marginTop: "10px",
    backgroundColor: "#22c55e",
    zIndex: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
