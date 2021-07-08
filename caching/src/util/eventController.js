function eventController(...fns) {
  let timer = null;

  const throttle = () => {
    if (!timer) {
      timer = setInterval(() => {
        // setTimeout
        timer = null;
        fns.forEach((fn) => fn());
      }, 3000);
    }
  };

  return throttle;
}

export default eventController;
