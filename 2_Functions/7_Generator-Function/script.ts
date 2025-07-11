function* counter(): Generator<number> {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = counter();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
