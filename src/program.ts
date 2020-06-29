import { Command } from 'commander';

import output, { command, description} from './commands/output';

const program = new Command();

program.version('0.0.1');

program.description('My fist CLI application');

program
  .command(command)
  .description(description)
  .action(output);

export default program;