"Import-Module PSReadLine"
// 1) A partir de um array de nomes e outro de notas, crie objetos da classe Aluno com os atributos "nome" e "nota" e adicione-os a um array de objetos. Utilize o loop FOR para percorrer os arrays.
let nomes = ['Ana', 'João', 'Maria', 'Pedro', 'Lucia', 'Carlos', 'Laura'];
let notas = [8, 7, 9, 5, 6, 8, 10];
// let alunoenotaO = {}
let alunoenotaA = []
for (let i=0; i<nomes.length;i++) {
    
    alunoenotaA.push({"nome": nomes[i], "nota" : notas[i]})
    // alunoenotaA={"nome": nomes[i], "nota" : notas[i]}
}
// console.log(alunoenotaA)

//  2) Percorra o array de objetos e exiba apenas o nome dos alunos.

for (let i=0; i<nomes.length;i++) {
    console.log(alunoenotasA[i][nome])
}
// Import-Module PSReadLine


