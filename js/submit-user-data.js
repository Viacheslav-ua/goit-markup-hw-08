(()=>{
    document
      .querySelector('.user-data-form')
      .addEventListener('submit', e => {
        e.preventDefault();

        new FormData(e.currentTarget).forEach((value, names) =>
        console.log(`${names}: ${value}`),
        );

        e.currentTarget.reset();
      });
  })();

  (()=>{
    document
      .querySelector('.mailing-form')
      .addEventListener('submit', e => {
        e.preventDefault();

        new FormData(e.currentTarget).forEach((value, names) =>
        console.log(`${names}: ${value}`),
        );

        e.currentTarget.reset();
      });
  })();