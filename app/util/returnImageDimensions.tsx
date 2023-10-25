export function returnImageDimensions(
  imageUrl: string,
  expectedReturn: "width" | "height"
) {
  const regex = /(\d+)\/(\d+)/;
  const match = imageUrl.match(regex);

  if (match && match.length === 3) {
    const width = parseInt(match[1], 10);
    const height = parseInt(match[2], 10);
    return expectedReturn === "width" ? width : height;
  } else {
    return 200;
  }
}
