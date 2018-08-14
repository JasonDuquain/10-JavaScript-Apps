



/* COMPLETE

import { API} from './api.js';
import * as UI from './ui.js';

UI.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const artistName = UI.artistInput.value,
          songName = UI.songInput.value;
    
    if (artistName === '' || songName === '') {
        UI.messageDiv.innerHTML = 'err all fields needed';
        UI.messageDiv.classList.add('error');
        setTimeout(() => {
            UI.messageDiv.innerHTML = '';
           UI.messageDiv.classList.remove('error'); 
        }, 1111);
    } else {
        const lyric = new API(artistName, songName);
        lyric.queryAPI()
            .then((data) => {
            if (data.lyric.lyrics) {
                let result = data.lyric.lyrics;
                UI.resultDiv.textContent = result;
            } else {
                UI.messageDiv.innerHTML = 'no lyrics found';
                UI.messageDiv.classList.add('error');
                setTimeout(() => {
                    UI.messageDiv.innerHTML = '';
                    UI.messageDiv.classList.remove('error'); 
                    UI.searchForm.reset();
                }, 1111);
            }
        })
        
    }
    
});

*/







