function demo(a, b, ...rest) {
    console.log(rest); // Collects all arguments after the first two
  }
  demo(1, 2, 3, 4); // [3, 4]