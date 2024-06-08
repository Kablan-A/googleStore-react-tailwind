function fadeIn(direction, delay, move = true) {
  return {
    hidden: {
      y: !move ? 0 : direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: !move
        ? 0
        : direction === "left"
        ? 50
        : direction === "right"
        ? -50
        : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}

export default fadeIn;
