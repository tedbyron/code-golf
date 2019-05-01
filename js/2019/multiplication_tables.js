multiplicationTable=(a,b)=>{
  let r = Array(a).fill([...Array(b).keys()].map(c=>c+1))
  for (let i = 0; i < a; i++) {
    for (let j of r[i]) {
      j = (i + 1) * j
      console.log(j)
    }
  }

  return r
}
