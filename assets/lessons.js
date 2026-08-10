(() => {
  const list = document.querySelector('.training-list');
  if (!list) return;

  const lessons = [
    {
      n: '01', title: 'Quartz × Mecânico × Automático', subtitle: 'Descubra o “motor” dos relógios.', category: 'Fundamentos',
      body: `
        <h4>O que faz um relógio funcionar?</h4>
        <p>Antes de escolher uma marca ou gastar mais dinheiro em um relógio, você precisa entender o que existe dentro dele. O movimento é o sistema que fornece e controla a energia usada para indicar o tempo e, em alguns relógios, executar funções adicionais.</p>
        <p>Para o iniciante, três termos resolvem grande parte da confusão: <strong>quartz, mecânico manual e automático.</strong></p>
        <h5>Quartz</h5>
        <p>Um relógio quartz utiliza uma fonte elétrica, normalmente uma bateria, e um oscilador de quartzo para criar uma referência de frequência muito estável. O circuito eletrônico transforma essa referência em uma indicação precisa do tempo.</p>
        <p>Na prática, quartz costuma significar praticidade, boa precisão e pouca preocupação no uso cotidiano.</p>
        <div class="lesson-highlight"><strong>Guarde isto:</strong> quartz não significa “relógio ruim”. Um quartz bem construído pode ser extremamente preciso e perfeitamente adequado para quem prioriza praticidade.</div>
        <h5>Mecânico manual</h5>
        <p>Um relógio mecânico utiliza energia armazenada em uma mola principal. No movimento manual, o usuário dá corda pela coroa para armazenar essa energia.</p>
        <p>O interesse está na experiência mecânica: engrenagens, escapamento, regulador e acabamento trabalham juntos sem depender de uma bateria para manter o mecanismo funcionando.</p>
        <h5>Automático</h5>
        <p>O automático é um relógio mecânico equipado com um sistema de corda automática. Um rotor aproveita os movimentos do pulso para ajudar a manter a mola carregada.</p>
        <div class="lesson-highlight"><strong>Regra mental:</strong> todo automático é mecânico, mas nem todo mecânico é automático.</div>
        <h5>Qual é melhor?</h5>
        <p>Não existe vencedor universal. Quartz favorece praticidade; manual favorece interação; automático combina a experiência mecânica com o carregamento pelo uso. O preço também não determina sozinho a qualidade ou a precisão.</p>
        <h5>Aplicando à sua coleção</h5>
        <p>Seu Apple Watch é um smartwatch. Seus dois BOSS tradicionais utilizam quartz. Portanto, você ainda não tem um relógio mecânico/automático na coleção. Um primeiro automático representaria uma experiência completamente diferente.</p>
        <div class="lesson-exercise"><h5>Exercício</h5><p>Sem consultar a resposta, classifique seus três relógios: smartwatch, quartz, mecânico manual ou automático. Depois escreva uma frase explicando por que você usaria cada um.</p></div>
        <div class="lesson-source"><strong>Aprofunde:</strong><br><a href="https://www.seikowatches.com/global-en/customerservice/knowledge/quartz" target="_blank" rel="noopener">Seiko — fundamentos de relógios quartz</a><br><a href="https://www.citizenwatch-global.com/support/html/en/0200/intro_mechanical_0200.html" target="_blank" rel="noopener">Citizen — introdução aos relógios mecânicos</a></div>
      `
    },
    {
      n: '02', title: 'Anatomia de um relógio', subtitle: 'Aprenda a identificar cada componente.', category: 'Fundamentos',
      body: `
        <h4>Aprenda a falar a língua da relojoaria</h4>
        <p>Você não precisa desmontar um relógio para começar a entendê-lo. Mas precisa reconhecer as partes que aparecem nas fichas técnicas e nas avaliações.</p>
        <h5>Caixa</h5><p>A caixa é a estrutura externa que protege o movimento e dá grande parte da identidade visual à peça. Pode ser feita de aço, titânio, ouro, cerâmica e outros materiais.</p>
        <h5>Mostrador e ponteiros</h5><p>O mostrador reúne índices, numerais, logotipo e outras informações. Os ponteiros fazem a leitura das horas, minutos e segundos. Formato, acabamento e proporção desses elementos mudam a personalidade do relógio.</p>
        <h5>Coroa</h5><p>A coroa é usada para ajustar o relógio e, em mecanismos mecânicos, pode ser usada para dar corda. Em relógios com coroa rosqueada, ela também participa da proteção contra água.</p>
        <h5>Bezel</h5><p>O bezel circunda o cristal. Pode ser principalmente estético ou ter função prática, como em determinados relógios de mergulho ou cronógrafos.</p>
        <h5>Lugs, cristal e fundo</h5><p>Os lugs conectam a caixa à pulseira ou bracelete. O cristal protege o mostrador. O fundo fecha a caixa e pode ser sólido ou transparente, permitindo observar parte do movimento.</p>
        <div class="lesson-highlight"><strong>Exercício visual:</strong> pegue seu BOSS Stratus e tente apontar para caixa, coroa, bezel, cristal, mostrador, ponteiros, lugs, pulseira e fundo. Depois repita no BOSS de couro.</div>
        <div class="lesson-exercise"><h5>Exercício</h5><p>Abra a ficha técnica de um relógio que você deseja comprar. Separe as palavras que você já conhece das que ainda não entende. A meta é aumentar esse vocabulário a cada aula.</p></div>
        <div class="lesson-source"><strong>Aprofunde:</strong><br><a href="https://www.seikowatches.com/global-en/customerservice/knowledge" target="_blank" rel="noopener">Seiko — Watch Knowledge</a><br><a href="https://www.hodinkee.com/watch101" target="_blank" rel="noopener">HODINKEE — Watch 101</a></div>
      `
    },
    {
      n: '03', title: 'Tamanho, pulso e proporções', subtitle: 'Diâmetro, espessura e lug-to-lug.', category: 'Estilo',
      body: `
        <h4>42 mm não conta toda a história</h4>
        <p>Uma das primeiras especificações que você encontra é o diâmetro da caixa. É útil, mas não suficiente. Dois relógios com o mesmo diâmetro podem parecer completamente diferentes no pulso.</p>
        <h5>Diâmetro</h5><p>É a largura aproximada da caixa, normalmente sem considerar a coroa. Use-o como ponto de partida, não como regra absoluta.</p>
        <h5>Lug-to-lug</h5><p>É a distância entre as extremidades dos lugs. Essa medida ajuda a entender quanto do pulso o relógio realmente ocupará e pode ser mais reveladora que o diâmetro.</p>
        <h5>Espessura</h5><p>A espessura muda a presença visual e a sensação sob a manga da camisa. Relógios mais finos costumam conversar bem com roupas sociais; relógios mais espessos tendem a transmitir uma linguagem esportiva ou robusta.</p>
        <h5>Proporção</h5><p>Formato da caixa, largura da pulseira, tamanho do mostrador, bezel e distância entre os lugs trabalham juntos. Não existe um único “tamanho perfeito” para todos os pulsos.</p>
        <div class="lesson-highlight"><strong>Seu objetivo:</strong> não descobrir qual tamanho é certo para todo mundo. Descobrir qual combinação de medidas parece equilibrada no seu próprio pulso.</div>
        <div class="lesson-exercise"><h5>Exercício</h5><p>Meça a circunferência do seu pulso. Coloque os dois BOSS lado a lado e compare diâmetro, espessura, comprimento visual dos lugs e largura da pulseira. Qual parece maior? Qual parece mais elegante? Qual parece mais esportivo?</p></div>
        <div class="lesson-source"><strong>Aprofunde:</strong><br><a href="https://www.hodinkee.com/articles/how-to-buy-a-watch-size" target="_blank" rel="noopener">HODINKEE — como pensar tamanho de relógio</a></div>
      `
    },
    {
      n: '04', title: 'Cristal: mineral × safira × acrílico', subtitle: 'Materiais e suas consequências.', category: 'Especificação',
      body: `
        <h4>O que protege o mostrador?</h4>
        <p>O cristal é a superfície transparente sobre o mostrador. Ele influencia resistência a riscos, aparência, reflexos e a sensação de profundidade do relógio.</p>
        <h5>Acrílico</h5><p>O acrílico é um material plástico muito associado a relógios vintage. É mais suscetível a riscos, mas pode ser polido em muitas situações e possui uma estética característica.</p>
        <h5>Mineral</h5><p>O cristal mineral oferece um equilíbrio entre custo e resistência. É bastante comum em relógios de entrada e intermediários.</p>
        <h5>Safira</h5><p>A safira sintética é extremamente resistente a riscos e por isso é valorizada em relógios modernos. Isso não significa que seja indestrutível: resistência a riscos e resistência a impactos são propriedades diferentes.</p>
        <div class="lesson-highlight"><strong>Não pense apenas “safira = melhor”.</strong> Pense no contexto. Em um relógio vintage, o acrílico pode fazer parte da identidade. Em um relógio para uso diário, a resistência a riscos da safira pode ser prioridade.</div>
        <div class="lesson-exercise"><h5>Exercício</h5><p>Descubra qual cristal existe em cada um dos seus BOSS. Depois escolha o material que você gostaria no seu próximo relógio e justifique a escolha em uma frase.</p></div>
        <div class="lesson-source"><strong>Aprofunde:</strong><br><a href="https://www.hodinkee.com/watch101" target="_blank" rel="noopener">HODINKEE — Watch 101</a></div>
      `
    },
    {
      n: '05', title: 'Resistência à água', subtitle: 'ATM, vedação e uso responsável.', category: 'Especificação',
      body: `
        <h4>30 metros não significa mergulho a 30 metros</h4>
        <p>Essa é uma das maiores armadilhas para iniciantes. A classificação de resistência à água está relacionada aos testes de pressão e às condições de uso previstas pelo fabricante; não deve ser interpretada literalmente como profundidade de mergulho.</p>
        <h5>ATM, bar e metros</h5><p>Você pode encontrar indicações como 3 bar, 5 bar, 10 bar ou 20 bar, além de equivalentes em metros. A forma correta de interpretar depende do fabricante e da norma aplicada ao relógio.</p>
        <h5>Uso prático</h5><ul><li><strong>3 ATM / 30 m:</strong> normalmente associado a respingos e uso cotidiano limitado.</li><li><strong>5 ATM / 50 m:</strong> oferece maior resistência, mas ainda exige atenção às instruções do fabricante.</li><li><strong>10 ATM / 100 m:</strong> nível mais elevado para atividades aquáticas, conforme especificação.</li><li><strong>20 ATM / 200 m:</strong> resistência elevada; relógios de mergulho possuem requisitos específicos além do número.</li></ul>
        <h5>Coroa e manutenção</h5><p>Coroas, juntas e vedações são fundamentais. Coroas rosqueadas devem estar corretamente fechadas quando o fabricante exigir. A resistência também pode diminuir com o tempo, desgaste, impacto ou abertura da caixa.</p>
        <div class="lesson-highlight"><strong>Regra para sua coleção:</strong> nunca use um relógio na água apenas porque viu “100 m” no mostrador. Confira o manual e a recomendação específica da marca.</div>
        <div class="lesson-exercise"><h5>Exercício</h5><p>Confira a resistência à água dos seus dois BOSS. Crie três regras pessoais: relógio para chuva, relógio para piscina e relógio que você manteria longe da água. Compare com as especificações oficiais.</p></div>
        <div class="lesson-source"><strong>Aprofunde:</strong><br><a href="https://www.citizenwatch-global.com/support/maintenance/wr.html" target="_blank" rel="noopener">Citizen — Water Resistance</a><br><a href="https://www.citizenwatch-global.com/support/html/en/0200/precaution_09_0200.html" target="_blank" rel="noopener">Citizen — tabela de resistência à água</a></div>
      `
    }
  ];

  const firstFive = Array.from(list.querySelectorAll('.training-item')).slice(0, 5);
  firstFive.forEach((node, index) => {
    const lesson = lessons[index];
    const details = document.createElement('details');
    details.className = 'training-item lesson';
    details.innerHTML = `
      <summary>
        <span>${lesson.n}</span>
        <div><h3>${lesson.title}</h3><p>${lesson.subtitle}</p></div>
        <div class="lesson-plus">+</div>
      </summary>
      <div class="lesson-body">${lesson.body}</div>
    `;
    node.replaceWith(details);
  });
})();
