// MENU MOBILE
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// LISTA DE VOLUNTÁRIOS
let voluntarios = [];

// SUBMISSÃO DO FORMULÁRIO
function handleSubmit(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const disponibilidade = document.getElementById("disponibilidade").value;
    const area = document.getElementById("area").value;

    voluntarios.push({
        nome,
        email,
        telefone,
        disponibilidade,
        area
    });

    document.getElementById("volunteerForm").reset();
    document.getElementById("successMessage").style.display = "block";

    exibirVoluntarios();
}

// GERAR TABELA
function exibirVoluntarios() {
    const tabela = document.getElementById("tabelaVoluntarios");

    if (voluntarios.length === 0) {
        tabela.innerHTML = "<p>Nenhum voluntário cadastrado ainda.</p>";
        return;
    }

    let html = `
        <table border="1" cellpadding="8" style="width:100%; border-collapse: collapse; text-align:center;">
            <tr style="background:#ddd;">
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Disponibilidade</th>
                <th>Área</th>
            </tr>
    `;

    voluntarios.forEach(v => {
        html += `
            <tr>
                <td>${v.nome}</td>
                <td>${v.email}</td>
                <td>${v.telefone}</td>
                <td>${v.disponibilidade}</td>
                <td>${v.area}</td>
            </tr>
        `;
    });

    html += "</table>";

    tabela.innerHTML = html;
}
