const Timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default Timer;
