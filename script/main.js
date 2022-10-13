if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
  const subCount = document.querySelector(".sub__count")
  console.log(subCount)