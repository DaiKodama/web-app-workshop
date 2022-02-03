const a = new Date(0);

function fn(d: Date) {
  if (d === a) {
    console.log(a);
  }
}

fn(a);
