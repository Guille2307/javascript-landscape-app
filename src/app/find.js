const filter = (profiles) => {
  return (event) => {
    const filter = event.target.value;
    profiles.forEach((profile) => {
      const author = profile.author.toLowerCase();
      if (
        filter.length === 0 ||
        profile.id == filter ||
        author.includes(filter.toLowerCase())
      ) {
        profile.card.style.display = "flex";
      } else {
        profile.card.style.display = "none";
      }
    });
  };
};

export { filter };
