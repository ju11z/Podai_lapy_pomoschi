const labels = document.querySelectorAll('.dropdown__filter-selected');

labels.forEach((label)=>{
    nextLi=label.nextSibling;
    console.log(nextLi);

    ul=nextLi.childNodes[0];
    console.log(ul);
    optionss=Array.from(ul.querySelectorAll('.dropdown__select-option'));
    console.log(optionss);

    optionss.forEach((option) => {
        option.addEventListener('click', () => {
            label.textContent = option.textContent
        })
    })
})


/*
const options = Array.from(document.querySelectorAll('.dropdown__select-option'))

options.forEach((option) => {
    option.addEventListener('click', () => {
        label.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.querySelector('.dropdown__switch')
    const element = e.target

    if (element == toggle) return;

    const isDropdownChild = element.closest('.dropdown__filter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})
*/