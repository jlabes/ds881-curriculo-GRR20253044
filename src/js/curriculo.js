async function carregarDados() {
    try {
        const response = await fetch('./data/data.json');
        
        if (!response.ok) {
            throw new Error(`Erro ao carregar JSON: ${response.statusText}`);
        }

        const dados = await response.json();
        renderizarCurriculo(dados);

    } catch (error) {
        console.error("Erro na requisição:", error);
        document.body.innerHTML = `<h1>Erro ao carregar dados do currículo.</h1><p>Certifique-se de que está rodando um servidor local.</p>`;
    }
}

function renderizarCurriculo(dados) {
    document.getElementById("nome").textContent = dados.nome;
    document.getElementById("titulo").textContent = dados.titulo;
    document.getElementById("resumo").textContent = dados.resumo;

    const linksContainer = document.getElementById("links");
    linksContainer.innerHTML = `
        <a href="mailto:${dados.email}">${dados.email}</a>
        <a href="${dados.github}" target="_blank">GitHub</a>
        <a href="${dados.linkedin}" target="_blank">LinkedIn</a>
    `;

    const experenciasContainer = document.getElementById("experiencias");
    experenciasContainer.innerHTML = "";
    dados.experiencias.forEach(exp => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <div class="item-header">
                <span>${exp.cargo}</span>
                <span>${exp.periodo}</span>
            </div>
            <div class="sub-item">${exp.empresa}</div>
            <p>${exp.descricao}</p>
        `;
        experenciasContainer.appendChild(div);
    });

    const formacaoContainer = document.getElementById("formacao");
    formacaoContainer.innerHTML = "";
    dados.formacao.forEach(form => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <div class="item-header">
                <span>${form.curso}</span>
                <span>${form.periodo}</span>
            </div>
            <div class="sub-item">${form.instituicao}</div>
        `;
        formacaoContainer.appendChild(div);
    });

    const habilidadesContainer = document.getElementById("habilidades");
    habilidadesContainer.innerHTML = "";
    dados.habilidades.forEach(hab => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = hab;
        habilidadesContainer.appendChild(span);
    });
}

document.addEventListener("DOMContentLoaded", carregarDados);