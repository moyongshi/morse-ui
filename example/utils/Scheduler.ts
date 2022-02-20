import { Image } from 'react-native'

/**
 * 阻塞队列
 * 最大同时执行数量
 */
class Scheduler {

  // 存放代执行的promise
  list: any[]
  count: number
  maxCount: number

  constructor(maxCount = 6) {
    this.list = [];
    this.count = 0;
    this.maxCount = maxCount;
  }

  // 添加任务队列
  addTask(promiseCreator) {
    return new Promise((resolve) => {
      // 添加队列
      this.list.push(() => {
        return promiseCreator()
          .then(res => {
            this.count -= 1;
            // 一个任务做完下一个任务才开始
            this.consume();
            resolve(res);
            return res;
          });
      });
      // 通知可消费
      this.consume();
    });
  }

  /**
   * 根据输入参数，添加执行队列
   * @param src
   * @returns {Promise<unknown>}
   */
  provider = (src) => {
    return this.addTask(() => new Promise((resolve, reject) => {
      Image.prefetch(src)
        .then(completed => {
          completed ? resolve(src) : reject(new Error('预加载失败！'))
          return src
        })
        .catch(err => reject(err))
    }));
  };

  consume() {
    // 最多同时做两个任务
    if (this.count < this.maxCount && this.list.length > 0) {
      this.count += 1;
      const item = this.list.shift();
      item?.();
    }
  }
}

export default Scheduler
