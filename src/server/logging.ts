import chalk from "chalk";

export type Area = string | string[];

const colors = [chalk.blue, chalk.cyan, chalk.green];

const formatArea = (area: Area, index: number) => {
  const [label, body] =
    typeof area === "string"
      ? ["", area]
      : [`${chalk.gray(area[0])} `, area[1]];

  return `[${label}${colors[index](body)}]`;
};

export const createLogger = (...areas: Area[]) => {
  function logger(data: unknown) {
    if (!data) {
      return;
    }

    console.log(`${areas.map(formatArea).join(" ")} ${data}`);
  }

  logger.within = (...additionalAreas: Area[]) =>
    createLogger(...areas, ...additionalAreas);

  return logger;
};

export type Logger = ReturnType<typeof createLogger>;
