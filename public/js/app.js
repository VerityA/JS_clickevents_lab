
const handleFormSubmit = function(event) {
  event.preventDefault();
  
  const title = this.title.value;
  const author = this.author.value;
  const genre = this.genre.value;

  const radioButtons = document.querySelectorAll("[type='radio']");

  const getSelected = function() {
    for (radioButton of radioButtons) {
      if (radioButton.checked) {
        return radioButton.value;
      }
    }
    return null;
  };

  const category = getSelected();

  if(title === null || author === null || category === null || genre === null) {
    return;
  };

  const resultParagraph = document.querySelector('#book-list');
  resultParagraph.textContent = `Title: ${title} Author:${author} Category: ${category} Genre: ${genre}`;

  const bookForm = document.querySelector('#book-form');
  bookForm.reset();
};


document.addEventListener('DOMContentLoaded', () => {9
  const bookForm = document.querySelector('#book-form');
  bookForm.addEventListener('submit', handleFormSubmit);
});
