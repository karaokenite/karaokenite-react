import chalk from 'chalk';

const createLogIfTrue = (area: string) => {
    return (data: unknown) => {
        if (data) {
            console.log(`[${chalk.blue(area)}] ${data}`);
        }
    }
}

export const log = {
    connection: createLogIfTrue('Connections'),
};
