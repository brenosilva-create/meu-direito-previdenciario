import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Lightbulb, Info } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Modernismo Institucional com Humanidade
 * - Clareza radical em informações complexas
 * - Confiança visual com paleta profissional
 * - Humanidade inclusiva com imagens reais
 * - Hierarquia funcional clara
 */

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🛡️ Meu Direito Previdenciário
          </h1>
          <p className="text-lg md:text-xl opacity-95 mb-8 max-w-2xl">
            A Previdência protege você e sua família. Saiba como acessar seus benefícios de forma simples e gratuita.
          </p>
          <Button
            onClick={() => scrollToSection("beneficios")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full"
          >
            📋 Descubra seus direitos agora
          </Button>
        </div>
      </header>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-2 overflow-x-auto">
          {[
            { id: "inicio", label: "Início" },
            { id: "quem-tem-direito", label: "Quem tem direito" },
            { id: "como-contribuir", label: "Como contribuir" },
            { id: "beneficios", label: "Benefícios" },
            { id: "aposentadoria", label: "Aposentadorias" },
            { id: "bpc", label: "BPC/LOAS" },
            { id: "como-pedir", label: "Como pedir" },
            { id: "faq", label: "Perguntas" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-blue-900 font-semibold hover:bg-blue-100 rounded-lg transition-colors whitespace-nowrap text-sm md:text-base"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Section: Quem tem direito */}
        <section id="quem-tem-direito" className="mb-12">
          <Card className="p-8 border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              Quem tem direito à Previdência?
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Todos os trabalhadores que contribuem (ou já contribuíram) para a Previdência Social. A proteção também alcança a família do segurado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "👨‍🏭", title: "Empregado com carteira", desc: "Trabalhador urbano ou rural com CTPS assinada." },
                { icon: "🏠", title: "Empregado doméstico", desc: "Governanta, jardineiro, caseiro, doméstica." },
                { icon: "🛠️", title: "Autônomo / MEI", desc: "Comerciante, ambulante, feirante, microempreendedor." },
                { icon: "🌾", title: "Trabalhador rural", desc: "Agricultor familiar, pescador artesanal (segurado especial)." },
                { icon: "👩‍🎓", title: "Facultativo", desc: "Dona de casa, estudante, desempregado, síndico não remunerado." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-orange-300 transition-colors"
                >
                  <p className="text-2xl mb-2">{item.icon}</p>
                  <p className="font-semibold text-blue-900">{item.title}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-900 rounded">
              <p className="text-blue-900 font-semibold">
                💡 <strong>Importante:</strong> Quem contribui protege a si mesmo e sua família. Mesmo sem renda, você pode contribuir como facultativo.
              </p>
            </div>
          </Card>
        </section>

        {/* Section: Como contribuir */}
        <section id="como-contribuir" className="mb-12">
          <Card className="p-8 border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">💰 Como se filiar e pagar a Previdência</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">🔹 MEI (Microempreendedor Individual)</h3>
                <p className="text-gray-700">
                  Faturamento máximo de R$ 81 mil por ano. Paga <strong>5% do salário mínimo</strong> pelo DAS (Documento de Arrecadação Simplificada) no{" "}
                  <a href="https://www.portaldoempreendedor.gov.br" target="_blank" rel="noopener" className="text-orange-600 hover:underline font-semibold">
                    Portal do Empreendedor
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">🔹 Autônomo (Contribuinte Individual)</h3>
                <p className="text-gray-700 mb-3">Pode contribuir de duas formas:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>Plano normal (20%)</strong> – para todos os benefícios, inclusive aposentadoria por tempo de contribuição.</li>
                  <li><strong>Plano simplificado (11%)</strong> – sobre 1 salário mínimo. Válido para aposentadoria por idade, auxílio-doença, pensão por morte.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">🔹 Trabalhador rural (segurado especial)</h3>
                <p className="text-gray-700">
                  Não precisa contribuir mensalmente, mas precisa comprovar o trabalho no campo com documentos (notas fiscais, declaração de sindicato, certidões).
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-100 border-l-4 border-orange-500 rounded">
              <p className="text-amber-900 font-semibold">
                ⚠️ <strong>Atenção:</strong> O pagamento em dia é essencial. Atrasos podem prejudicar a <strong>carência</strong> (número mínimo de contribuições para ter direito aos benefícios).
              </p>
            </div>
          </Card>
        </section>

        {/* Section: Benefícios */}
        <section id="beneficios" className="mb-12">
          <Card className="p-8 border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">📋 Benefícios da Previdência Social</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Benefício</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Para quem</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Requisito básico</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { benefit: "Aposentadoria por idade", for: "Urbano / Rural", req: "Homem 65 / Mulher 62 + 180 contribuições" },
                    { benefit: "Aposentadoria rural", for: "Trabalhador do campo", req: "Homem 60 / Mulher 55 + 180 meses de atividade rural" },
                    { benefit: "Aposentadoria por invalidez", for: "Incapacidade total e permanente", req: "12 contribuições (dispensa em acidente de trabalho)" },
                    { benefit: "Auxílio-doença", for: "Doença temporária", req: "12 contribuições (algumas doenças não exigem carência)" },
                    { benefit: "Pensão por morte", for: "Família (cônjuge, filhos)", req: "Segurado na data do óbito (não exige carência mínima)" },
                    { benefit: "Salário-maternidade", for: "Mãe ou pai adotante", req: "120 dias. Empregada não precisa de carência; autônoma precisa de 10 contribuições" },
                    { benefit: "Salário-família", for: "Trabalhador de baixa renda", req: "Filhos até 14 anos ou inválidos. Renda dentro do limite do governo." },
                    { benefit: "Auxílio-reclusão", for: "Dependentes de preso", req: "Último salário do segurado até R$ 1.621,00 (valor atual)" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 p-3 font-semibold text-gray-800">{row.benefit}</td>
                      <td className="border border-gray-300 p-3 text-gray-700">{row.for}</td>
                      <td className="border border-gray-300 p-3 text-gray-700 text-sm">{row.req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-green-100 border-l-4 border-green-600 rounded">
              <p className="text-green-900 font-semibold">
                💡 <strong>Dica:</strong> Guarde todos os seus documentos de trabalho, carteira de trabalho, holerites e comprovantes de contribuição. Eles são essenciais para pedir seu benefício.
              </p>
            </div>
          </Card>
        </section>

        {/* Section: Aposentadoria Especial */}
        <section id="aposentadoria" className="mb-12">
          <Card className="p-8 border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">🏭 Aposentadoria Especial e Conversão de Tempo</h2>
            <p className="text-gray-700 mb-6">
              Para quem trabalhou exposto a <strong>agentes nocivos</strong> (químicos, físicos, biológicos) que prejudicam a saúde.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-2">
              <li>Tempo exigido: <strong>15, 20 ou 25 anos</strong> (depende do agente).</li>
              <li>Não incide Fator Previdenciário – você recebe 100% do salário de contribuição.</li>
              <li>É preciso comprovar com <strong>PPP</strong> (Perfil Profissiográfico Previdenciário) e <strong>LTCAT</strong> (Laudo Técnico).</li>
            </ul>
            <div className="p-4 bg-amber-100 border-l-4 border-orange-500 rounded">
              <p className="text-amber-900 font-semibold">
                ⚠️ <strong>Não completou o tempo especial?</strong> Você pode <strong>converter</strong> o tempo especial em tempo comum (usando um multiplicador) e somar para outra aposentadoria.
              </p>
            </div>
          </Card>
        </section>

        {/* Section: BPC/LOAS */}
        <section id="bpc" className="mb-12">
          <Card className="p-8 border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">🆘 BPC/LOAS – Benefício Assistencial</h2>
            <p className="text-gray-700 mb-6">
              Para quem <strong>nunca contribuiu</strong> para a Previdência, mas precisa de ajuda do governo.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-2">
              <li><strong>Idoso:</strong> 65 anos ou mais.</li>
              <li><strong>Pessoa com deficiência:</strong> de qualquer idade, com impedimento de longo prazo.</li>
              <li><strong>Renda familiar:</strong> inferior a 1/4 do salário mínimo <strong>por pessoa</strong> da família.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              O BPC <strong>não pode ser acumulado</strong> com aposentadoria ou pensão. Para solicitar, procure o <strong>CRAS</strong> mais próximo ou ligue 135.
            </p>
            <div className="p-4 bg-blue-100 border-l-4 border-blue-900 rounded">
              <p className="text-blue-900 font-semibold">
                🧒 Crianças com <strong>microcefalia</strong> também têm direito ao BPC por até 3 anos, podendo ser prorrogado.
              </p>
            </div>
          </Card>
        </section>

        {/* Section: Como pedir */}
        <section id="como-pedir" className="mb-12">
          <Card className="p-8 border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">📱 Como pedir seus benefícios sem sair de casa</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Você não precisa enfrentar filas na agência do INSS. Use os canais digitais:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: "📱",
                  title: "Meu INSS",
                  desc: "Site/app: meu.inss.gov.br – Faça agendamento, consultas e peça benefícios.",
                  link: "https://meu.inss.gov.br",
                },
                {
                  icon: "📞",
                  title: "Telefone 135",
                  desc: "Gratuito de telefone fixo. Atendimento de segunda a sexta, 7h às 22h.",
                  link: null,
                },
                {
                  icon: "🏢",
                  title: "CRAS",
                  desc: "Para BPC/LOAS – Centro de Referência de Assistência Social mais próximo.",
                  link: null,
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-orange-300 transition-colors">
                  <p className="text-3xl mb-2">{item.icon}</p>
                  <p className="font-semibold text-blue-900 mb-2">{item.title}</p>
                  <p className="text-gray-700 text-sm">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener" className="text-orange-600 hover:underline font-semibold">
                        {item.desc}
                      </a>
                    ) : (
                      item.desc
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-green-100 border-l-4 border-green-600 rounded">
              <p className="text-green-900 font-semibold">
                💡 <strong>Cadastro no Meu INSS:</strong> Tenha em mãos CPF, carteira de trabalho e documentos. O sistema faz perguntas sobre sua vida laboral para confirmar sua identidade.
              </p>
            </div>
          </Card>
        </section>

        {/* Section: FAQ */}
        <section id="faq" className="mb-12">
          <Card className="p-8 border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">❓ Perguntas frequentes (simples e direto)</h2>

            <div className="space-y-6">
              {[
                {
                  q: "Posso trabalhar e receber aposentadoria?",
                  a: "Sim, exceto a aposentadoria por invalidez. Se você se recuperar, o benefício pode ser cancelado.",
                },
                {
                  q: "MEI tem direito a todos os benefícios?",
                  a: "Sim, desde que mantenha o pagamento do DAS em dia. Tem direito a aposentadoria por idade, auxílio-doença, salário-maternidade, pensão por morte, etc.",
                },
                {
                  q: "Trabalhador rural sem documento – como comprovar?",
                  a: "Use contratos de arrendamento, notas fiscais, declaração do sindicato, certidão de casamento ou nascimento que mostre atividade rural, carteira de vacinação, títulos de propriedade rural, entre outros.",
                },
                {
                  q: "Perdi meu emprego, ainda tenho direito?",
                  a: "Sim. Você mantém a qualidade de segurado por até 12, 24 ou 36 meses (período de graça), dependendo do tempo que contribuiu.",
                },
                {
                  q: "O INSS negou meu benefício. O que fazer?",
                  a: "Você pode recorrer da decisão. Procure um advogado ou a Defensoria Pública. Muitos direitos são negados por falta de documentação – não desista!",
                },
                {
                  q: "O que é carência?",
                  a: "É o número mínimo de contribuições mensais para ter direito ao benefício. Geralmente 180 meses (15 anos) para aposentadoria, ou 12 meses para auxílio-doença.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">🔹 {item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="p-8 border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">⚖️ Precisa de ajuda jurídica?</h2>
            <p className="text-gray-700 mb-6">
              Se o INSS negar seu direito ou se você tiver dificuldades, não hesite em procurar um advogado de sua confiança.
            </p>
            <div className="p-4 bg-blue-100 border-l-4 border-blue-900 rounded">
              <p className="text-blue-900 font-semibold">
                📌 <strong>Lembre-se:</strong> Este site é informativo. Para casos concretos, consulte um advogado.
              </p>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-orange-500 font-bold text-lg mb-4">👩‍🏫 PROFESSORA ORIENTADORA</p>
            <p className="text-white font-semibold">Ana Paula Lima Cardoso da Silveira</p>
          </div>

          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>

          <div className="text-center mb-8">
            <p className="text-orange-500 font-bold text-lg mb-4">👨‍🎓 ALUNOS</p>
            <div className="space-y-1 text-white font-semibold">
              <p>Jamile dos Santos Porto</p>
              <p>Breno Silva Teixeira</p>
              <p>Nathali Souza Silva</p>
              <p>Romilson Reian N. E Nogueira</p>
              <p>Lourrane Nogueira</p>
            </div>
          </div>

          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>

          <div className="text-center border-t border-gray-700 pt-6">
            <p className="mb-2">
              📞 Central INSS: <strong>135</strong> |{" "}
              <a href="https://meu.inss.gov.br" target="_blank" rel="noopener" className="text-orange-500 hover:text-orange-400 font-semibold">
                🌐 Meu INSS
              </a>
            </p>
            <p className="text-sm">© 2026 - Projeto informativo de extensão universitária</p>
            <p className="text-xs text-gray-500 mt-2">Conteúdo baseado em fontes oficiais da Previdência Social</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-900 hover:bg-orange-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-40"
          aria-label="Voltar ao topo"
        >
          ⬆️
        </button>
      )}
    </div>
  );
}
