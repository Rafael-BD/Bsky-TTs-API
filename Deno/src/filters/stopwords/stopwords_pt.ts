const stopwords_pt = new Set([
    "de", "do", "da", "que", "em", "no", "na", "com", "um", "uma", 
    "os", "as", "por", "para", "se", "ao", "ele", "ela", "eles", "elas", "eu", 
    "você", "nos", "nós", "vocês", "isso", "mas", "como", "me", 
    "te", "lhe", "minha", "seu", "sua", "tão", "muito", "onde", "sobre", "sob", 
    "entre", "atrás", "diante", "detrás", "debaixo", "acima", "abaixo",
    "quando", "enquanto", "antes", "depois", "agora", "então", "pois", "porque", 
    "quem", "qual", "quanto", "quantos", "quanta", "quantas", "quais", "cujo", 
    "cuja", "cujos", "cujas", "é", "não", "mais", "dos", "foi", "das", "tem", 
    "à", "ou", "ser", "há", "já", "está", "também", "só", "pelo", "pela", "até", 
    "era", "sem", "mesmo", "aos", "ter", "seus", "nas", "esse", "estão", "tinha", 
    "foram", "essa", "num", "nem", "suas", "meu", "às", "têm", "numa", "pelos", 
    "havia", "seja", "será", "tenho", "deles", "essas", "esses", "pelas", "este", 
    "fosse", "dele", "tu", "vos", "meus", "minhas", "teu", "tua", "teus", "tuas", 
    "nosso", "nossa", "nossos", "nossas", "dela", "delas", "esta", "estes", 
    "estas", "aquele", "aquela", "aqueles", "aquelas", "isto", "aquilo", "estou", 
    "estamos", "estive", "esteve", "estivemos", "estiveram", "estava", 
    "estávamos", "estavam", "estivera", "estivéramos", "esteja", "estejamos", 
    "estejam", "estivesse", "estivéssemos", "estivessem", "estiver", "estivermos", 
    "estiverem", "hei", "havemos", "hão", "houve", "houvemos", "houveram", 
    "houvera", "houvéramos", "haja", "hajamos", "hajam", "houvesse", "houvéssemos", 
    "houvessem", "houver", "houvermos", "houverem", "houverei", "houverá", 
    "houveremos", "houverão", "houveria", "houveríamos", "houveriam", "sou", 
    "somos", "são", "éramos", "eram", "fui", "fomos", "fora", "fôramos", "sejamos", 
    "sejam", "fôssemos", "fossem", "formos", "forem", "serei", "seremos", "serão", 
    "seria", "seríamos", "seriam", "tem", "temos", "tém", "tínhamos", "tinham", 
    "tive", "teve", "tivemos", "tiveram", "tivera", "tivéramos", "tenha", 
    "tenhamos", "tenham", "tivesse", "tivéssemos", "tivessem", "tiver", "tivermos", 
    "tiverem", "terei", "terá", "teremos", "terão", "teria", "teríamos", "teriam",
    "acerca", "adeus", "ainda", "alem", "algmas", "algo", "algumas", "alguns", "ali", 
    "além", "ambas", "ambos", "ano", "anos", "aonde", "apenas", "apoio", "apontar", 
    "apos", "após", "aqui", "assim", "através", "aí", "baixo", "bastante", "bem", 
    "boa", "boas", "bom", "bons", "breve", "cada", "caminho", "catorze", "cedo", 
    "cento", "certamente", "certeza", "cima", "cinco", "coisa", "comprido", 
    "conhecido", "conselho", "contra", "contudo", "corrente", "custa", "cá", 
    "daquela", "daquelas", "daquele", "daqueles", "dar", "demais", "dentro", 
    "desligado", "dessa", "dessas", "desse", "desses", "desta", "destas", "deste", 
    "destes", "deve", "devem", "deverá", "dez", "dezanove", "dezasseis", "dezassete", 
    "dezoito", "dia", "direita", "dispoe", "dispoem", "diversa", "diversas", 
    "diversos", "diz", "dizem", "dizer", "dois", "doze", "duas", "durante", "dá", 
    "dão", "dúvida", "embora", "entao", "estado", "estar", "estará", "estava", 
    "esteja", "estejam", "estejamos", "estiveste", "estivestes", "estivéramos", 
    "estivéssemos", "estás", "exemplo", "falta", "fará", "favor", "faz", "fazeis", 
    "fazem", "fazemos", "fazer", "fazes", "fazia", "faço", "fez", "fim", "final", 
    "for", "forma", "foste", "fostes", "geral", "grande", "grandes", "grupo", "ha", 
    "hoje", "hora", "horas", "houverei", "houverem", "houveremos", "houveria", 
    "houveriam", "houvermos", "houverá", "houverão", "houveríamos", "houvesse", 
    "houvessem", "houvéramos", "houvéssemos", "iniciar", "inicio", "ir", "irá", 
    "ista", "iste", "lado", "lhe", "lhes", "ligado", "local", "logo", "longe", 
    "lugar", "lá", "maior", "maioria", "maiorias", "mal", "mediante", "meio", 
    "menor", "menos", "meses", "mesma", "mesmas", "mesmos", "mil", "momento", 
    "muitos", "máximo", "mês", "nada", "nao", "naquela", "naquelas", "naquele", 
    "naqueles", "nem", "nenhuma", "nessa", "nessas", "nesse", "nesses", "nesta", 
    "nestas", "neste", "nestes", "noite", "nome", "nova", "novas", "nove", "novo", 
    "novos", "numas", "nunca", "nuns", "nível", "número", "obra", "obrigada", 
    "obrigado", "oitava", "oitavo", "oito", "ontem", "onze", "outra", "outras", 
    "outro", "outros", "parece", "parte", "partir", "paucas", "pegar", "perante", 
    "perto", "pessoas", "pode", "podem", "poder", "poderá", "podia", "ponto", 
    "pontos", "porquê", "portanto", "posição", "possivelmente", "posso", "possível", 
    "pouca", "pouco", "poucos", "povo", "primeira", "primeiras", "primeiro", 
    "primeiros", "promeiro", "propios", "proprio", "própria", "próprias", "próprio", 
    "próprios", "próxima", "próximas", "próximo", "próximos", "puderam", "pôde", 
    "põe", "põem", "qualquer", "quereis", "querem", "queremas", "queres", "quero", 
    "questão", "quieto", "quarta", "quarto", "quatro", "quereis", "querem", 
    "queremas", "queres", "quero", "questão", "quieto", "quarta", "quarto", 
    "quatro", "quáis", "quê", "relação", "sabe", "sabem", "saber", "segunda", 
    "segundo", "sei", "seis", "sejamos", "sempre", "sendo", "seremos", "seria", 
    "seriam", "será", "serão", "seríamos", "sete", "sim", "sistema", "sois", 
    "somente", "sou", "sua", "suas", "são", "sétima", "sétimo", "tal", "talvez", 
    "tambem", "tanta", "tantas", "tanto", "tarde", "tendes", "tenho", "tens", 
    "tentar", "tentaram", "tente", "tentei", "terceira", "terceiro", "teremos", 
    "teria", "teriam", "terá", "terão", "teríamos", "teve", "tipo", "tivemos", 
    "tiverem", "tivermos", "tivesse", "tivessem", "tiveste", "tivestes", 
    "tivéramos", "tivéssemos", "toda", "todas", "todo", "todos", "trabalhar", 
    "trabalho", "treze", "três", "tudo", "têm", "tínhamos", "umas", "uns", "usa", 
    "usar", "vai", "vais", "valor", "veja", "vem", "vens", "ver", "verdade", 
    "verdadeiro", "vez", "vezes", "viagem", "vindo", "vinte", "vários", "vão", 
    "vêm", "vós", "zero", "área", "és", "último", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z", "às", "àquela", "àquelas", "àquele", "àqueles",
    "caramba", "cima", "coisa", "coisas", "comigo", "conosco", "consigo", "contigo",
    "mt", "ia", "ir", "iria", "iriam", "iríamos", "isso", "isto", "já", "lado",
    "lhe", "lhes", "logo", "maioria", "maiorias", "mais", "mas", "me", "mesma",
    "ola", "oi", "onde", "ontem", "os", "ou", "para", "pela", "pelas", "pelo",
    "kkk", "linda", "lindo", "eu", "nem", "ou", "ainda", "pois", "que", "como", "quando", "o", "não", "só",
    "quem", "pra", "sobre", "fui", "foi", "tinha", "foi", "há", "aí", "um", 
    "estava", "pelo", "essa", "este", "tava", "que", "no", "será", "foi", 
    "ele", "ele", "ela", "como", "tem", "este", "pelo", "do", "que", "cara","dias", 
    "cupom", "chave email", "mae", "pena"
]);

export { stopwords_pt };


