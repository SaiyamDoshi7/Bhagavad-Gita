const container = document.querySelector('#chaptersinfo');

if (container) {
    fetch('https://vedicscriptures.github.io/chapters')
        .then(res => res.json())
        .then(chapters => {
            let content = '';

            for (let i = 0; i < chapters.length; i++) {
                const ch = chapters[i];

                const chapterSummary = ch.summary?.en ?? "Summary not available.";
                const chapterName = ch.name_meaning ? ch.name_meaning : ch.name;

                content += `
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 p-3 chapter-card">
                            <h6 class="ch-label">Chapter ${ch.chapter_number}</h6>
                            <h4 class="ch-title">${chapterName}</h4>
                            <p class="ch-summary">${chapterSummary}</p>
                            <div class="counting">
                                <i class="bi bi-list-ul"></i> ${ch.verses_count} Verses
                            </div>
                        </div>
                    </div>
                `;
            }

            container.innerHTML = content;
        })
        .catch(error => {
            console.log("Data load failed:", error);
        });
}
