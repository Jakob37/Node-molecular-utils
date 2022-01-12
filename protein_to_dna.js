

const args = process.argv.slice(2);
const protSeq = args[0];

const aaToCodon = {
    F: 'TTT',
    L: 'TTA',
    I: 'ATT',
    M: 'ATG',
    V: 'GTT',
    S: 'TCT',
    P: 'CCT',
    T: 'ACT',
    A: 'GCT',
    Y: 'TAT',
    "*": 'TAA',
    H: 'CAT',
    Q: 'CAA',
    N: 'AAT',
    K: 'AAA',
    D: 'GAT',
    E: 'GAA',
    C: 'TGT',
    W: 'TGG',
    R: 'CGT',
    S: 'AGT',
    R: 'AGA',
    G: 'GGT',
}

const codons = [];
for (let i = 0; i < protSeq.length; i++) {
    const aa = protSeq[i];
    const codon = aaToCodon[aa];
    codons.push(codon);
}

console.log(codons.join(''))
