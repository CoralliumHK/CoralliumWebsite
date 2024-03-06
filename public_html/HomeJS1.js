logo.onmouseenter = function(){
    logo.classList.add('logohovered');
    logo_words1.classList.add('logowordhovered');
    logo_words2.classList.add('logowordhovered');
    top_logo.classList.add('toplogohovered');

}
logo.onmouseleave = function(){
    logo.classList.remove('logohovered');
    logo_words1.classList.remove('logowordhovered');
    logo_words2.classList.remove('logowordhovered');
    top_logo.classList.remove('toplogohovered');
}
//* gallery//
current_photo_index = 0
photo_src_list = [
    "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg",
    "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg",
    "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg"
]
document.getElementById("current_photo").src = photo_src_list[0];
function next_photo(){
    if (current_photo_index < photo_src_list.length-1){
        current_photo_index += 1
        document.getElementById("current_photo").src = photo_src_list[current_photo_index];
    }
    else{
        current_photo_index = 0
        document.getElementById("current_photo").src = photo_src_list[current_photo_index];
    }
}

function previous_photo(){
    if (current_photo_index != 0){
        current_photo_index -= 1
        document.getElementById("current_photo").src = photo_src_list[current_photo_index];
    }
    else{
        current_photo_index = photo_src_list.length-1
        document.getElementById("current_photo").src = photo_src_list[current_photo_index];
    }
}