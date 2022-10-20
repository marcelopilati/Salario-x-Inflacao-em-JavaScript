import input from 'readline-sync';

let salario_minimo = [
    {Ano: 2010, Salario: 510.00 },
    {Ano: 2011, Salario: 545.00 },
    {Ano: 2012, Salario: 622.00 },
    {Ano: 2013, Salario: 678.00 },
    {Ano: 2014, Salario: 724.00 },
    {Ano: 2015, Salario: 788.00 },
    {Ano: 2016, Salario: 880.00 },
    {Ano: 2017, Salario: 937.00 },
    {Ano: 2018, Salario: 954.00 },
    {Ano: 2019, Salario: 998.00 },
    {Ano: 2020, Salario: 1045.00 },
    {Ano: 2021, Salario: 1100.00 },
];

let inflacao = [
    {Ano: 2010, Inflacao: 5.91},
    {Ano: 2011, Inflacao: 6.50},
    {Ano: 2012, Inflacao: 5.84},
    {Ano: 2013, Inflacao: 5.91},
    {Ano: 2014, Inflacao: 6.41},
    {Ano: 2015, Inflacao: 10.67},
    {Ano: 2016, Inflacao: 6.29},
    {Ano: 2017, Inflacao: 2.95},
    {Ano: 2018, Inflacao: 3.75},
    {Ano: 2019, Inflacao: 4.31},
    {Ano: 2020, Inflacao: 4.52},
    {Ano: 2021, Inflacao: 10.06}
];



console.log("Escolha uma das alternativas: ");

console.log("1 - Listar os salarios minimos de 2010 a 2020");
console.log("2 - Listar o indice IPCA de 2010 a 2020");
console.log("3 - Comparacao entre o salario e o indice IPCA");

let alternativa = input.question("Digite o numero de sua escolha: \n");
console.log("Opcao Escolhida: " + alternativa + "\n\n");

alternativa = Number(alternativa);


switch(alternativa){
   
    case 1:
        let contador = 0;
        while(contador <= salario_minimo.length-1){
            let ano = salario_minimo[contador].Ano;
            let salario = salario_minimo[contador].Salario;

            console.log("Ano:  " + ano);
            console.log("Salario Minimo: R$" + salario + ",00  \n\n");
            contador++;
    }
    break

    case 2:
        let contador_a = 0; 
        while(contador_a <= inflacao.length-1) {
            let ano = inflacao[contador_a].Ano;
            let inflacao_ipca = inflacao[contador_a].Inflacao;
            console.log("Ano: " + ano);
            console.log("Inflacao IPCA: " + inflacao_ipca + "% \n\n");
            contador_a++;
    }
    break

    case 3:
        let contador_b = 0;
        while(contador_b <= salario_minimo.length-1) {
            let ano = salario_minimo[contador_b].Ano;
            let salario = salario_minimo[contador_b].Salario;
            let crescimento;

            if(contador_b > 0){
            let salario_anterior = salario_minimo[contador_b - 1].Salario;
            let diferenca = salario - salario_anterior;
            crescimento = (diferenca / salario_anterior) * 100;
            crescimento.toFixed(2);
            }
            else{
                crescimento = "-";
            }

        let inflacao_ipca = inflacao[contador_b].Inflacao;
    
        console.log("Ano: " + ano);
        console.log("Salario Minimo:  R$" + salario);
        console.log("Crescimento Anual: " + crescimento + "%");
        console.log("Inflacao IPCA: " + inflacao_ipca + "% \n\n");
        contador_b++;
    }
    break

    default:
        (alternativa != 1 && alternativa != 2 && alternativa != 3)
        console.log("Opcao Invalida!!");
}
