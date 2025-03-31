"use client";

import { useState } from "react";

const Script: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const scriptPages = [
    `Första natten (mordfri):\nNu… faller nattens skuggor över Salem.\nJag ber er, att blunda.\n\nNaturens Helare… vakna. \nVem vill du vaka över denna natt? \nLåt skogen vägleda dig.\nSomna igen.\n\nHäxorna… vakna.\nSe varandra nu.\nNi känner nu era systrar i mörkret.\nVem blir erat första offer?\n Somna.\n\nTankeläsaren… vakna.\nVem vill du läsa av denna natt?\nSomna.\n\nMorgonen gryr… Dags att vakna.`,
    `Första dagen (diskussion):\nNi vaknar… och märker att ingen föll.\nMen… varför?\n\nVar det ett varnande tecken från mörkret?\nEtt spel?\nEn häxas list?\nNi vet nu…\nnågon i denna krets bär på hemligheter som väger tyngre än bly.\n\nNi får nu fem minuter att tala.\nVem tvekar när de talar?\nVem möter inte era blickar?\nVem är ute efter blod?\nDiskutera!`,
    `Efter diskussionen – plottwist:\nTiden är ute. Salem kräver handling.\n\nNi ska nu rösta.\nMen…\ninte för att döma till döden.\n\nDen som pekas ut av byn kommer\natt förlora sin rätt att\ntala under nästa dag.\nEn röst som kvävs i skam.\n\nRösta nu.\nDen som får flest pekningar…\nfår sin röst fråntagen.\n\n(Låt alla rösta)\n\nBeslutet är fattat.\nUnder nästa dag…\nska denna själ tystna.\n\nNu… faller natt nummer två.\nOch denna gång…\nvilar inte ondskan.`,

    `Andra natten:\nNatten faller över Salem.\n\nMen naturens helare vaknar nu.\nPeka på den du vill skydda med din växtmagi.\n\nSomna igen, helare.\n\nNu vaknar de förtappade… häxorna som just nu sviker sitt systraskap. Öppna era ögon. Vem vill ni förgöra i natt?\n\nSov, förtappade själar.\n\nNu vaknar tankeläsaren. Vem vill du läsa ikväll genom din telepatiska kraft?\n\nSov, tankeläsare.\n\nMorgonen gryr… Öppna era ögon.`,
    `Scenario efter natten: \n\nOm någon dog: \nNär ni vaknar möts ni av en hemsk syn… \n[Namn] hittades förhäxad och livlös. \nEn själ har gått förlorad. \n\nOm läkaren skyddat offret: \nEn mordisk kraft försökte slå till denna natt… \nmen någon höll en skyddande hand över byn. \nOffret är oskatt.`,
    `Andra dagen:\nNu, mina vänner, är det dags för rådslag.\nHäxjakten har börjat.\n\nNi får 5 minuter att diskutera. Låt era misstankar styra er.\n\nMen kom ihåg — en häxas röst kan vara lika ljuvlig som förgörande.\n\n Efter diskussion: \nNu är det dags för anklagelser.\nEn efter en får försvara sig. Därefter röstar vi.`,

    `Tredje natten:\nNatten faller tung över Salem.\n\nNaturens Helare — vakna. Vem vaktar du i natt? Vem ska skogen skydda från förgörelse?\n\nSomna om.\n\nHäxorna… ni förtappade, vakna. Era hjärtan bultar i mörkret. Vem ska ni tysta för evigt denna natt?\n\nSomna… låt natten hålla ert löfte.\n\nTankeläsaren, vakna.\nLåt din kraft sväva. Vems hemligheter vill du höra viskas i vinden?\n\nSov igen.\n\nMorgonen gryr… Mitt systraskap, öppna era ögon.`,
    `Om någon dog:\nEn kropp hittas vid brunnen… förhäxad, tom och kall. Salem, en av er är borta: [Namn].\n\nOm läkaren skyddade:\nMörkret försökte slå till denna natt… men en osynlig kraft höll dem borta. Ingen dog.`,
    `Tredje dagen:\nMisstankarna växer.\nSalem kräver sanningar.\nNi får 5 minuter att diskutera. Titta varandra i ögonen…\nLögner bär doften av rök och aska.\n\nNu är det tid för anklagelse. En efter en, få ordet.\nFörklara er, och sedan — rösta.`,
    `Om den utpekade är en häxa:\nNi hör hennes skratt innan röken slukar henne. En förtappad själ har avslöjats… men hur många återstår?\n\nOm det var en oskyldig:\nEtt hjärtskärande rop fyller torget. Salem valde fel.\nBlodet på era händer är lika verkligt som förbannelsen.`,

    `Fjärde natten:\nSkuggorna kryper närmare.\nAlla, blunda.\n\nNaturens Helare — vakna.\nVem skyddar du i natt? Låt örterna leda dig rätt.\n\nSov.\n\nHäxorna… vakna.\nVem ska falla för er förtrollning denna natt?\n\nSov.\n\nTankeläsaren… vakna.\nLäs ännu en själ i natt. Vem bär på mörka tankar?\n\nSov.\n\nMorgonen gryr… Salem, vakna.`,
    `Om någon dött:\nEn kropp hittas vid kyrktrappan… förhäxad, död. [Namn] är borta.\n\nOm räddad:\nOndskan försökte slå till… men någon höll vakt. Ingen föll denna natt.`,
    `Fjärde dagen:\nNi känner det nu… skuggorna är nära. \nVarje ord kan rädda eller förgöra.\n\n(Sätt timer.)\n\nAnklaga… tala… rösta.`,
    `Om häxa röstas ut:\nEn skräckinjagande viskning hörs innan röken tar henne. Salem har tagit ett steg mot ljuset.\n\nOm oskyldig:\nÅh Salem… ni tvivlar, och tvivlet förgör. En oskyldig själ har tystats.`,

    `Femte natten:\nDetta kan vara den sista natten…\nAlla blundar.\n\nHelare, vakna.\nVem vill du vaka över?\n\nHäxorna… vakna.\nVem tar ni i natt?\n\nTankeläsaren… vakna.\nVem vill du lyssna till ikväll?\n\nMorgonen gryr… öppna era ögon.`,
    `Död:\nEn kropp hittas i skogens kant… förhäxad, livlös. [Namn] har fallit.\n\nRäddad:\nEtt försök gjordes… men skyddet höll. Salem drar andan ännu en dag.`,
    `Femte dagen: Det avgörande rådet:\nSalem… detta kan vara er sista chans.\n5 minuter. Tänk, tala, våga anklaga.\nVem bland er bär mörkret?\n\n(Sätt timer.)\n\nAnklaga nu… rösta. Det finns ingen morgondag.`,

    `Om sista häxan avslöjas:\nRöken skingras… ondskan är besegrad. Salem kan andas igen.\n\nOm oskyldig röstas ut och häxor återstår:\nSalem har talat… men mörkret skrattar.\nNär natten faller igen… faller Salem för gott.`,
  ];

  const nextPage = () => {
    if (currentPage < scriptPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Funktion för att omvandla '\n' till <br />-taggar
  const renderTextWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-center bg-stone-900 p-6 pb-14 shadow-lg w-2/4 relative">
      <div className="text-2xl bg-stone-800 text-left p-4 bg-gray-700 w-full h-150 overflow-y-auto">
        {renderTextWithLineBreaks(scriptPages[currentPage])}
      </div>

      <div className="flex gap-4 absolute top-158">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2  border-white border-1 bg-stone-900 hover:bg-stone-950 text-white font-bold transition ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          ⬅
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === scriptPages.length - 1}
          className={`px-4 py-2 border-white border-1 bg-stone-900 hover:bg-stone-950 text-white font-bold transition ${
            currentPage === scriptPages.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}>
          ➡
        </button>
      </div>
    </div>
  );
};

export default Script;
