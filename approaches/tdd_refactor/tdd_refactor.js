export function handleTransactionData(d) {
    if (!d) return;
  
    let x = 0;
    let y = false;
    let z = [];
  
    for (let i = 0; i < d.length; i++) {
      if (!d[i].a || !d[i].b || typeof d[i].c !== 'number') {
        continue;
      }
  
      if (d[i].t === 'credit') {
        if (d[i].c > 0) {
          x += d[i].c;
          if (d[i].p) {
            if (d[i].p.method === 'paypal') {
              x -= 1;
            } else if (d[i].p.method === 'card') {
              x -= 2;
            }
          }
        }
      } else if (d[i].t === 'debit') {
        if (d[i].c < 0) {
          x += d[i].c;
          if (d[i].f) {
            if (d[i].f.type === 'overdraft') {
              x -= 35;
            } else if (d[i].f.type === 'transfer') {
              x -= 10;
            }
          }
        }
      }
  
      if (d[i].s) {
        if (d[i].s.alert) {
          y = true;
        }
      }
  
      if (d[i].q && d[i].q.length > 0) {
        for (let j = 0; j < d[i].q.length; j++) {
          if (d[i].q[j].u && d[i].q[j].v > 100) {
            z.push(d[i].q[j].u);
          }
        }
      }
  
      if (d[i].m && d[i].m.length > 0) {
        for (let k = 0; k < d[i].m.length; k++) {
          if (d[i].m[k].note && d[i].m[k].note.includes("refund")) {
            y = true;
          }
        }
      }
    }
  
    return {
      b: x,
      a: y,
      c: z
    };
  }