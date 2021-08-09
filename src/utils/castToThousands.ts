export function castToThousands(value: number) {
    if (value < 1000) {
      return value
    }

    const thousands = Math.floor(value / 1000)

    return thousands + "K"
}