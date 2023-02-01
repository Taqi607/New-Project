class Counter {
    static count = 0;
  
    static inc() {
      Counter.count++;
    }
  
    toString() {
      return Counter.count;
    }
  
  }
  
  Counter.inc();
  Counter.inc();
  
  let counter = new Counter();
  let counter1 = new Counter();
  console.log(counter.toString(), counter1.toString())
  
  
  Counter.inc();
  console.log(counter.toString(), counter1.toString())