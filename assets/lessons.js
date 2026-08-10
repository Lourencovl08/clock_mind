(() => {
  const list = document.querySelector('.training-list');
  if (!list) return;

  /*
    PADRÃO EDITORIAL CLOCK MIND — v1
    - Conteúdo totalmente agnóstico ao leitor.
    - Nunca mencionar nome, coleção, profissão, histórico ou dados pessoais do usuário.
    - Cada aula precisa ensinar, propor um exercício e indicar pelo menos um vídeo.
    - Prioridade: vídeo didático; leitura externa entra como aprofundamento.
    - Não reproduzir textos de terceiros; resumir conceitos com redação original.
    - Usar fontes oficiais ou veículos especializados para conferir conceitos técnicos.
  */

  const lessons = [
    {
      n: '01',
      title: 'Quartz × Mecânico × Automático',
      subtitle: 'Descubra o “motor” dos relógios.',
      category: 'Fundamentos',
      body: `
        <h4>O que faz um relógio funcionar?</h4>
        <p>O <strong>movimento</strong> é o conjunto de componentes responsável por gerar, armazenar, regular e transmitir a energia que mantém a indicação do tempo e, em alguns relógios, outras funções. Para quem está começando, a primeira distinção importante é entre <strong>quartz</strong> e <strong>mecânico</strong>. Dentro dos mecânicos, existem os movimentos <strong>manuais</strong> e <strong>automáticos</strong>.</p>

        <div class="lesson-highlight"><strong>Antes de continuar:</strong> “melhor” não significa automaticamente “mais caro” ou “mais mecânico”. Quartz e mecânico resolvem o problema de indicar o tempo de maneiras diferentes.</div>

        <h5>Quartz</h5>
        <p>Um movimento quartz usa energia elétrica e um oscilador de quartzo para criar uma referência de frequência muito estável. Um circuito eletrônico utiliza essa referência para controlar a marcha do relógio.</p>
        <p>Na prática, o quartz costuma oferecer excelente precisão, baixo custo de manutenção e grande praticidade. A alimentação pode vir de uma bateria, de uma célula solar ou de outras arquiteturas elétricas.</p>

        <h5>Mecânico manual</h5>
        <p>O movimento mecânico armazena energia em uma <strong>mola principal</strong>. Essa energia passa por um trem de engrenagens e chega ao escapamento e ao órgão regulador, que controlam a liberação da energia.</p>
        <p>No movimento manual, a mola é carregada pelo usuário através da coroa. É uma experiência mais interativa: dar corda passa a fazer parte do uso do relógio.</p>

        <h5>Automático</h5>
        <p>Um automático é um relógio mecânico que possui um sistema de corda automática. Um <strong>rotor</strong> gira com o movimento do relógio e ajuda a carregar a mola principal. Muitos movimentos automáticos também permitem corda manual pela coroa.</p>

        <div class="lesson-highlight"><strong>Regra mental:</strong> todo automático é mecânico, mas nem todo mecânico é automático. Um relógio automático também pode ser chamado de “mechanical automatic” ou simplesmente “automatic”.</div>

        <h5>Precisão não é a mesma coisa que prestígio</h5>
        <p>Um quartz bem regulado normalmente será muito mais preciso que um movimento mecânico convencional. O interesse dos mecânicos está em outra dimensão: engenharia, acabamento, tradição, complexidade, interação e experiência de uso.</p>

        <h5>Vocabulário que você deve sair sabendo</h5>
        <ul>
          <li><strong>Quartz:</strong> movimento regulado eletronicamente com referência de quartzo.</li>
          <li><strong>Manual:</strong> movimento mecânico que precisa ser carregado pela coroa.</li>
          <li><strong>Automático:</strong> movimento mecânico com sistema de corda acionado por rotor.</li>
          <li><strong>Calibre:</strong> identificação específica de um movimento.</li>
          <li><strong>Reserva de marcha:</strong> tempo aproximado que um movimento mecânico permanece funcionando quando completamente carregado.</li>
        </ul>

        <div class="lesson-video">
          <h5>Assista antes de seguir</h5>
          <p><strong>Ezequias Relojoeiro — “A bateria são melhores? Tudo o que você precisa saber sobre relógios quartz”</strong></p>
          <p>Vídeo em português, especialmente indicado para iniciantes. Observe como o funcionamento do quartz é explicado e compare com o que você acabou de aprender.</p>
          <a class="button ghost" href="https://www.youtube.com/watch?v=PwLejq4SqKQ" target="_blank" rel="noopener">Assistir no YouTube →</a>
        </div>

        <div class="lesson-exercise"><h5>Exercício</h5><p>Explique, sem consultar o material, a diferença entre quartz, mecânico manual e automático em três frases. Depois responda: qual sistema você escolheria se sua prioridade fosse precisão e praticidade? E qual escolheria se a experiência mecânica fosse a prioridade?</p></div>

        <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.citizenwatch-global.com/support/html/en/0200/intro_mechanical_0200.html" target="_blank" rel="noopener">Citizen — introdução aos movimentos mecânicos</a><br><a href="https://www.hodinkee.com/watch101" target="_blank" rel="noopener">HODINKEE — Watch 101</a></div>
      `
    },
    {
      n: '02',
      title: 'Anatomia de um relógio',
      subtitle: 'Aprenda a identificar cada componente.',
      category: 'Fundamentos',
      body: `
        <h4>Aprenda a “ler” a construção de um relógio</h4>
        <p>Antes de estudar marcas, calibres e complicações, aprenda a identificar as partes externas e internas mais importantes. Isso transforma uma ficha técnica em algo que você consegue interpretar.</p>

        <h5>Caixa</h5>
        <p>A <strong>caixa</strong> é a estrutura que abriga e protege o movimento. Ela determina grande parte da presença visual do relógio e pode ser fabricada em aço, titânio, ouro, cerâmica e outros materiais.</p>

        <h5>Mostrador e ponteiros</h5>
        <p>O <strong>mostrador</strong> reúne índices, numerais, logotipo, escalas e outras informações. Os <strong>ponteiros</strong> fazem a indicação das horas, minutos e segundos. A proporção entre esses elementos influencia diretamente a legibilidade.</p>

        <h5>Coroa</h5>
        <p>A <strong>coroa</strong> é o comando externo ligado ao mecanismo de ajuste. Dependendo do movimento, pode servir para dar corda, ajustar a hora, alterar a data ou selecionar outras funções.</p>

        <h5>Bezel</h5>
        <p>O <strong>bezel</strong> é a estrutura que circunda o cristal. Em alguns relógios é principalmente decorativo; em outros possui uma função, como uma escala de mergulho, GMT ou taquímetro.</p>

        <h5>Crystal / cristal</h5>
        <p>O <strong>cristal</strong> é a proteção transparente sobre o mostrador. Os materiais mais comuns que você encontrará são acrílico, mineral e safira. O material e a construção do cristal influenciam resistência a riscos, aparência e durabilidade.</p>

        <h5>Lugs, spring bars e pulseira</h5>
        <p>Os <strong>lugs</strong> são as extensões da caixa que recebem a pulseira ou bracelete, normalmente através de barras de mola (<em>spring bars</em>). O formato dos lugs influencia muito o tamanho percebido no pulso.</p>

        <h5>Fundo e movimento</h5>
        <p>O <strong>caseback</strong>, ou fundo, fecha a caixa. Pode ser sólido ou transparente. Quando transparente, geralmente permite observar parte do movimento. O movimento é o conjunto mecânico ou eletrônico responsável pelo funcionamento do relógio.</p>

        <div class="lesson-highlight"><strong>O olhar do colecionador começa aqui:</strong> ao olhar um relógio, não enxergue apenas “um relógio bonito”. Tente identificar caixa, bezel, cristal, coroa, mostrador, ponteiros, lugs, pulseira e fundo.</div>

        <div class="lesson-video">
          <h5>Assista antes de seguir</h5>
          <p><strong>Teddy Baldassarre — “8 Misunderstood Watch Parts & Features Every Enthusiast Should Know”</strong></p>
          <p>Vídeo em inglês. É mais avançado que esta aula, mas excelente para começar a reconhecer terminologia e perceber como um entusiasta analisa componentes.</p>
          <a class="button ghost" href="https://www.youtube.com/watch?v=rDVIlNAROWk" target="_blank" rel="noopener">Assistir no YouTube →</a>
        </div>

        <div class="lesson-exercise"><h5>Exercício</h5><p>Pegue qualquer relógio e identifique fisicamente: caixa, coroa, bezel, cristal, mostrador, ponteiros, lugs, pulseira/bracelete e fundo. Depois procure uma ficha técnica online e tente relacionar cada termo técnico a uma parte que você consegue apontar no relógio.</p></div>

        <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.hodinkee.com/watch101" target="_blank" rel="noopener">HODINKEE — Watch 101</a><br><a href="https://www.hodinkee.com/watch101/hands" target="_blank" rel="noopener">HODINKEE — Hands</a><br><a href="https://www.hodinkee.com/watch101/movement" target="_blank" rel="noopener">HODINKEE — Movement</a></div>
      `
    },
    {
      n: '03',
      title: 'Tamanho, pulso e proporções',
      subtitle: 'Diâmetro, espessura e lug-to-lug.',
      category: 'Estilo',
      body: `
        <h4>O tamanho de um relógio não é apenas o número em milímetros</h4>
        <p>Diâmetro é a especificação mais divulgada, mas não conta sozinho como um relógio veste. O ajuste depende principalmente da combinação entre <strong>diâmetro, lug-to-lug, espessura, formato da caixa, largura da pulseira e abertura do mostrador</strong>.</p>

        <h5>Diâmetro</h5>
        <p>É a largura aproximada da caixa, normalmente sem incluir a coroa. É um bom ponto de partida, mas dois relógios de 40 mm podem vestir de maneiras completamente diferentes.</p>

        <h5>Lug-to-lug</h5>
        <p>É a distância entre as extremidades dos lugs. Para entender o tamanho real no pulso, essa medida é frequentemente mais reveladora que o diâmetro. Se os lugs ultrapassam claramente a largura plana do pulso, o relógio tende a parecer grande ou pouco equilibrado.</p>

        <h5>Espessura</h5>
        <p>A espessura altera tanto a aparência quanto o conforto. Caixas finas tendem a ser discretas e fáceis de acomodar sob uma manga. Caixas espessas têm presença mais robusta e podem combinar melhor com propostas esportivas.</p>

        <h5>Formato e proporção</h5>
        <p>Bezel largo, mostrador grande, caixa quadrada, lugs curtos, lugs longos e pulseiras diferentes podem alterar drasticamente a percepção do tamanho. Por isso, não existe um “tamanho ideal universal”.</p>

        <div class="lesson-highlight"><strong>Regra prática:</strong> use o diâmetro para iniciar a pesquisa, o lug-to-lug para entender o encaixe e a espessura para entender presença e conforto.</div>

        <div class="lesson-video">
          <h5>Assista antes de seguir</h5>
          <p><strong>Vix Clock — “Como descobrir o tamanho ideal do relógio no seu pulso?”</strong></p>
          <p>Vídeo em português e diretamente focado na escolha do tamanho para o pulso. É o complemento visual recomendado para esta aula.</p>
          <a class="button ghost" href="https://www.youtube.com/watch?v=RZRQW1E-G5A" target="_blank" rel="noopener">Assistir no YouTube →</a>
        </div>

        <div class="lesson-exercise"><h5>Exercício</h5><p>Meça a circunferência do pulso com fita métrica ou barbante. Depois escolha três relógios de tamanhos diferentes e anote diâmetro, lug-to-lug e espessura. Compare as medidas e observe fotos no pulso. O objetivo é aprender a prever o tamanho antes de comprar.</p></div>

        <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.lug2lug.org/guides/what-size-watch-should-i-get" target="_blank" rel="noopener">Lug²Lug — como escolher o tamanho</a><br><a href="https://www.gq.com/story/small-watches-for-men" target="_blank" rel="noopener">GQ — tamanho, espessura e lug-to-lug</a></div>
      `
    },
    {
      n: '04',
      title: 'Cristal: mineral × safira × acrílico',
      subtitle: 'Materiais e suas consequências.',
      category: 'Especificação',
      body: `
        <h4>O cristal é mais importante do que parece</h4>
        <p>O cristal é a camada transparente que protege o mostrador. Ele não é apenas uma questão de “ter ou não ter safira”: material, espessura, formato e tratamentos podem influenciar resistência a riscos, reflexos, legibilidade, distorção e até a estética do relógio.</p>

        <h5>Acrílico</h5>
        <p>O acrílico é um plástico utilizado em muitos relógios vintage e em alguns modelos modernos. É relativamente fácil de riscar, mas pequenos riscos podem ser polidos em muitas situações. Também tende a suportar impactos de maneira diferente do vidro.</p>

        <h5>Mineral</h5>
        <p>O vidro mineral é uma solução intermediária muito comum. Em geral oferece mais resistência a riscos que o acrílico e custa menos que a safira, embora sua resistência a riscos seja inferior à da safira.</p>

        <h5>Safira sintética</h5>
        <p>A safira utilizada na relojoaria moderna é normalmente sintética. Ela apresenta excelente resistência a riscos e é uma das características mais procuradas em relógios para uso cotidiano. Entretanto, <strong>resistência a riscos não significa invulnerabilidade a impactos</strong>.</p>

        <h5>Tratamento antirreflexo</h5>
        <p>Você também encontrará o termo <strong>AR</strong>, de <em>anti-reflective</em>. Um revestimento antirreflexo pode melhorar a leitura do mostrador ao reduzir reflexos. Alguns cristais têm tratamento em uma ou em ambas as faces.</p>

        <div class="lesson-highlight"><strong>Não decore apenas “safira é melhor”.</strong> Aprenda a perguntar: melhor para qual uso? Para um relógio diário, resistência a riscos pode ser prioridade. Para uma peça vintage, acrílico pode fazer parte da estética e da autenticidade.</div>

        <div class="lesson-video">
          <h5>Assista antes de seguir</h5>
          <p><strong>Vix Clock — “Como saber se o relógio é de cristal mineral ou cristal safira?”</strong></p>
          <p>Vídeo em português com demonstração prática. É particularmente útil porque transforma uma especificação abstrata em algo visual.</p>
          <a class="button ghost" href="https://www.youtube.com/watch?v=tudLHBVbhzM" target="_blank" rel="noopener">Assistir no YouTube →</a>
        </div>

        <div class="lesson-exercise"><h5>Exercício</h5><p>Escolha três relógios: um com acrílico, um com mineral e um com safira. Compare preço, proposta, resistência a riscos e estética. Depois explique em uma frase por que o material escolhido faz sentido para cada relógio.</p></div>

        <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://timedreviews.com/guides/watch-crystals-explained/" target="_blank" rel="noopener">Timed Reviews — comparação entre cristais</a><br><a href="https://watch.al/en/blog/watch-crystal-guide.html" target="_blank" rel="noopener">Iglisi Watch — Acrylic, Mineral & Sapphire</a></div>
      `
    },
    {
      n: '05',
      title: 'Resistência à água',
      subtitle: 'ATM, vedação e uso responsável.',
      category: 'Especificação',
      body: `
        <h4>30 metros não significa que você pode mergulhar a 30 metros</h4>
        <p>A resistência à água é uma das especificações mais mal interpretadas por iniciantes. Valores como <strong>30 m, 50 m, 100 m ou 200 m</strong> estão relacionados à pressão utilizada nos testes e não devem ser lidos como uma autorização automática para mergulhar naquela profundidade.</p>

        <h5>ATM, bar e metros</h5>
        <p>ATM significa atmosfera. Bar é uma unidade de pressão muito próxima em valor. Em termos simplificados, 3 ATM corresponde a aproximadamente 30 m de pressão de água, 5 ATM a 50 m e assim por diante. A aplicação prática depende da construção e das instruções do fabricante.</p>

        <h5>Como pensar nos níveis</h5>
        <ul>
          <li><strong>3 ATM / 30 m:</strong> normalmente indicado para contato limitado com água, como respingos, de acordo com o fabricante.</li>
          <li><strong>5 ATM / 50 m:</strong> oferece maior resistência, mas não deve ser tratado automaticamente como um relógio de natação.</li>
          <li><strong>10 ATM / 100 m:</strong> muitos fabricantes permitem natação e atividades aquáticas leves nessa faixa, mas a regra correta é seguir o manual do modelo.</li>
          <li><strong>20 ATM / 200 m:</strong> nível elevado; relógios realmente destinados ao mergulho ainda precisam atender requisitos específicos de construção e teste.</li>
        </ul>

        <h5>Por que a vedação importa?</h5>
        <p>A resistência depende de componentes como juntas, cristal, fundo, coroa e tubos. Uma coroa rosqueada pode contribuir para a vedação, mas não transforma sozinha qualquer relógio em um relógio de mergulho.</p>
        <p>Impactos, envelhecimento das juntas, abertura da caixa e manutenção inadequada podem comprometer a resistência original. Por isso, resistência à água não deve ser considerada uma característica eterna.</p>

        <h5>Água quente merece atenção</h5>
        <p>Banhos quentes, saunas e mudanças bruscas de temperatura podem ser especialmente desfavoráveis às vedações. Mesmo quando um relógio possui uma classificação elevada, siga as recomendações específicas da marca.</p>

        <div class="lesson-highlight"><strong>Regra de ouro:</strong> nunca use apenas o número “100 m” para decidir se um relógio pode entrar na piscina. Confira o manual, a categoria do relógio e as recomendações do fabricante.</div>

        <div class="lesson-video">
          <h5>Assista antes de seguir</h5>
          <p><strong>Teddy Baldassarre — “What Does Water Resistance Mean?”</strong></p>
          <p>Vídeo em inglês, mas muito didático para entender ATM, metros, pressão e o uso prático das classificações.</p>
          <a class="button ghost" href="https://www.youtube.com/watch?v=bWjypD_Tu94" target="_blank" rel="noopener">Assistir no YouTube →</a>
        </div>

        <div class="lesson-exercise"><h5>Exercício</h5><p>Escolha cinco relógios diferentes e registre: resistência à água, presença de coroa rosqueada, categoria e recomendação oficial de uso. Depois crie uma tabela com três situações — chuva, piscina e mergulho — e marque quais relógios seriam adequados segundo o fabricante.</p></div>

        <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.citizenwatch-global.com/support/maintenance/wr.html" target="_blank" rel="noopener">Citizen — Water Resistance</a><br><a href="https://teddybaldassarre.com/en-ca/blogs/watches/5-atm-water-resistance" target="_blank" rel="noopener">Teddy Baldassarre — 5 ATM e classificações de profundidade</a></div>
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
