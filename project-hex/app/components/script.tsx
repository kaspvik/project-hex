"use client";

import { useState } from "react";

const Script: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const scriptPages = [
    `INLEDNING:

Mörkret har sänkt sig över Salem. Klockorna i byn har slutat slå, liksom hjärtat på ännu en oskyldig själ. Någon bland oss har kallat på mörka krafter… och nu förgör de oss inifrån.

Ni som står här är de sista överlevarna av ett systraskap en gång fylld av liv. Men svekets gift rinner i luften. Häxjägarna säger att det är vi som är de skyldiga, att vi alla är smittade av mörk magi… men jag säger er: någon ibland oss ljuger.`,

    `INLEDNING: 

Ni har redan valt en plats, och därmed har ni redan valt era öden. Ni har alla framför er ett kort. Som innehåller era krafter… och eran förbannelser. Men var försiktiga, att avslöja er sanna identitet är lika med en dödsdom.

Innan ni öppnar era brev, hör följande:`,

    `ROLLGENOMGÅNG:
Varje själ här inne bär på en roll. Lyssna noga, för om natten faller och du inte vet vem du är… kommer du att bli det första offret.

DE TROFASTA:
Ni är de sista oskyldiga själarna i Salem. Ni har inga magiska krafter, bara er instinkt och ert förstånd. Ert mål är att överleva… och att finna de som bär ondskan inom sig.

NATURENS HELARE:
Du är skogens beskyddare, en vandrare mellan liv och död. Varje natt kan du hela en själ och skydda den från döden. Men var försiktig, om häxorna upptäcker vem du är, kommer de att söka ditt huvud först.

TANKELÄSAREN:
Du är den enda som ser genom lögner. Varje natt kan du blicka in i en själ och avslöja om den bär mörker inom sig, om den är en häxa. Men dina krafter är farliga… Häxorna kommer att göra allt för att tysta dig innan du finner sanningen.

DEM FÖRRÄDISKA:
Ni har brutit ederna och svikit ert systraskap. Ni har givit er själ till en mörkare kraft. Varje natt samlas ni i skuggorna och väljer ut en själ att förgöra. Ert mål är att förvrida sanningen och få dem trofasta att döda varandra… tills inget ljus finns kvar.`,

    `REGLER:
Spelet pågår i två faser: Natt och Dag.

NATTEN:
- Alla blundar.
- Först vaknar Naturens Helare och väljer någon att beskydda.
- Sedan vaknar den onda Häxorna och pekar ut sitt offer.
- Därefter vaknar Tankeläsaren och pekar på någon. Spelledaren nickar om personen är ond eller skakar på huvudet om personen är oskyldig.

DAGEN:
- Spelledaren berättar nattens händelser.
- Spelarna diskutera i några minuter för att lista ut vem som är en ond häxa.
- Därefter röstar vi på en person att brännas på bål. Den som får flest röster dör och avslöjar sin sanna identitet.
- Om det finns fler personer med samma antal röster, beskådas dem ifrån döden.
- Sedan faller natten på nytt.

MÅLET:
Dem goda vinner: 
om alla häxor är brända.

Häxorna vinner: 
om de blir fler än dem goda.`,

    `Och nu, mina vänner… är det dags att dra era kort. Salem håller andan. Mörkret viskar… Och om några minuter faller den första natten. Jag kommer att kalla på er`,

    `Det var en gång sex systrar – bundna av blod och magi, födda i skogens djup där månens ljus dansade över rötterna. De var de sista av sin släkt, arvtagare till en uråldrig kunskap som förts vidare från mor till dotter, från natt till natt.  

I åratal hade de svurit att stå enade, att skydda varandra och bevara balansen mellan liv och död, ljus och mörker. Men nu, denna natt, sitter de samlade i en cirkel av vaxljus och skuggor – för något har förändrats.  

Några härinne har svikit systraskapet.  (Blixt)

Den sista blodmånens natt föll en förbannelse över skogen. Blommor svartnade, djur flydde, och vinden bar med sig viskningar om ond magi. Några av dem har brutit eden, vandrat en stig av mörker och utövat krafter som inte hör hemma i deras krets. De ser på varandra över lågorna – blickar fyllda av tvivel, kärlek och skräck.  

Vem av dem har skändat deras namn? Vem har kallat på det som inte borde kallas? Och viktigast av allt… kommer de att finna förrädaren innan det är för sent?  

Nattens prövning kan nu påbörjas.`,

    `Första natten (mordfri): 
    
    Nu… faller nattens skuggor över Salem.
    Jag ber er, att blunda.
    
    Naturens Helare… vakna.
    Vem vill du vaka över denna natt? 
    Somna igen.
    
    Häxorna… vakna.
    Ni känner nu era systrar i mörkret.
    Vem blir erat första offer?
    Somna.
    
    Tankeläsaren… vakna.
    Vem vill du läsa av denna natt?
    Somna.
    
    Morgonen gryr… Dags att vakna.`,

    `Första dagen (diskussion):
    Ni vaknar… och märker att ingen föll.
    
    Var det ett varnande tecken från mörkret?
    Ett spel? En häxas list? Vem vet…
    
    Någon i denna krets bär på hemligheter som väger tyngre än bly.
    Ni får nu tid för att tala.
    
    Vem tvekar? Vem möter inte blickar?
    Vem är ute efter blod? Diskutera!`,

    `Efter diskussionen:
    Tiden är ute. Och vi ska nu gå till handling.
    Ni ska nu rösta. Men… inte för att döma till döden.
    
    Den som pekas ut kommer 
    att förlora sin rätt att 
    tala under nästa dag.
    
    Rösta nu. Den som får flest pekningar…
    får sin röst fråntagen.
    
    (Låt alla rösta)
    
    Beslutet är fattat. Under nästa dag…
    ska denna själ tystna.
    
    Nu… faller natt nummer två.
    Och denna gång… vilar inte ondskan.`,

    `Andra natten:
    Natten faller återigen över systraskapet.

    Men naturens helare vaknar nu.
    Peka på den du vill skydda med din växtmagi.
    Somna igen.
    
    Nu vaknar de förtappade… 
    häxorna som just nu sviker sitt systraskap. 
    Öppna era ögon. Vem vill ni förgöra i natt?
    
    Sov, förtappade själar.
    Nu vaknar tankeläsaren. 
    Vem vill du läsa av ikväll?
    Sov, tankeläsare.
    
    Morgonen gryr… Öppna era ögon.`,

    `Andra dagen: 
    
    Om någon dog: 
    När ni vaknar möts ni av en hemsk syn… 
    [Namn] hittades förhäxad och livlös. 
    En själ har gått förlorad. 
    
    Om läkaren skyddat offret: 
    En mordisk kraft försökte slå till denna natt… men någon höll en skyddande hand över byn. Offret är oskatt.

    Nu, mina vänner, är det dags för rådslag.
    Häxjakten har börjat. 
    
    Ni får återigen tid att diskutera. Låt era misstankar styra er.
    
    Men kom ihåg — en häxas röst kan vara lika ljuvlig som förgörande.`,

    `Efter diskussion: 

    Nu är det dags för anklagelser. 
    En efter en får försvara sig. 
    Därefter röstar vi.
    
    När alla har röstat:
  
    Är du en häxa?

    Om häxa: 
    En förtappad själ har avslöjats.
    Ni hör hennes skratt innan röken slukar henne. Skrattet ekar i natten, likaså en förbannelse.

    Välj ut en ur systraskapet som förlorar sin röst nästkommande dag.

    Om oskyldig:
    En oskyldig själ har tystats.
    Mörkret skrattar, och det är dags för natten att falla igen.`,

    `Tredje natten: 
    Natten faller tung över Salem.
    
    Naturens Helare — vakna. Vem vaktar du i natt? Vem ska skogen skydda från förgörelse? Somna om.
    
    Häxorna… ni förtappade, vakna. Era hjärtan bultar i mörkret. Vem ska ni tysta för evigt denna natt? Somna… låt natten hålla ert löfte.
    
    Tankeläsaren, vakna. Låt din kraft sväva. Vems hemligheter vill du höra viskas i vinden? Sov igen.
    
    Morgonen gryr… Mitt systraskap, öppna era ögon.`,

    `Tredje dagen: 

    Om oskyldig: En kropp hittas vid brunnen… förhäxad, tom och kall. Systraskapet, en av er är borta: [Namn].
    
    Om läkaren skyddade: Mörkret försökte slå till denna natt… men en osynlig kraft höll dem borta. Ingen dog.

    Nu, mina vänner, är det dags för rådslag.
    Häxjakten har börjat. 
    
    Ni får återigen tid att diskutera. Låt era misstankar styra er.`,

    `Efter diskussion:
    Nu är det dags för anklagelser.
    Ingen tid att förlora. Vem är en häxa?

    Om häxa: 
    Ni hör hennes skratt innan röken slukar henne. En förtappad själ har avslöjats… men hur många återstår? 
    
    Om det var en oskyldig: 
    Ett hjärtskärande rop fyller torget. Ni valde fel. Blodet på era händer är lika verkligt som förbannelsen.`,

    `Fjärde natten:
    Skuggorna kryper närmare. Alla, blunda.
    
    Naturens Helare — vakna.
    Vem skyddar du i natt? 
    Sov.
    
    Häxorna… vakna. Vem ska falla för er förtrollning denna natt?
    Sov.
    
    Tankeläsaren… vakna.
    Läs ännu en själ i natt. Vem bär på mörka tankar?
    Sov.
    
    Morgonen gryr… Dags att vakna.`,

    `Fjärde dagen:
    Om någon dött:
    En kropp hittas vid kyrktrappan… förhäxad, död. [Namn] är borta. 
    
    Om räddad:
    Ondskan försökte slå till… men någon höll vakt. Ingen föll denna natt.

    Ni känner det nu… skuggorna är nära. 
    Varje ord kan rädda eller förgöra.
    
    Anklaga… tala… rösta.`,

    `Efter diskussion:

    Vem är en häxa? Rösta nu. Den som får flest röster… bränns på bål.

    Om häxa röstas ut:
    En skräckinjagande viskning hörs innan röken tar henne. Salem har tagit ett steg mot ljuset. Ni är nära nu. Och det är dags för natten att falla igen.
    
    Om oskyldig: Åh Salem… ni tvivlar, och tvivlet förgör. En oskyldig själ har tystats. Och det är dags för natten att falla igen.`,

    `Femte natten:
    Detta kan vara den sista natten…
    
    Helare, vakna. Vem vill du vaka över?
    
    Häxorna… vakna. Vem tar ni i natt?
    
    Tankeläsaren… vakna. Vem vill du lyssna till ikväll?
    
    Morgonen gryr… öppna era ögon.`,

    `Femte dagen:
    
     Om död:
     En kropp hittas i skogens kant… förhäxad, livlös. [Namn] har fallit.
     
     Räddad:
     Ett försök gjordes… men skyddet höll. Salem drar andan ännu en dag.`,

    `Det avgörande rådet:
    Systraskapet, detta kan vara er sista chans. Tänk, tala, våga anklaga. 
    Vem bland er bär mörkret?
    
    (Sätt timer)
    
    Anklaga nu… rösta. Det finns ingen morgondag.`,

    `Om sista häxan avslöjas:
    
    Röken skingras… ondskan är besegrad. Salem kan andas igen. Ni har besegrat mörkret. Ni är de sanna hjältarna.
    Ni har vunnit spelet. Ni har vunnit natten. Ni har räddat systraskapet.

    Om oskyldig röstas ut och häxor återstår:
    Salem har talat… men mörkret skrattar.
    En oskyldig själ har tystats. Ni har förlorat spelet. Ni har förlorat natten.
    Ni har förlorat systraskapet.`,
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
  const renderText = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-center bg-stone-900/30 p-6 pb-14 shadow-lg w-[600px] relative">
      <div className="text-2xl bg-stone-900/80 text-left p-4 w-full h-150 overflow-y-auto">
        {renderText(scriptPages[currentPage])}
      </div>

      <div className="flex gap-4 absolute top-158">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2  border-white border-1 bg-stone-900/30 hover:bg-stone-950 text-white font-bold transition ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          ⬅
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === scriptPages.length - 1}
          className={`px-4 py-2 border-white border-1 bg-stone-900/30 hover:bg-stone-950 text-white font-bold transition ${
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
