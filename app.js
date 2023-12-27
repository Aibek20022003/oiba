const input= document.querySelectorAll('input')
const btn=document.querySelector('button')
const olTag=document.querySelector('ol')

let word =  []


function deleteList(lan) {
    word = word.filter(res => res.eng != lan)

    const wordLs = JSON.stringify(word);
    localStorage.setItem('wor', wordLs);
    ShowTodo(word)
}


btn.onclick=()=>{
    const engWord = input[0].value.trim();
    const kyrWord= input[1].value.trim();
    
    
    if (engWord||kyrWord) {
        const wordl = {eng: engWord, kyr:kyrWord};

        word.push(wordl);
        const wordLs = JSON.stringify(word);
        localStorage.setItem('wor', wordLs)
        ShowTodo(word);

        input[0].value = '';
        input[1].value = '';
    }
}

function editbtn(lan){
    const wordEdit = word.find(res =>res.eng === lan);
    if (wordEdit) {
        input[0].value = wordEdit.eng;
        input[1].value = wordEdit.eng;

        word=word.filter(res => res.eng !== lan);

        ShowTodo(word)

        const wordLs = JSON.stringify(word);
       localStorage.setItem('wor', wordLs)
    }
}


const getTodos = JSON.parse(localStorage.getItem('wor')) ;
ShowTodo(getTodos);

function ShowTodo(array){
    olTag.innerHTML='';
    array.forEach(res => {
        olTag.innerHTML += `
        
        <div class='Block-1'>
            <div class='country'>
                <div class='lungenglish'>
                    <p>${res.eng}</p>
                </div>
                <div class='lungkyrgyz'>
                    <p>${res.kyr}</p>
                </div>
            </div>
            <div class='btns-block'>
                    <button class="DeleteBtn" onclick="deleteList('${res.eng}')">Очуру</button> 
                    <button class='EditBtn' onclick="editbtn('${res.eng}')">Карандаш</button>
            </div>
            </div>
        `;
    });
}
