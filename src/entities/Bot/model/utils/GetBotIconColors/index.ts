export const botColors: Record<string, string> = {
  yellow_bot: "#ffdb00",
  white_bot: "#ffffff",
  green_bot: "#5ea853",
  red_bot: "#ff1906",
  blue_bot: "#0096c7",
  orange_bot: "#ff6500",
};

export const getBotColors = (name: string): string | undefined => {
  return botColors[name];
};
