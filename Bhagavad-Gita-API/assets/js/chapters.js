const queryData = new URLSearchParams(window.location.search);
let activeChapter = parseInt(queryData.get("chapter"), 10);
activeChapter = activeChapter > 0 ? activeChapter : 1;

const headerBox = document.querySelector("#chapterHeader");
const verseBox = document.querySelector("#versesContent");
const sideButtons = document.querySelector("#verseButtons");

fetch("https://vedicscriptures.github.io/chapters")
    .then(response => response.json())
    .then(chapterList => {

        let selected = undefined;

        for (let i = 0; i < chapterList.length; i++) {
            if (chapterList[i].chapter_number === activeChapter) {
                selected = chapterList[i];
                break;
            }
        }

        if (!selected) return;

        headerBox.innerHTML = `
            <h2>Chapter ${selected.chapter_number}: ${selected.name}</h2>
            <p><strong>${selected.verses_count} Verses</strong></p>
        `;

        const verseTotal = selected.verses_count;

        const verseContentArr = Array(verseTotal);
        const verseNavArr = Array(verseTotal);
        let completedFetch = 0;

        function loadSingleVerse(no) {
            fetch(`https://vedicscriptures.github.io/slok/${activeChapter}/${no}`)
                .then(r => r.json())
                .then(data => {

                    const pos = data.verse - 1;
                    const textData =
                        data.translation && data.translation.en
                            ? data.translation.en
                            : data.slok;

                    verseContentArr[pos] = `
                        <div class="mb-5 verse-box" id="verse-${data.verse}">
                            <span class="text-danger fw-bold">
                                Verse ${data.verse}
                            </span>
                            <p>${textData}</p>
                        </div>
                    `;

                    verseNavArr[pos] = `
                        <button class="btn btn-outline-secondary btn-sm"
                                data-target="${data.verse}">
                            ${data.verse}
                        </button>
                    `;

                    completedFetch++;

                    if (completedFetch === verseTotal) {
                        verseBox.innerHTML = verseContentArr.join("");
                        sideButtons.innerHTML = verseNavArr.join("");

                        sideButtons
                            .querySelectorAll("button")
                            .forEach(btn => {
                                btn.addEventListener("click", function () {
                                    jumpVerse(this.dataset.target);
                                });
                            });
                    }
                });
        }

        for (let v = 1; v <= verseTotal; v++) {
            loadSingleVerse(v);
        }

        document.querySelector("#prevChapter").addEventListener("click", () => {
            if (activeChapter > 1) {
                location.search = "?chapter=" + (activeChapter - 1);
            }
        });

        document.querySelector("#nextChapter").addEventListener("click", () => {
            if (activeChapter < chapterList.length) {
                location.search = "?chapter=" + (activeChapter + 1);
            }
        });
    });

function jumpVerse(num) {
    const targetEl = document.getElementById("verse-" + num);
    if (targetEl) {
        targetEl.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
