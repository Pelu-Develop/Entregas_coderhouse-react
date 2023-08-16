import micro_ondas from "../Imagens/Micro-ondas_Eletrolux.jpg";
import sanduicheira from "../Imagens/Sanduicheira_Consul.jpg";
import litificador from "../Imagens/Litificador_Modial.webp";

const item = [
  {
    id: 1,
    nome: "Micro-ondas",
    avaliação: "4 estrelas",
    marketing: "A mais vendida, ótimo custo e beneficio",
    descrição: "Micro-ondas da Eletrolux branco, capacidade para 20 litros, 1 ano de de garantia",
    preço: "R$879,00",
    parcelamento: "12 vezes",
    img: micro_ondas,
  },
  {
    id: 2,
    nome: "Sanduicheira",
    avaliação: "4 estrelas",
    marketing: "A mais vendida, ótimo custo e beneficio",
    descrição: "Sanduicheira da Consul, preto com 3 chapas",
    img: sanduicheira,
    preço: "R$150,00",
    parcelamento: "12 vezes",
  },
  {
    id: 3,
    nome: "Litificador",
    avaliação: "4 estrelas",
    marketing: "A mais vendida, ótimo custo e beneficio",
    descrição: "Litificador da Mondial, preto com capacidade para 5 Litros",
    img: litificador,
    preço: "R$200,00",
    parcelamento: "12 vezes",
  },
];

export default item;
