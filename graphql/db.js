export let people = [
  {
    id: 1,
    name: "Bread",
    age: 29,
    gender: "mail",
  },
  {
    id: 2,
    name: "Henry",
    age: 30,
    gender: "mail",
  },
  {
    id: 3,
    name: "Jade",
    age: 30,
    gender: "mail",
  },
  {
    id: 4,
    name: "Yura",
    age: 20,
    gender: "femail",
  },
];

export let movies = [
  {
    id: 1,
    title: "inception",
  },
  {
    id: 2,
    title: "avengerse",
  },
  {
    id: 3,
    title: "thor",
  },
  {
    id: 4,
    title: "ion man",
  },
  {
    id: 5,
    title: "sex on the beach",
  },
];

export const deleteMovieById = (id) => {
  let length = movies.length;
  if (movies.filter((m) => m.id === id)[0] === undefined) {
    return "not founded";
  }
  let title = movies.filter((m) => m.id === id)[0].title;
  movies = movies.filter((m) => m.id !== id);

  if (length === movies.length) return "nothing deleted";
  return `${title} is deleted`;
};

export const addMovie = (title) => {
  if (title === "") {
    return "not valid title";
  }
  const newMovie = {
    id: `${movies.length + 1}`,
    title,
  };
  movies.push(newMovie);
  return `success adding ${title}`;
};
