exports.seed = async function (knex) {
  await knex("categories").del()
  await knex("categories").insert([
    {
      id: "makanan",
      name: "Makanan",
      color: "blue",
      image: "makanan.jpg",
    },
    {
      id: "minuman",
      name: "Minuman",
      color: "orange",
      image: "minuman.jpg",
    },
    {
      id: "pencuci-mulut",
      name: "Pencuci Mulut",
      color: "pink",
      image: "pencuci-mulut.jpg",
    },
    {
      id: "kue-roti",
      name: "Kue & Roti",
      color: "cyan",
      image: "kue-roti.jpg",
    },
    {
      id: "fast-food",
      name: "Fast Food",
      color: "yellow",
      image: "fast-food.jpg",
    },
    {
      id: "seafood",
      name: "Seafood",
      color: "blue",
      image: "seafood.jpg",
    },
    {
      id: "sarapan",
      name: "Sarapan",
      color: "pink",
      image: "sarapan.jpg",
    },
    {
      id: "snack-camilan",
      name: "Snack dan Camilan",
      color: "orange",
      image: "snack-camilan.jpg",
    },
    {
      id: "buat-para-veggies",
      name: "Buat Para Veggies",
      color: "cyan",
      image: "buat-para-veggies.jpg",
    },
    {
      id: "porsi-besar",
      name: "Porsi Besar",
      color: "yellow",
      image: "porsi-besar.jpg",
    },
  ])
}
