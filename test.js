import sm from '.'

it('returns span with small caps', () => {
  let input = sm('JSX')
  let output = `<span class='u-smcaps'>JSX</span>`

  console.log(input)
  expect(input).toBe(output)
})


it('returns span only around small caps', () => {
  let input = sm('i love JSX')
  let output = `i love <span class='u-smcaps'>JSX</span>`

  console.log(input)
  expect(input).toBe(output)
})
