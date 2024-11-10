window.onload = () => {
    const preview = document.querySelector('.preview');
    preview.textContent = 'Напишите что-нибудь';

    const setSelection = () => {
        let range = document.createRange(),
            selection = window.getSelection();

        range.setStart(preview.firstChild, 19);
        range.setEnd(preview.firstChild, 19);
        selection.removeAllRanges(); 
        selection.addRange(range); 
        preview.focus(); 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setSelection();
                observer.unobserve(preview);
            }
        });
    });

    observer.observe(preview);
};