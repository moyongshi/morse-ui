/* eslint-disable promise/prefer-await-to-then */

const delay = (delayTime: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, delayTime)
  })
}

/**
 * 限制总超时时间、每次固定间隔的轮询
 * @param {({timeout}: {timeout: number}) => Promise<void>} asyncFn  每次请求的超时时间是不定的
 * @param {number} timeLimit  总超时时间
 * @param {number} interval   每次查询间隔
 * @returns {Promise<unknown>}
 */
function loopInLimitTime(asyncFn: ({timeout}: {timeout: number}) => Promise<void>, {timeLimit, interval}: {timeLimit: number, interval: number}) {

  return new Promise(async (resolve, reject) => {
    // 最大运行次数
    const loopCnt = Math.ceil(timeLimit / interval);
    let times = 0;

    for (let i = 0; i < loopCnt; i++) {
      handle(asyncFn({timeout: timeLimit - i * interval}))
      await delay(interval)
    }

    function handle(promise: Promise<void>) {
      times++;

      promise
        // 接口成功则直接返回
        .then(resolve)
        // 仅处理失败逻辑，当默认认定接口失败则直接返回
        .catch((err) => {
          if (times >= loopCnt) {
            reject(err)
          }
        })
    }
  })
}

export default loopInLimitTime
