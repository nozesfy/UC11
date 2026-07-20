export function formatCpf(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  return digits
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
}

export function isValidCpf(cpf: string): boolean {
  const digits = cpf.replace(/\D/g, '')
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) return false
  const calc = (factor: number) =>
    [...digits.slice(0, factor - 1)].reduce((s, d, i) => s + Number(d) * (factor - i), 0)
  const rest = (sum: number) => ((sum * 10) % 11) % 10
  return (
    rest(calc(10)) === Number(digits[9]) &&
    rest(calc(11)) === Number(digits[10])
  )
}
