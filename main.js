const produtos = [
    {
      nome: "Halter",
      categoria: "Musculação",
      quantidade: 20,
      preco: 75.00
    },
    {
        nome: "Esteira",
      categoria: "Cardio",
      quantidade: 5,
      preco: 2800.00
    },
    {
        nome: "Colchonete",
      categoria: "Acessório",
      quantidade: 25,
      preco: 55.00
    },
    {
        nome: "Bicicleta ergométrica",
      categoria: "Cardio",
      quantidade: 6,
      preco: 1600.00
    },
    {
        nome: "Step de aeróbica",
      categoria: "Cardio",
      quantidade: 12,
      preco: 110.00
    },
    {
        nome: "Anilha",
      categoria: "Musculação",
      quantidade: 40,
      preco: 90.00
    },
    {
        nome: "Barra olímpica",
      categoria: "Musculação",
      quantidade: 4,
      preco: 450.90
    },
    {
        nome: "Corda de pular",
      categoria: "Acessório",
      quantidade: 30,
      preco: 35.00
    },
    {
        nome: "Caneleira de peso",
      categoria: "Musculação",
      quantidade: 20,
      preco: 60.00
    },
    {
        nome: "Elástico de resistência",
      categoria: "Acessório",
      quantidade: 50,
      preco: 45.00
    },
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }