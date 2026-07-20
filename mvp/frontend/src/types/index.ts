// Interface que define a estrutura de um Lote de produto
export interface Lote {
  id: string           // Identificador único do lote
  produto: string      // Nome do produto
  fornecedor: string   // Nome do fornecedor
  dataEntrada: string  // Data de entrada do lote
  validade: string     // Data de validade
  quantidade: number   // Quantidade em kg ou unidades
  vendaMediaDia: number // Média de venda por dia
  risco: 'critico' | 'alto' | 'moderado' | 'baixo' // Nível de risco
  status: string       // Status atual do lote
  precoCpf: number     // Preço para pessoa física (CPF)
  precoCnpj: number    // Preço para pessoa jurídica (CNPJ)
}

// Interface que define a estrutura de uma Anomalia
export interface Anomalia {
  id: string           // Identificador único
  titulo: string       // Título da anomalia
  filial: string       // Filial onde ocorreu
  descricao: string    // Descrição detalhada
  impacto: string      // Impacto financeiro ou operacional
  tipo: 'divergencia' | 'estoque_minimo' | 'excesso' | 'anomalia' // Categoria
  gravidade: 'alta' | 'media' | 'baixa' // Nível de gravidade
  valor: string        // Valor associado
  causa: string        // Causa identificada
}

// Interface que define a estrutura de um Alerta
export interface Alerta {
  id: string           // Identificador único
  produto: string      // Nome do produto
  lote: string         // Número do lote
  status: 'critico' | 'atencao' // Status do alerta
  motivo: string       // Motivo do alerta
  acao: string         // Ação recomendada
}
