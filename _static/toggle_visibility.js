<!-- inspired by: https://github.com/scopatz/hiddencode/blob/master/hidden_code_block.py-->

function showhide(element){
    if (!document.getElementById)
        return
    if (element.style.display == "block")
        element.style.display = "none"
    else
	element.style.display = "block"
};
