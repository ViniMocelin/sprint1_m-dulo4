import * as readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });
const arr = [];

const result = () => {
    rl.question('Digite a propriedade do CSS', (answer) => {
        if (answer == 'Sair' || answer == 'SAIR' || answer == 'sair'){
            console.log(`Your list:\n${arr.sort().join(`\n`)}`);
            return rl.close();
        } else {
            arr.push(answer);
        }
        result();
    })
}
result();