const page_1 = document.getElementById("page_1");
const page_2 = document.getElementById("page_2");
const page_3 = document.getElementById("page_3");
const page_4 = document.getElementById("page_4");
const page_5 = document.getElementById("page_5");
const loopBtn = document.getElementById("loopBtn");
const moreBtn = document.getElementById("moreBtn");
const bckToPg2 = document.getElementById("bckToPg2");
const viewAll = document.getElementById("viewAllBtn");
const showAll = document.getElementById("showAll");
const sugBtn = document.getElementById("sugBtn");
const submitBtn = document.getElementById("submitBtn");
const reStartBtn = document.getElementById("reStartBtn");
const otherSuggBtn = document.getElementById("otherSuggBtn");
const textArea = document.getElementById("textArea");
const userSuggestion = document.getElementById("suggestion");
const formSug = document.getElementById("formSug");

// Cambios de página
loopBtn.addEventListener("click", () => {
    page_1.classList.remove("show");
    page_1.addEventListener('transitionend', () => {
        page_1.classList.add("d-none");
        page_2.classList.remove("d-none");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                page_2.classList.add("show");
            })
        })
    }, { once: true })
})
sugBtn.addEventListener("click", () => {
    page_2.classList.remove("show");
    page_2.addEventListener('transitionend', () => {
        page_2.classList.add("d-none");
        page_3.classList.remove("d-none");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                page_3.classList.add("show");
            })
        })
    }, { once: true })
})
viewAll.addEventListener("click", () => {
    page_2.classList.remove("show");
    page_2.addEventListener('transitionend', () => {
        page_2.classList.add("d-none");
        page_5.classList.remove("d-none");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                page_5.classList.add("show");
            })
        })
    }, { once: true })
})
bckToPg2.addEventListener("click", () => {
    page_5.classList.remove("show");
    page_5.addEventListener('transitionend', () => {
        page_5.classList.add("d-none");
        page_2.classList.remove("d-none");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                page_2.classList.add("show");
            })
        })
    }, { once: true })
})
otherSuggBtn.addEventListener("click", () => {
    page_4.classList.remove("show");
    page_4.addEventListener('transitionend', () => {
        page_4.classList.add("d-none");
        page_3.classList.remove("d-none");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                page_3.classList.add("show");
            })
        })
    }, { once: true })
})
reStartBtn.addEventListener("click", () => {
    page_4.classList.remove("show");
    page_4.addEventListener('transitionend', () => {
        page_4.classList.add("d-none");
        page_1.classList.remove("d-none");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                page_1.classList.add("show");
            })
        })
    }, { once: true })
})

// Lógica de arrays en loops
const Sujects = ["Elpowerranger", "Elnegro", "Elfuncionario", "Elpresidente", "Elcura", "Elprofesor"];
const adj = ["drogadicto", "estafador", "millonario", "esclavista", "mafioso", "malandro", "exorcista"];
const dom = [".io", ".com", ".net", ".org"];
const allComb = [];
for (let i = 0; i < Sujects.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < dom.length; k++) {
            allComb.push(Sujects[i] + adj[j] + dom[k])
        }
    }
}
showAll.value = allComb.join("\n");
function freeTaste() {
    let justShowing = ""
    for (let i = 1; i < 10; i++) {
        let randomFreeTaste = allComb[Math.floor(Math.random() * allComb.length)];
        console.log(randomFreeTaste)
        justShowing += randomFreeTaste + "\n"
    }
    return justShowing
}
loopBtn.addEventListener("click", () => {
    freeTaste()
    textArea.value = freeTaste()
})
moreBtn.addEventListener("click", () => {
    freeTaste()
    textArea.value = freeTaste()
})

// Sugerencias
const request_1 = document.getElementById("r-1");
const request_2 = document.getElementById("r-2");
const request_3 = document.getElementById("r-3");
const request_4 = document.getElementById("r-4");
const request_5 = document.getElementById("r-5");
const request_6 = document.getElementById("r-6");
const suggestions = [];
const request = [request_1, request_2, request_3, request_4, request_5, request_6];

formSug.addEventListener("submit", (newSug) => {
    newSug.preventDefault()
    userSuggestion.value = "";
    const pushNewSugg = userSuggestion.value.trim();
    suggestions.push(pushNewSugg);
    request.forEach((resetRequest) => {
        resetRequest.classList.add("d-none");
    });
    const randomRequest = [Math.floor(Math.random() * request.length)]
    page_3.classList.remove("show");
    page_3.addEventListener('transitionend', () => {
        page_3.classList.add("d-none");
        page_4.classList.remove("d-none");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                page_4.classList.add("show");
                request[randomRequest].classList.remove("d-none")
            })
        })
    }, {once: true})
});














