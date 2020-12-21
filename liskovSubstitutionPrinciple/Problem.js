class a {
  Message() {
    return "SUCCESS";
  }
}

class b extends a {
  Message() {
    return "ERROR";
  }
}

const A = new a();
console.log("Message of A:", A.Message());

const B = new b();
console.log("Message of B:", B.Message());
