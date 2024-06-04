let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    if (menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado")

        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"
    } else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    iconeBarras.style.display = "none"

    iconeX.style.display = "inline"
}

function solicitarOrcamento(event) {
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    let dadosForm = {
        email: valorEmail,
        descricao: valorDescricao
    }

    fetch("http://localhost:3000/socilitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })

        .then(resposta => {
            console.log(resposta);

            document.querySelector("#formulario form").reset()

            alert("Solicitação enviada com sucesso!!!")
        })

        .catch(erro => {
            console.log(erro);

            alert("Erro na requisição")
        })

    event.preventDefault()
}

