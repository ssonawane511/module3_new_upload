let url = "https://www.breakingbadapi.com/api/characters";

fetch(url)
.then(
    pandu => pandu.json()
).then(
    panduKbache => {
        panduKbache.forEach((bacha) => {
          console.log(bacha);
            let cardHtml = `
            
            <div class="col-sm-3">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="${bacha.img}"
                  alt="Avatar"
                  style="width: 100%; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <div class="backImg">
                     <img
                  src="${bacha.img}"
                  alt="Avatar"
                  style="width: 100px; height: 100px"
                />
                </div>

                <h1>${bacha.name}</h1>
                <hr>
                <p><strong>Nickname</strong> :  ${bacha.nickname}</p>
                <p><strong>birthday</strong> :  ${bacha.birthday}</p>
                <p><strong>portrayed</strong> :  ${bacha.portrayed}</p>
                
              </div>
            </div>
          </div>
        </div>
            `;

            document
              .getElementById("character_container")
              .insertAdjacentHTML("afterbegin", cardHtml);

        });
    }
)