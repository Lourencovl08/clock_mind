(() => {
  const list = document.querySelector('.training-list');
  if (!list) return;

  /*
    PADRÃO EDITORIAL CLOCK MIND — v1
    Conteúdo agnóstico ao leitor. Cada aula: conceito + técnica + vocabulário + vídeo + exercício + aprofundamento.
  */
  const lessons = [
    {n:'01',title:'Quartz × Mecânico × Automático',subtitle:'Descubra o “motor” dos relógios.',body:`
      <h4>O que faz um relógio funcionar?</h4>
      <p>O <strong>movimento</strong> é o conjunto de componentes responsável por gerar, armazenar, regular e transmitir a energia que mantém a indicação do tempo. Para começar, a distinção essencial é entre <strong>quartz</strong> e <strong>mecânico</strong>. Entre os mecânicos, existem os movimentos <strong>manuais</strong> e <strong>automáticos</strong>.</p>
      <div class="lesson-highlight"><strong>Importante:</strong> “melhor” não significa automaticamente “mais caro” ou “mais mecânico”. Quartz e mecânico resolvem o mesmo problema por arquiteturas diferentes.</div>
      <h5>Quartz</h5><p>Um movimento quartz usa energia elétrica e um oscilador de quartzo como referência de frequência. Um circuito eletrônico utiliza essa referência para controlar a marcha do relógio. Quartz normalmente oferece excelente precisão, praticidade e baixa necessidade de intervenção.</p>
      <h5>Mecânico manual</h5><p>Um movimento mecânico armazena energia em uma mola principal. Essa energia passa pelo trem de engrenagens e pelo escapamento, que regula sua liberação. No movimento manual, a mola é carregada pela coroa.</p>
      <h5>Automático</h5><p>Um automático é um relógio mecânico equipado com um sistema de corda automática. Um <strong>rotor</strong> gira com o movimento do relógio e ajuda a carregar a mola. Muitos automáticos também permitem corda manual.</p>
      <div class="lesson-highlight"><strong>Regra mental:</strong> todo automático é mecânico, mas nem todo mecânico é automático.</div>
      <h5>Vocabulário</h5><ul><li><strong>Calibre:</strong> identificação de um movimento.</li><li><strong>Reserva de marcha:</strong> tempo de funcionamento de um mecânico quando carregado.</li><li><strong>Quartz:</strong> movimento regulado eletronicamente com referência de quartzo.</li></ul>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>Ezequias Relojoeiro — Mecânicos são melhores? Tudo o que você precisa saber sobre relógios automáticos.</strong></p><p>Vídeo em português, com explicação prática do funcionamento dos movimentos mecânicos.</p><a class="button ghost" href="https://www.youtube.com/watch?v=7YEgj9E2XLI" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Explique em três frases a diferença entre quartz, manual e automático. Depois escreva qual característica de cada sistema mais combina com um uso que você considere importante.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.citizenwatch-global.com/support/html/en/0200/intro_mechanical_0200.html" target="_blank" rel="noopener">Citizen — introdução aos movimentos mecânicos</a><br><a href="https://www.hodinkee.com/watch101" target="_blank" rel="noopener">HODINKEE — Watch 101</a></div>`},

    {n:'02',title:'Anatomia de um relógio',subtitle:'Aprenda a identificar cada componente.',body:`
      <h4>Aprenda a “ler” a construção de um relógio</h4>
      <p>Uma ficha técnica fica muito mais fácil quando você reconhece as principais partes externas e internas.</p>
      <h5>Caixa</h5><p>A <strong>caixa</strong> abriga e protege o movimento. Material, formato e acabamento determinam grande parte da presença visual.</p>
      <h5>Mostrador e ponteiros</h5><p>O <strong>mostrador</strong> reúne índices, numerais, escalas e outras informações. Os ponteiros fazem a leitura das horas, minutos e segundos.</p>
      <h5>Coroa e bezel</h5><p>A <strong>coroa</strong> controla funções como corda, hora e data. O <strong>bezel</strong> circunda o cristal e pode ser decorativo ou funcional.</p>
      <h5>Crystal, lugs e fundo</h5><p>O <strong>cristal</strong> protege o mostrador. Os <strong>lugs</strong> conectam caixa e pulseira. O fundo fecha a caixa e pode ser sólido ou transparente.</p>
      <div class="lesson-highlight"><strong>Olhar de entusiasta:</strong> ao observar um relógio, tente identificar caixa, coroa, bezel, cristal, mostrador, ponteiros, lugs, pulseira e fundo antes de olhar a marca.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>Teddy Baldassarre — 8 Misunderstood Watch Parts & Features Every Enthusiast Should Know.</strong></p><p>Vídeo em inglês, útil para ampliar o vocabulário e visualizar componentes.</p><a class="button ghost" href="https://www.youtube.com/watch?v=rDVIlNAROWk" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Escolha qualquer relógio e identifique fisicamente caixa, coroa, bezel, cristal, mostrador, ponteiros, lugs, pulseira e fundo. Depois encontre a ficha técnica e relacione os termos.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.hodinkee.com/watch101" target="_blank" rel="noopener">HODINKEE — Watch 101</a></div>`},

    {n:'03',title:'Tamanho, pulso e proporções',subtitle:'Diâmetro, espessura e lug-to-lug.',body:`
      <h4>42 mm não conta toda a história</h4><p>O tamanho percebido depende da combinação entre <strong>diâmetro, lug-to-lug, espessura, formato da caixa, largura da pulseira e abertura do mostrador</strong>.</p>
      <h5>Diâmetro</h5><p>É a largura aproximada da caixa, normalmente sem a coroa. Serve como ponto de partida, não como regra universal.</p>
      <h5>Lug-to-lug</h5><p>É a distância entre as extremidades dos lugs. Ajuda a prever quanto espaço o relógio ocupará no pulso e pode ser mais reveladora que o diâmetro.</p>
      <h5>Espessura e proporção</h5><p>Caixas finas tendem a ser discretas e fáceis de acomodar sob mangas. Caixas espessas têm presença mais robusta. Bezel, mostrador, lugs e pulseira também mudam a percepção do tamanho.</p>
      <div class="lesson-highlight"><strong>Regra prática:</strong> diâmetro inicia a pesquisa; lug-to-lug ajuda a entender o encaixe; espessura ajuda a prever presença e conforto.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>Vídeo em português sobre como escolher o tamanho do relógio no pulso.</strong></p><p>O objetivo é aprender a comparar medidas e não depender apenas do número de milímetros.</p><a class="button ghost" href="https://www.youtube.com/results?search_query=tamanho+ideal+rel%C3%B3gio+pulso+lug+to+lug" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Meça a circunferência do pulso. Escolha três relógios com tamanhos diferentes e anote diâmetro, lug-to-lug e espessura. Compare as fotos no pulso e tente prever qual veste maior antes de experimentar.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.lug2lug.org/guides/what-size-watch-should-i-get" target="_blank" rel="noopener">Lug²Lug — como escolher tamanho</a></div>`},

    {n:'04',title:'Cristal: mineral × safira × acrílico',subtitle:'Materiais e suas consequências.',body:`
      <h4>O que protege o mostrador?</h4><p>O cristal influencia resistência a riscos, reflexos, aparência e durabilidade.</p>
      <h5>Acrílico</h5><p>Material plástico muito associado a relógios vintage. Risca com mais facilidade, mas pequenos riscos podem ser polidos em muitas situações.</p>
      <h5>Mineral</h5><p>Oferece equilíbrio entre custo e resistência e é muito comum em relógios de entrada e intermediários.</p>
      <h5>Safira</h5><p>A safira sintética apresenta excelente resistência a riscos. Isso não significa que seja indestrutível: <strong>resistência a riscos e resistência a impactos são propriedades diferentes</strong>.</p>
      <h5>Antirreflexo</h5><p>O tratamento <strong>AR</strong> (<em>anti-reflective</em>) reduz reflexos e pode melhorar a leitura do mostrador. Pode estar aplicado em uma ou ambas as faces.</p>
      <div class="lesson-highlight"><strong>Não memorize apenas “safira é melhor”.</strong> Pergunte: melhor para qual uso? Em uma peça vintage, acrílico pode fazer parte da estética; em um relógio diário, resistência a riscos pode ser prioridade.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>Vídeo em português sobre cristal mineral, safira e identificação do cristal.</strong></p><a class="button ghost" href="https://www.youtube.com/results?search_query=cristal+safira+mineral+acrilico+relogio+relojoaria" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Escolha três relógios: um com acrílico, um com mineral e um com safira. Compare preço, proposta, resistência a riscos e estética. Explique por que o material faz sentido para cada peça.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://timedreviews.com/guides/watch-crystals-explained/" target="_blank" rel="noopener">Timed Reviews — cristais</a></div>`},

    {n:'05',title:'Resistência à água',subtitle:'ATM, vedação e uso responsável.',body:`
      <h4>30 metros não significa mergulho a 30 metros</h4><p>Classificações como 30 m, 50 m, 100 m e 200 m estão ligadas a testes de pressão e não devem ser interpretadas literalmente como profundidade de mergulho.</p>
      <h5>ATM e bar</h5><p>ATM significa atmosfera. Bar é uma unidade de pressão próxima em valor. A aplicação prática depende da construção e das instruções do fabricante.</p>
      <h5>Uso prático</h5><ul><li><strong>3 ATM:</strong> normalmente respingos e contato limitado com água.</li><li><strong>5 ATM:</strong> maior resistência, mas não é automaticamente autorização para natação.</li><li><strong>10 ATM:</strong> muitos fabricantes permitem atividades aquáticas, conforme modelo e manual.</li><li><strong>20 ATM:</strong> resistência elevada; relógios de mergulho possuem requisitos específicos.</li></ul>
      <h5>Vedação e manutenção</h5><p>Juntas, cristal, fundo e coroa participam da resistência. Impactos, envelhecimento das juntas e abertura da caixa podem reduzir a proteção original.</p>
      <div class="lesson-highlight"><strong>Regra de ouro:</strong> nunca decida se um relógio pode entrar na piscina apenas pelo número “100 m”. Consulte a recomendação do fabricante.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>Teddy Baldassarre — What Does Water Resistance Mean?</strong></p><p>Vídeo em inglês, direto ao ponto sobre pressão, metros e uso prático.</p><a class="button ghost" href="https://www.youtube.com/results?search_query=Teddy+Baldassarre+What+Does+Water+Resistance+Mean" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Escolha cinco relógios e registre resistência à água, presença de coroa rosqueada e recomendação oficial. Crie uma tabela para chuva, piscina e mergulho.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.citizenwatch-global.com/support/maintenance/wr.html" target="_blank" rel="noopener">Citizen — Water Resistance</a></div>`},

    {n:'06',title:'Categorias de relógios',subtitle:'Dress, Casual, Diver, Field, Pilot, GMT e Chronograph.',body:`
      <h4>O formato do relógio comunica uma função</h4><p>As categorias de relógios surgiram de necessidades, ambientes e tradições diferentes. Hoje existe muita sobreposição, mas reconhecer a linguagem de cada categoria ajuda a escolher uma peça coerente com a ocasião.</p>
      <h5>Dress</h5><p>Normalmente fino, discreto e voltado à elegância. Mostrador limpo, caixa mais contida e pulseira de couro são frequentes. Não é uma lei: existem dress watches com outros materiais.</p>
      <h5>Diver</h5><p>Construído para atividade aquática e tradicionalmente associado a bezel giratório para controlar tempo de mergulho, alta legibilidade e resistência à água elevada. Um relógio com estética de mergulho não é necessariamente um instrumento de mergulho certificado.</p>
      <h5>Field e Pilot</h5><p><strong>Field watches</strong> priorizam legibilidade, robustez e simplicidade. <strong>Pilot watches</strong> possuem raízes na aviação e frequentemente valorizam leitura rápida, contraste e, em alguns casos, escalas específicas.</p>
      <h5>GMT e Chronograph</h5><p>Um <strong>GMT</strong> permite acompanhar um segundo fuso horário através de uma indicação adicional. Um <strong>chronograph</strong> é um cronômetro integrado ao relógio, com comandos próprios para iniciar, parar e zerar a medição.</p>
      <div class="lesson-highlight"><strong>Aprendizado-chave:</strong> categoria não é apenas estética. Pergunte qual problema o design original pretendia resolver.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>Varun Duggi — How To Build A Watch Collection (Advice For Beginners).</strong></p><p>O vídeo apresenta categorias como smartwatch, dive, field e aviation de forma visual e acessível.</p><a class="button ghost" href="https://www.youtube.com/watch?v=4LaCb1TdZ8Q" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Escolha um exemplo de Dress, Diver, Field, Pilot, GMT e Chronograph. Para cada um, anote: característica visual, função original, nível de resistência à água e situação em que você o usaria.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.hodinkee.com/watch101" target="_blank" rel="noopener">HODINKEE — Watch 101</a></div>`},

    {n:'07',title:'Complicações',subtitle:'Data, cronógrafo, GMT, reserva de marcha e mais.',body:`
      <h4>O que significa “complicação”?</h4><p>Na relojoaria, uma <strong>complicação</strong> é uma função além da simples indicação de horas, minutos e segundos. O termo é especialmente usado para funções integradas ao movimento.</p>
      <h5>As primeiras que você encontrará</h5><ul><li><strong>Data:</strong> indica o dia do mês.</li><li><strong>Day-Date:</strong> combina dia da semana e data.</li><li><strong>Chronograph:</strong> mede intervalos de tempo.</li><li><strong>GMT:</strong> acompanha outro fuso horário.</li><li><strong>Power reserve:</strong> indica quanta energia resta em um movimento mecânico.</li><li><strong>Moonphase:</strong> representa visualmente a fase da Lua.</li></ul>
      <h5>Complicação não significa necessariamente luxo</h5><p>Um simples calendário já é uma complicação. O nível de complexidade varia enormemente. Calendários perpétuos, repetidores de minutos e cronógrafos de alta relojoaria exigem arquiteturas muito mais sofisticadas.</p>
      <div class="lesson-highlight"><strong>Como analisar:</strong> não fique impressionado apenas pelo número de funções. Pergunte como a função é implementada, se é útil para o usuário e como ela afeta espessura, manutenção e preço.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>MD Time — Principais Complicações da Relojoaria.</strong></p><p>Conteúdo em português que apresenta calendário perpétuo, cronógrafo, fases da lua, turbilhão e a ideia de complicação.</p><a class="button ghost" href="https://www.youtube.com/watch?v=OPqZ7worH8Q" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Escolha cinco relógios com complicações diferentes. Para cada um, escreva: qual problema resolve, como a função é indicada no mostrador e se ela exige algum procedimento especial de ajuste.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://watchcomplications.com/how-complications-work/" target="_blank" rel="noopener">Watch Complications — How Complications Work</a></div>`},

    {n:'08',title:'Marcas: relojoaria × moda',subtitle:'Como interpretar posicionamento e tradição.',body:`
      <h4>O nome no mostrador não conta toda a história</h4><p>Uma das decisões mais importantes de um iniciante é aprender a separar <strong>marca, produto, movimento, construção, história e posicionamento</strong>. Uma marca de moda não é automaticamente ruim, assim como uma marca tradicional não torna qualquer modelo excelente.</p>
      <h5>Marcas relojoeiras</h5><p>Empresas como Seiko, Citizen, Casio, Orient, Tissot, Longines e muitas outras têm histórias ligadas à relojoaria. Isso pode significar experiência em movimentos, fabricação, pesquisa ou construção de relógios.</p>
      <h5>Marcas de moda</h5><p>Grupos de moda e luxo também comercializam relógios. O produto pode ter bom design e qualidade adequada ao preço, mas é importante entender que o negócio principal e a expertise podem estar em outra categoria.</p>
      <h5>Como avaliar sem preconceito</h5><ul><li>Quem fabrica o movimento?</li><li>Qual é a construção da caixa e do cristal?</li><li>Qual é a especificação de resistência à água?</li><li>Há assistência técnica e peças?</li><li>O preço está coerente com o conjunto?</li><li>Você está pagando por engenharia, design, história, acabamento ou principalmente pelo nome?</li></ul>
      <div class="lesson-highlight"><strong>Regra de ouro:</strong> não compre nem descarte um relógio apenas pelo logotipo. Aprenda a analisar o produto antes de analisar o prestígio da marca.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>Conteúdo introdutório sobre como avaliar relógios e marcas sem depender apenas do nome.</strong></p><p>Use a busca abaixo para encontrar análises atuais e comparar diferentes posicionamentos de marcas.</p><a class="button ghost" href="https://www.youtube.com/results?search_query=como+avaliar+marca+de+rel%C3%B3gio+relojoaria+marcas+de+moda" target="_blank" rel="noopener">Explorar vídeos no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Escolha três marcas de categorias diferentes. Compare um modelo de cada uma usando apenas ficha técnica, movimento, materiais, garantia e preço. Só depois pesquise história e prestígio.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.hodinkee.com/watch101" target="_blank" rel="noopener">HODINKEE — Watch 101</a></div>`},

    {n:'09',title:'Movimentos e calibres',subtitle:'NH35, Miyota, ETA, Sellita e o vocabulário do entusiasta.',body:`
      <h4>Aprenda a interpretar um calibre</h4><p>Depois de entender quartz e mecânicos, chega a hora de reconhecer nomes de movimentos. O <strong>calibre</strong> é uma identificação específica da arquitetura do movimento. O mesmo calibre pode aparecer em relógios de várias marcas.</p>
      <h5>O que procurar em uma ficha técnica</h5><ul><li>Tipo de movimento.</li><li>Calibre.</li><li>Frequência.</li><li>Reserva de marcha.</li><li>Número de joias.</li><li>Funções e complicações.</li><li>Precisão ou tolerância declarada.</li></ul>
      <h5>NH35 e Miyota 8xxx</h5><p>O <strong>Seiko/TMI NH35</strong> tornou-se extremamente popular em relógios automáticos de entrada e microbrands. A família <strong>Miyota 8215</strong> também é muito difundida. São movimentos importantes para o iniciante conhecer porque aparecem em muitos relógios acessíveis.</p>
      <h5>ETA e Sellita</h5><p>ETA e Sellita são nomes importantes no universo suíço. A Sellita produz movimentos próprios e também arquiteturas conhecidas por sua compatibilidade com projetos historicamente associados a calibres ETA. A existência de um movimento conhecido não determina sozinha a qualidade final do relógio.</p>
      <div class="lesson-highlight"><strong>Não compare calibres apenas pelo nome.</strong> Observe precisão, arquitetura, acabamento, robustez, disponibilidade de peças, facilidade de manutenção e o contexto do relógio em que o movimento foi instalado.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>Ezequias Relojoeiro — Mecânicos são melhores? Tudo o que você precisa saber sobre relógios automáticos.</strong></p><p>O vídeo é uma boa ponte entre a teoria dos movimentos e a observação prática de calibres automáticos.</p><a class="button ghost" href="https://www.youtube.com/watch?v=7YEgj9E2XLI" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício</h5><p>Pesquise três relógios que utilizem NH35, três com Miyota 8215 e três com movimentos suíços ETA ou Sellita. Monte uma tabela com calibre, frequência, reserva de marcha, funções e preço do relógio. O objetivo é perceber como o mesmo movimento pode aparecer em produtos muito diferentes.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.nh35watch.com/" target="_blank" rel="noopener">NH35 Watch — guia do NH35</a><br><a href="https://watchcomplications.com/" target="_blank" rel="noopener">Watch Complications — watchmaking e movimentos</a></div>`},

    {n:'10',title:'Como montar uma coleção',subtitle:'Comprar por lacuna, não por impulso.',body:`
      <h4>Uma boa coleção não precisa ser grande</h4><p>O objetivo de uma coleção é criar um conjunto de relógios que faça sentido para quem os usa. Quantidade, preço e prestígio são métricas secundárias. Uma coleção pode ter três relógios excelentes e coerentes ou dezenas de peças com propostas muito diferentes.</p>
      <h5>Comece pelas ocasiões</h5><p>Antes de comprar, liste as situações que realmente fazem parte da sua vida: cotidiano, trabalho, esporte, eventos sociais, viagens, atividades aquáticas ou ocasiões formais. Isso revela lacunas reais.</p>
      <h5>Crie funções diferentes</h5><p>Uma estrutura simples para iniciantes pode envolver um relógio versátil, um relógio social, uma peça esportiva e, depois, peças adquiridas por interesse histórico, técnico ou emocional.</p>
      <h5>Evite comprar a mesma coisa repetidamente</h5><p>Dois relógios muito parecidos podem ser excelentes individualmente e ainda assim acrescentar pouco à coleção. Antes de comprar, pergunte: <strong>o que este relógio acrescenta que eu ainda não tenho?</strong></p>
      <h5>Preço e impulso</h5><p>Uma coleção saudável deve ser compatível com orçamento e uso real. Desconfie de compras motivadas por urgência artificial, hype ou medo de perder uma oportunidade.</p>
      <div class="lesson-highlight"><strong>Framework de compra:</strong> necessidade → categoria → tamanho → movimento → especificações → orçamento → alternativas → tempo para decidir → compra.</div>
      <div class="lesson-video"><h5>Assista antes de seguir</h5><p><strong>El Hombre — Como montar a sua COLEÇÃO DE RELÓGIOS.</strong></p><p>Vídeo em português que aborda a ideia de construir uma coleção e oferece uma boa introdução à lógica de variedade.</p><a class="button ghost" href="https://www.youtube.com/watch?v=XWMwqmiM62Q" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-video"><h5>Segundo vídeo recomendado</h5><p><strong>Watches by Oliver Smith Jeweler — How to Build a Watch Collection 101.</strong></p><p>Conteúdo em inglês, especialmente útil para pensar em categorias, propósito e evitar uma coleção sem coerência.</p><a class="button ghost" href="https://www.youtube.com/watch?v=jZdHPggq0yQ" target="_blank" rel="noopener">Assistir no YouTube →</a></div>
      <div class="lesson-exercise"><h5>Exercício final</h5><p>Monte uma coleção hipotética de quatro relógios para um iniciante. Para cada peça, defina categoria, movimento, tamanho aproximado, material do cristal, resistência à água, ocasião de uso e orçamento. Depois explique qual é a lacuna que cada relógio preenche.</p></div>
      <div class="lesson-source"><strong>Aprofundamento:</strong><br><a href="https://www.realmenrealstyle.com/watch-collection/" target="_blank" rel="noopener">Real Men Real Style — How To Build A Watch Collection</a><br><a href="https://cnalifestyle.channelnewsasia.com/style-beauty/watch-collecting-tips-how-build-collection-354526" target="_blank" rel="noopener">CNA Lifestyle — conselhos de colecionadores</a></div>`}
  ];

  const items = Array.from(list.querySelectorAll('.training-item')).slice(0, 10);
  items.forEach((node,index)=>{
    const lesson=lessons[index];
    const details=document.createElement('details');
    details.className='training-item lesson';
    details.innerHTML=`<summary><span>${lesson.n}</span><div><h3>${lesson.title}</h3><p>${lesson.subtitle}</p></div><div class="lesson-plus">+</div></summary><div class="lesson-body">${lesson.body}</div>`;
    node.replaceWith(details);
  });
})();
